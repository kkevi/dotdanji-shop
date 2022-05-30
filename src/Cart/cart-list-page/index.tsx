import React, {useEffect, useState} from "react"
import {useMediaQuery} from "@mui/material"
import {toast} from "react-toastify"

import {CartOptionsType, OptionCart} from "types/cart-type"
import {GoodsItemType, OptionsType} from "types/goods-type"
import {CART_ITEMS_DATA} from "src/Components/fake-data/fake-cart"
import {GOODS_ITEMS_DATA} from "src/Components/fake-data/fake-goods"
import useStore from "store/useStore"
import {useTheme} from "@mui/material"
import CartListPageWeb from "./CartListPageWeb/CartListPageWeb"
import CartListPageMobile from "./CartListPageMobile/CartListPageMobile"

type Props = {
    onChangeNextStep: (index: number) => void
}

export default function CartSection1(props: Props) {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const {goodsStore} = useStore()
    const {onChangeNextStep} = props
    //장바구니 데이터 표시
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    /*
    실제 구매 데이터 생성
    {optionId:선택여부}
    */
    const [checkList, setCheckList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [checkAll, setCheckAll] = useState(true)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    //배송비 - 50,000원이상 무료
    const deliveryPrice = totalPrice >= 50000 ? 0 : 3000

    /*
     * 총 금액 계산
     */
    useEffect(() => {
        _handleDisplayPrice()
    }, [cartItemList, checkList, checkAll])

    const _handleDisplayPrice = () => {
        setTotalPrice(
            Object.entries(checkList).reduce((acc, cur) => {
                const data = cartItemList.filter(it => it.optionId === cur[0])[0]
                if (cur[1]) {
                    acc += data.price * data.count
                } else if (!cur[1]) {
                    setCheckAll(false)
                }
                return acc
            }, 0),
        )
    }

    /*
     * 장바구니 데이터 가져오기
     */
    useEffect(() => {
        //체크리스트 업데이트 - 초기 모두 true
        setCheckList(
            cartItemList.reduce((cur: any, acc: any, idx) => {
                const id: string = cur.optionId as string
                acc[id] = true
                console.log("acc", acc)

                return acc
            }, {} as Record<string, boolean>),
        )

        if (goodsStore.cartItem === undefined) return
        setCartItemList(goodsStore.cartItem)
    }, [cartItemList, goodsStore, checkList])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            const list: CartOptionsType[] = []
            //카트 정보 = goodsId,optionId,count
            const result = await CART_ITEMS_DATA

            result.map((itm, index) => {
                //해당 id의 상품 정보를 가져온다.
                const goodsId = itm.goodsId
                const goodsData = GOODS_ITEMS_DATA.filter(it => it.goodsId === goodsId)[0] as GoodsItemType
                const optionData = goodsData.options as OptionsType[]

                //새로운 장바구니 리스트 생성
                list.push(
                    ...itm.options.reduce((acc: CartOptionsType[], cur: OptionCart) => {
                        //상품의 옵셥정보를 optionId로 맵핑
                        const data = optionData.filter(it => it.optionId === cur.optionId)[0]

                        acc.push({
                            goodsId: goodsId,
                            count: cur.count,
                            price: goodsData.price + data.addPlace,
                            optionId: cur.optionId,
                            optionName: data.name,
                            optionAddPlace: data.addPlace,
                        })

                        return acc
                    }, []),
                )
            })

            setCartItemList(list)

            list.map(({optionId}) => (checkList[optionId] = true))
        } catch (e) {
            console.log(e)
        }
    }

    /*
     * 체크기능
     */
    useEffect(() => {
        setCheckList(checkList)
    }, [checkList])

    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckAll(event.target.checked)
        for (const [key, value] of Object.entries(checkList)) {
            checkList[key] = event.target.checked
        }
    }

    //주문하기 버튼 클릭
    const onClickOrder = () => {
        if (totalPrice === 0) return toast.info("상품을 선택해주세요.")
        onChangeNextStep(1)
    }

    const onDeleteCartItem = () => {
        confirm("선택 상품을 모두 삭제하시겠습니까?")
    }
    return (
        <>
            {mobile ? (
                <CartListPageWeb
                    onCheckAll={onCheckAll}
                    onClickOrder={onClickOrder}
                    onDeleteCartItem={onDeleteCartItem}
                    cartItemList={cartItemList}
                    setCartItemList={setCartItemList}
                    checkList={checkList}
                    setCheckList={setCheckList}
                    checkAll={checkAll}
                    totalPrice={totalPrice}
                    deliveryPrice={deliveryPrice}
                />
            ) : (
                <CartListPageMobile
                    onCheckAll={onCheckAll}
                    onClickOrder={onClickOrder}
                    onDeleteCartItem={onDeleteCartItem}
                    cartItemList={cartItemList}
                    setCartItemList={setCartItemList}
                    checkList={checkList}
                    setCheckList={setCheckList}
                    checkAll={checkAll}
                    totalPrice={totalPrice}
                    deliveryPrice={deliveryPrice}
                />
            )}
        </>
    )
}
