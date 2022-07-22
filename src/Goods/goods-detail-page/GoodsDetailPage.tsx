import React, {useEffect, useState} from "react"

import {SelectChangeEvent, useMediaQuery, useTheme} from "@mui/material"
//components
import {GoodsItemDefaultData, GoodsItemType} from "types/goods-type"

import Router, {useRouter} from "next/router"
import {CartOptionsType, OptionCart} from "types/cart-type"

import GoodsDetailPageWeb from "./GoodsDetailPageWeb"
import GoodsDetailPageMobile from "./GoodsDetailPageMobile"
import {useLocalStorage} from "react-use"
import axios from "axios"

type Props = {
    productId: string
}

export default function GoodsDetailPage(props: Props) {
    const {productId} = props
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [cartData, setCartData] = useLocalStorage("cartData", "{}")

    //데이터
    const [goodsItemData, setGoodsItemData] = useState<GoodsItemType>(GoodsItemDefaultData)
    const {sale, price} = goodsItemData
    const options = [{optionId: "", name: "test", addPlace: 1000}]
    //할인 계산식
    var resultPrice = sale > 0 ? price - price * (sale / 100) : price

    //옵션 선택 박스
    const defaultOption = "옵션 선택"
    const [selectValue, setSelectValue] = useState(defaultOption)
    const [selectValueList, setSelectValueList] = useState<OptionCart[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        onLoadData()
        console.log("options:", options)
    }, [productId])

    const onLoadData = async () => {
        if (productId === "") return
        axios.defaults.withCredentials = true

        const stage = "dotdanji-stages"
        const id = "dotdanji-goods-list" // goods table 가져옴
        try {
            await axios({
                url: `/api/${stage}/${id}`,
                method: "GET",
                withCredentials: true, // 쿠키 cors 통신 설정 허용
                headers: {
                    "Access-Control-Allow-Origin": "https://dotdanji.com",
                    "Content-Type": "application/json",
                },
                params: {
                    productId: productId,
                },
            })
                .then(response => {
                    const data = response.data.message[0]
                    setGoodsItemData({
                        productId: data.productId,
                        categoryId: data.categoryId,
                        listThumbnail: data.listThumbnail,
                        detailThumbnails: JSON.parse(data.detailThumbnails) || [],
                        mainColor: data.mainColor,
                        options: JSON.parse(data.options) || [],
                        name: data.name,
                        tags: [],
                        infoText: data.infoText,
                        infoImage: data.infoHtml,
                        price: data.price,
                        sale: data.sale,
                    })
                })
                .catch(function (error) {
                    console.log("axios error:", error)
                })
        } catch (error) {
            //응답 실패
            console.error("try error:", error)
        }
    }

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
        // return alert("해당 서비스는 준비중입니다. 빠른 시일내에 업데이트 하겠습니다.")
        // if (!userStore.isLoggedIn) {
        //     return alert("로그인 후 이용이 가능합니다.")
        // }
        if (selectValueList.length < 1) return alert("옵션을 선택 해주세요.")

        try {
            //TODO: 서버 장바구니에 저장 기능 추가
            const data = selectValueList.reduce((acc: CartOptionsType[], cur: OptionCart, index) => {
                const goodsOptionData = options.filter(it => it.optionId === cur.optionId)[0]
                acc.push({
                    goodsId: productId,
                    count: cur.count,
                    price: (goodsOptionData.addPlace + resultPrice) * cur.count,
                    optionId: cur.optionId,
                    optionName: goodsOptionData.name,
                    optionAddPlace: goodsOptionData.addPlace,
                })
                return acc
            }, [])

            if (!cartData) {
                // 기존 장바구니가 비어있을 경우
                await setCartData(JSON.stringify(data))
                if (confirm("장바구니를 확인하시겠습니까?")) await Router.push("/cart")
            } else {
                // 장바구니에 하나라도 값이 있을 경우
                const parseCartData = JSON.parse(cartData)

                const data_OptionIds = data.map(itm => {
                    return itm.optionId
                })
                const cartData_OptionIds = parseCartData.map((itm: {optionId: any}) => {
                    return itm.optionId
                })
                const comparing = data_OptionIds.filter(it => cartData_OptionIds.includes(it))
                if (comparing.length === 0) {
                    // 없을 경우
                    const newCartData = [...data, ...parseCartData]
                    await setCartData(JSON.stringify(newCartData))
                    if (confirm("장바구니를 확인하시겠습니까?")) await Router.push("/cart")
                } else {
                    // 동일한 옵션이 있을 경우
                    if (confirm("장바구니에 동일한 상품이 존재합니다. 장바구니로 이동하시겠습니까?")) {
                        return Router.push("/cart")
                    }
                }
            }
        } catch (e) {
            console.log("e:", e)
        }
    }

    //바로 구매하기 클릭
    const onClickBuy = async () => {
        return alert("해당 서비스는 준비중입니다. 빠른 시일내에 업데이트 하겠습니다.")
        // if (!userStore.isLoggedIn) {
        //     return alert("로그인 후 이용이 가능합니다.")
        // }
        // if (selectValueList.length < 1) return alert("옵션을 선택 해주세요.")

        // try {
        //     const data = selectValueList.reduce((acc: CartOptionsType[], cur: OptionCart, index) => {
        //         const goodsOptionData = options.filter(it => it.optionId === cur.optionId)[0]
        //         acc.push({
        //             goodsId: goodsId,
        //             count: cur.count,
        //             price: (goodsOptionData.addPlace + resultPrice) * cur.count,
        //             optionId: cur.optionId,
        //             optionName: goodsOptionData.name,
        //             optionAddPlace: goodsOptionData.addPlace,
        //         })
        //         return acc
        //     }, [])
        //     await goodsStore.setCartItem(data)
        //     Router.push({pathname: "/cart", query: {sectionNum: "1"}})
        // } catch (e) {
        //     console.log("e:", e)
        // }
    }

    return (
        <>
            {mobile ? (
                <GoodsDetailPageMobile
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
