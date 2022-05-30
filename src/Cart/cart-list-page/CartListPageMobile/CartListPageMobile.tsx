import React from "react"
import {Typography, Divider, Button, Stack, FormControlLabel, Checkbox} from "@mui/material"
import useStyles from "./styles"

import {CartOptionsType} from "types/cart-type"
import TotalPrice from "./components/TotalPrice"
import CartTableItem from "./components/CartTableItem"
import {useTheme} from "@mui/material"
type Props = {
    onCheckAll: (event: React.ChangeEvent<HTMLInputElement>) => void
    onClickOrder: () => void
    onDeleteCartItem: () => void
    cartItemList: CartOptionsType[]
    setCartItemList: React.Dispatch<React.SetStateAction<CartOptionsType[]>>
    checkList: Record<string, boolean>
    setCheckList: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
    checkAll: boolean
    totalPrice: number
    deliveryPrice: 0 | 3000
}

export default function CartSection1Mobile(props: Props) {
    const {
        onCheckAll,
        onClickOrder,
        onDeleteCartItem,
        cartItemList,
        setCartItemList,
        checkList,
        setCheckList,
        checkAll,
        totalPrice,
        deliveryPrice,
    } = props
    const classes = useStyles()
    const theme = useTheme()

    const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckList({
            ...checkList,
            [event.target.name]: event.target.checked,
        })
    }

    return (
        <>
            <Typography
                variant="h6"
                mb={1}
                className="pointFont"
                color={theme.palette.secondary.dark}
                sx={{alignSelf: "flex-start"}}
            >
                # 제품
            </Typography>
            <Divider className={classes.divider} flexItem />
            <Stack className={classes.rootStack}>
                <FormControlLabel
                    label=""
                    color="primary"
                    control={<Checkbox checked={checkAll} onChange={onCheckAll} />}
                />
                <Button sx={{color: "black"}} onClick={onDeleteCartItem}>
                    선택상품 삭제
                </Button>
            </Stack>

            {/* 장바구니 목록 */}
            {cartItemList.map((itm, index) => {
                return (
                    <CartTableItem
                        index={index}
                        cartItem={itm}
                        cartItemList={cartItemList}
                        checkList={checkList}
                        setCartItemList={setCartItemList}
                        onChangeCheckbox={onChangeCheckbox}
                    />
                )
            })}

            <Divider className={classes.divider} flexItem />

            {/* 총 결제 금액 계산 */}
            <TotalPrice deliveryPrice={deliveryPrice} totalPrice={totalPrice} />

            {/* 주문결제버튼 */}
            <Button className={classes.containedButton} fullWidth onClick={onClickOrder} disableElevation>
                <Typography>주문하기</Typography>
            </Button>
        </>
    )
}
