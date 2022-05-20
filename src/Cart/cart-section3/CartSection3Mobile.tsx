import React from "react"
import {Typography, Divider, Stack, Button} from "@mui/material"
import {useTheme} from "@mui/system"

import useStyles from "./style"

import CartTableItem from "src/Cart/cart-section2/components-mobile/CartTableItem"

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
import {CartOptionsType} from "types/cart-type"

type Props = {
    cartItemList: CartOptionsType[]
    totalPrice: number
    deliveryPrice: 0 | 3000
    onClickOrderList: () => void
    onClickHome: () => void
}

export default function CartSection3Mobile(prop: Props) {
    const {cartItemList, totalPrice, deliveryPrice, onClickOrderList, onClickHome} = prop
    const theme = useTheme()
    const classes = useStyles()

    return (
        <>
            <Stack alignItems="center">
                <CheckCircleOutlineRoundedIcon sx={{fontSize: 60, fill: theme.palette.primary.main}} />
                <Typography mt={4} className="pointFont" color={theme.palette.secondary.dark}>
                    고객님의 주문이 정상적으로 완료되었습니다.
                </Typography>
                <Stack mt={1} fontSize={14} direction="row">
                    <p>주문번호 :</p>
                    <p>202205011111</p>
                </Stack>
            </Stack>
            <Stack sx={{mt: 6, mb: 2, width: "100%"}}>
                <Typography variant="h6" mb={1} sx={{alignSelf: "flex-start"}} className="pointFont">
                    # 주문확인서
                </Typography>

                <Divider className={classes.divider} flexItem />

                {cartItemList.map((itm, idx) => (
                    <CartTableItem idx={idx} cartItem={itm} />
                ))}

                <Divider className={classes.divider} flexItem />

                <Typography
                    variant="h6"
                    sx={{mt: 6, mb: 2, alignSelf: "flex-start"}}
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                >
                    # 배송정보
                </Typography>
                <Stack className={classes.rowStackMobile}>
                    <Typography>받는 분</Typography>
                    <Typography>김퐁구 / 010-1234-6789</Typography>
                </Stack>
                <Stack className={classes.rowStackMobile}>
                    <Typography>배송지</Typography>
                    <Typography>(0123) 서울특별시 중구 중앙로2길 134 (광화문동, 퐁구빌라) 9층</Typography>
                </Stack>
                <Stack className={classes.rowStackMobile}>
                    <Typography>배송요청사항</Typography>
                    <Typography>부재 시, 문 앞에 놓아주세요.</Typography>
                </Stack>

                <Typography
                    variant="h6"
                    sx={{mt: 4, mb: 2, alignSelf: "flex-start"}}
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                >
                    # 결제정보
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography className={classes.deliveryMessage} width={100} color="#959595">
                        주문금액
                    </Typography>
                    <Typography className={classes.deliveryMessage}>13,000원</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography className={classes.deliveryMessage} width={100} color="#959595">
                        배송비
                    </Typography>
                    <Typography className={classes.deliveryMessage}>0원</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography className={classes.deliveryMessage} width={100} color={theme.palette.primary.dark}>
                        총결제금액
                    </Typography>
                    <Typography className={classes.deliveryMessage} color={theme.palette.primary.dark}>
                        13,000원
                    </Typography>
                </Stack>
            </Stack>

            <Stack className={classes.rootStack} mb={4}>
                <Button fullWidth variant="outlined" onClick={onClickOrderList} sx={{mr: 1}}>
                    구매내역 보기
                </Button>
                <Button fullWidth variant="contained" onClick={onClickHome} sx={{ml: 1}}>
                    홈으로 돌아가기
                </Button>
            </Stack>
        </>
    )
}
