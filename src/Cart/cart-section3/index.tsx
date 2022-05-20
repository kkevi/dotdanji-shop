import React, {useState} from "react"
import {useRouter} from "next/router"
import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"
import {CartOptionsType} from "types/cart-type"

import CartSection3Web from "./CartSection3Web"
import CartSection3Mobile from "./CartSection3Mobile"

export default function CartSection3() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    //장바구니 데이터 표시
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    /*
    실제 구매 데이터 생성
    {optionId:선택여부}
    */
    const [totalPrice, setTotalPrice] = useState<number>(0)
    //배송비 - 50,000원이상 무료
    const deliveryPrice = totalPrice >= 50000 ? 0 : 3000

    const onClickOrderList = () => {
        route.push("/mypage/orderlist")
    }

    const onClickHome = () => {
        route.push("/")
    }

    return (
        <>
            {mobile ? (
                <CartSection3Mobile
                    cartItemList={cartItemList}
                    totalPrice={totalPrice}
                    deliveryPrice={deliveryPrice}
                    onClickOrderList={onClickOrderList}
                    onClickHome={onClickHome}
                />
            ) : (
                <CartSection3Web
                    cartItemList={cartItemList}
                    totalPrice={totalPrice}
                    deliveryPrice={deliveryPrice}
                    onClickOrderList={onClickOrderList}
                    onClickHome={onClickHome}
                />
            )}
        </>
    )
}
