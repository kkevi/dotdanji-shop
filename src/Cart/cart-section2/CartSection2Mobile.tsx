import React from "react"
import {Typography, Divider} from "@mui/material"
import useStyles from "./style-mobile"

import CartTableItem from "./components-mobile/CartTableItem"
import CartForm from "./components-mobile/CartForm"
import CartPayment from "./components-mobile/CartPayment"
import {useTheme} from "@mui/material"
//types
import {CartOptionsType} from "types/cart-type"
import {CartFormProps} from "types/cart-type"

type Props = {
    cartItemList: CartOptionsType[]
    formData: CartFormProps
    setFormData: React.Dispatch<React.SetStateAction<CartFormProps>>
    deliveryPrice: 0 | 3000
    totalPrice: number
    onClickOrder: () => void
}

declare global {
    interface Window {
        IMP: any
    }
}

export default function CartSection2Mobile(props: Props) {
    const {cartItemList, formData, setFormData, deliveryPrice, totalPrice, onClickOrder} = props
    const theme = useTheme()
    const classes = useStyles()

    return (
        <>
            <Typography
                variant="h6"
                mb={1}
                className="pointFont"
                color={theme.palette.secondary.dark}
                sx={{alignSelf: "flex-start"}}
            >
                # 결제정보
            </Typography>
            <Divider className={classes.divider} flexItem />

            {/* 장바구니 목록 */}
            {cartItemList?.map((cartItem, idx) => {
                return <CartTableItem idx={idx} cartItem={cartItem} />
            })}

            <Divider className={classes.divider} flexItem />

            <CartForm formData={formData} setFormData={setFormData} />

            <CartPayment formData={formData} setFormData={setFormData} onClickOrder={onClickOrder} />
        </>
    )
}
