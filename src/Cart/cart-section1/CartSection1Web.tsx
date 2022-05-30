import React from "react"
import {Typography, Divider, Button, Stack, useTheme} from "@mui/material"
import useStyles from "./style"

import {CartOptionsType} from "types/cart-type"
import CartTable from "./components/CartTable"
import TotalPrice from "./components/TotalPrice"

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

export default function CartSection1Web(props: Props) {
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

    return (
        <>
            <Stack className={classes.rootStack}>
                <Typography variant="h5" mb={1} className="pointFont" color={theme.palette.secondary.dark}>
                    # 제품
                </Typography>
                <Button sx={{color: "black"}} onClick={onDeleteCartItem}>
                    선택상품 삭제
                </Button>
            </Stack>
            <Divider className={classes.divider} flexItem />

            {/* 장바구니 목록 */}
            <CartTable
                cartItemList={cartItemList}
                setCartItemList={setCartItemList}
                totalPrice={totalPrice}
                deliveryPrice={deliveryPrice}
                //check
                checkList={checkList}
                setCheckList={setCheckList}
                checkAll={checkAll}
                onCheckAll={onCheckAll}
            />

            <Divider className={classes.divider} flexItem />

            {/* 총 결제 금액 계산 */}
            <TotalPrice deliveryPrice={deliveryPrice} totalPrice={totalPrice} />

            {/* 주문결제버튼 */}
            <Stack className={classes.rootStack} width={"50% !important"} mb={16}>
                <Button variant="outlined" fullWidth onClick={() => {}}>
                    <Typography variant="h6">쇼핑 계속하기</Typography>
                </Button>
                <Button variant="contained" fullWidth onClick={onClickOrder} disableElevation>
                    <Typography variant="h6">주문하기</Typography>
                </Button>
            </Stack>
        </>
    )
}
