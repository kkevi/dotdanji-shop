import React, {useEffect, useState} from "react"
import {useMediaQuery} from "@mui/material"
import {toast} from "react-toastify"

import {CartItemProps, CartOptionsType} from "types/cart-type"
import {useTheme} from "@mui/material"
import CartListPageWeb from "./CartListPageWeb/CartListPageWeb"
import CartListPageMobile from "./CartListPageMobile/CartListPageMobile"
import {useLocalStorage} from "react-use"

type Props = {
    onChangeNextStep: (index: number) => void
}

export default function CartSection1(props: Props) {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const {onChangeNextStep} = props
    //장바구니 데이터 표시
    const [cartLocalData, setCartLocalData] = useLocalStorage<CartItemProps[]>("cartData")
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    const [productDataList, setProductDataList] = useState([])
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
     * 로컬 저장 데이터 가져오기
     */
    useEffect(() => {
        if (cartLocalData === undefined) return

        // setCartItemList()
        console.log("cartLocalData===>", cartLocalData)
    }, [cartLocalData])

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
                    acc += data?.price * data?.count
                } else if (!cur[1]) {
                    setCheckAll(false)
                }
                return acc
            }, 0),
        )
    }

    /*
     * 체크리스트 업데이트 - 초기 모두 true
     */
    useEffect(() => {
        if (cartItemList.length === 0) return
        const list = cartItemList.reduce((acc: Record<string, boolean>, cur: CartOptionsType, idx) => {
            const id: string = cur.optionId as string
            acc[id] = true

            return acc
        }, {} as Record<string, boolean>)
        setCheckList(list)
    }, [cartItemList])

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

    //목록 삭제 기능
    const onDeleteCartItem = () => {
        if (cartItemList.length === 0) return toast.warn("삭제 할 상품이 없습니다.")
        if (confirm("선택 상품을 모두 삭제하시겠습니까?")) {
            setCartLocalData([])
        }
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
