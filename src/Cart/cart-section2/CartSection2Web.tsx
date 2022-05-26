import React from "react"
import {Typography, Divider, Stack} from "@mui/material"
import useStyles from "./style"

import CartTable from "./components/CartTable"
import CartForm from "./components/CartForm"
import CartPayment from "./components/CartPayment"
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

export default function CartSection2Web(props: Props) {
    const {cartItemList, formData, setFormData, deliveryPrice, totalPrice, onClickOrder} = props
    const theme = useTheme()
    const classes = useStyles()

    return (
        <>
            <Stack sx={{width: "100%"}}>
                <Typography
                    variant="h5"
                    mb={1}
                    sx={{alignSelf: "flex-start"}}
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                >
                    # 결제정보
                </Typography>
            </Stack>
            <Divider className={classes.divider} flexItem />

            {/* 장바구니 목록 */}
            <CartTable cartItemList={cartItemList} totalPrice={totalPrice} deliveryPrice={deliveryPrice} />

            <Divider className={classes.divider} flexItem />

            <CartForm formData={formData} setFormData={setFormData} />

            <CartPayment formData={formData} setFormData={setFormData} onClickOrder={onClickOrder} />
        </>
    )
}
