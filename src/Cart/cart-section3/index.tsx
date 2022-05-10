import React, {useEffect, useState} from "react"
import {Typography, Divider, Stack} from "@mui/material"
import {useTheme} from "@mui/system"

import useStyles from "./style"

import CartTable from "Cart/cart-section2/components/CartTable"

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
import {CartOptionsType} from "Cart/cart-type"

type Props = {}

export default function CartSection3(props: Props) {
    const theme = useTheme()
    const classes = useStyles()

    //장바구니 데이터 표시
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    /*
    실제 구매 데이터 생성
    {optionId:선택여부}
    */
    const [checkList, setCheckList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    //배송비 - 50,000원이상 무료
    const deliveryPrice = totalPrice >= 50000 ? 0 : 2500

    /*
     * 총 금액 계산
     */
    useEffect(() => {
        // console.log("checkList", checkList)
        // console.log("cartItemList", cartItemList)
        _handleDisplayPrice()
    }, [cartItemList])

    const _handleDisplayPrice = () => {
        setTotalPrice(
            Object.entries(checkList).reduce((acc, cur) => {
                const data = cartItemList.filter(it => it.optionId === cur[0])[0]
                if (cur[1]) {
                    acc += data.price * data.count
                }
                return acc
            }, 0),
        )
    }

    return (
        <>
            <Stack alignItems="center">
                <CheckCircleOutlineRoundedIcon sx={{fontSize: 80, fill: theme.palette.primary.main}} />
                <Typography fontSize={18} mt={6} className="pointFont" color={theme.palette.secondary.dark}>
                    고객님의 주문이 정상적으로 완료되었습니다.
                </Typography>
                <Stack mt={2} direction="row">
                    <p>주문번호 :</p>
                    <p>202205011111</p>
                </Stack>
            </Stack>
            <Stack mt={12} sx={{width: "100%"}}>
                <Typography
                    variant="h5"
                    mb={1}
                    sx={{alignSelf: "flex-start"}}
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                >
                    # 주문확인서
                </Typography>

                <Divider className={classes.divider} flexItem />

                <CartTable cartItemList={cartItemList} totalPrice={totalPrice} deliveryPrice={deliveryPrice} />

                <Divider className={classes.divider} flexItem />
            </Stack>
        </>
    )
}
