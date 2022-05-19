import React, {useEffect, useState} from "react"
import {useTheme} from "@mui/system"
import {SelectChangeEvent, useMediaQuery} from "@mui/material"
//components
import {GOODS_ITEMS_DATA} from "components/fake-data/fake-goods"
import {GoodsItemProps} from "types/goods-type"

import Router, {useRouter} from "next/router"
import {CartOptionsType, OptionCart} from "types/cart-type"
import useStore from "store/useStore"

import GoodsDetailPageWeb from "./GoodsDetailPageWeb"
import GoodsDetailPageMobile from "./GoodsDetailPageMobile"

type Props = {
    goodsId: string
}

export default function GoodsDetailPage(props: Props) {
    const {goodsId} = props
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const {userStore, goodsStore} = useStore()

    //데이터
    const [goodsItemData, setGoodsItemData] = useState<GoodsItemProps>(GOODS_ITEMS_DATA[0])
    const {sale, price, options = []} = goodsItemData
    //할인 계산식
    var resultPrice = sale > 0 ? price - price * (sale / 100) : price

    //옵션 선택 박스
    const defaultOption = "옵션 선택"
    const [selectValue, setSelectValue] = useState(defaultOption)
    const [selectValueList, setSelectValueList] = useState<OptionCart[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        //전체 금액 표시
        setTotalPrice(
            selectValueList.reduce((acc, cur) => {
                if (!options) return acc
                const optionValue = options.filter(it => it.optionId === cur.optionId)[0].addPlace
                acc += (optionValue + resultPrice) * cur.count
                return acc
            }, 0),
        )
    }, [selectValueList, selectValue])

    // 옵션 선택
    const onSelectOption = (event: SelectChangeEvent) => {
        const {value} = event.target
        onAddOptionList(value)
        setSelectValue(value)
    }

    //선택 옵션 배열 추가
    const onAddOptionList = (id: string) => {
        if (id === defaultOption) return
        const search = selectValueList.findIndex(it => it.optionId === id)
        if (search === -1) {
            // 옵션 선택하여 추가
            const arr = options
            const selectOptionId = arr.filter(it => it.optionId === id)[0].optionId
            selectValueList.push({
                optionId: selectOptionId,
                count: 1,
            })
        } else {
            // 이미 추가되어있는 옵션 추가 선택
            alert("이미 선택 되어있는 옵션입니다. 수량변경을 통해 개수를 조절 해주세요.")
        }
    }

    // 옵션 배열 삭제
    const onDeleteOption = (optionId: string) => {
        setSelectValueList(prev => prev.filter(it => it.optionId !== optionId))
        setSelectValue(defaultOption)
    }

    //장바구니 담기 클릭
    const onCickCart = async () => {
        // if (!userStore.isLoggedIn) {
        //     return alert("로그인 후 이용이 가능합니다.")
        // }
        if (selectValueList.length < 1) return alert("옵션을 선택 해주세요.")

        try {
            //TODO: 서버 장바구니에 저장 기능 추가
            if (confirm("장바구니를 확인하시겠습니까?")) {
                const data = selectValueList.reduce((acc: CartOptionsType[], cur: OptionCart, idx) => {
                    const goodsOptionData = options.filter(it => it.optionId === cur.optionId)[0]
                    acc.push({
                        goodsId: goodsId,
                        count: cur.count,
                        price: (goodsOptionData.addPlace + resultPrice) * cur.count,
                        optionId: cur.optionId,
                        optionName: goodsOptionData.name,
                        optionAddPlace: goodsOptionData.addPlace,
                    })
                    return acc
                }, [])
                await goodsStore.setCartItem(data)
                Router.push({pathname: "/cart", query: {sectionNum: "0"}})
            }
        } catch (e) {
            console.log("e:", e)
        }
    }

    //바로 구매하기 클릭
    const onClickBuy = async () => {
        // if (!userStore.isLoggedIn) {
        //     return alert("로그인 후 이용이 가능합니다.")
        // }
        if (selectValueList.length < 1) return alert("옵션을 선택 해주세요.")

        try {
            const data = selectValueList.reduce((acc: CartOptionsType[], cur: OptionCart, idx) => {
                const goodsOptionData = options.filter(it => it.optionId === cur.optionId)[0]
                acc.push({
                    goodsId: goodsId,
                    count: cur.count,
                    price: (goodsOptionData.addPlace + resultPrice) * cur.count,
                    optionId: cur.optionId,
                    optionName: goodsOptionData.name,
                    optionAddPlace: goodsOptionData.addPlace,
                })
                return acc
            }, [])
            await goodsStore.setCartItem(data)
            Router.push({pathname: "/cart", query: {sectionNum: "1"}})
        } catch (e) {
            console.log("e:", e)
        }
    }

    return (
        <>
            {mobile ? (
                <GoodsDetailPageMobile
                    goodsId={goodsId}
                    goodsItemData={goodsItemData}
                    selectValueList={selectValueList}
                    setSelectValueList={setSelectValueList}
                    onSelectOption={onSelectOption}
                    onDeleteOption={onDeleteOption}
                    onCickCart={onCickCart}
                    onClickBuy={onClickBuy}
                    totalPrice={totalPrice}
                />
            ) : (
                <GoodsDetailPageWeb
                    goodsId={goodsId}
                    goodsItemData={goodsItemData}
                    selectValueList={selectValueList}
                    setSelectValueList={setSelectValueList}
                    onSelectOption={onSelectOption}
                    onDeleteOption={onDeleteOption}
                    onCickCart={onCickCart}
                    onClickBuy={onClickBuy}
                    totalPrice={totalPrice}
                />
            )}
        </>
    )
}
