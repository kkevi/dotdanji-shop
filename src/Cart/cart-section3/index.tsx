import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {Typography, Divider, Stack, Button} from "@mui/material"
import {useTheme} from "@mui/system"

import useStyles from "./style"

import CartTable from "src/Cart/cart-section2/components/CartTable"

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"
import {CartOptionsType} from "types/cart-type"

type Props = {}

export default function CartSection3(props: Props) {
    const route = useRouter()
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
    const deliveryPrice = totalPrice >= 50000 ? 0 : 3000

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

    const onClickOrderList = () => {
        route.push("/mypage/orderlist")
    }

    const onClickHome = () => {
        route.push("/")
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

                <Stack direction="row">
                    <Stack width="50%" mt={8}>
                        <Typography
                            fontSize={16}
                            mb={2}
                            sx={{alignSelf: "flex-start"}}
                            className="pointFont"
                            color={theme.palette.secondary.dark}
                        >
                            # 배송정보
                        </Typography>
                        <Stack direction="row">
                            <Typography className={classes.deliveryMessage} width={100} color="#959595">
                                받는 분
                            </Typography>
                            <Typography className={classes.deliveryMessage}>김퐁구 / 010-1234-6789</Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography className={classes.deliveryMessage} width={100} color="#959595">
                                배송지
                            </Typography>
                            <Typography className={classes.deliveryMessage}>
                                (0123) 서울특별시 중구 중앙로2길 134 (광화문동, 퐁구빌라) 9층
                            </Typography>
                        </Stack>
                        <Stack direction="row">
                            <Typography className={classes.deliveryMessage} width={100} color="#959595">
                                배송요청사항
                            </Typography>
                            <Typography className={classes.deliveryMessage}>부재 시, 문 앞에 놓아주세요.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width="50%" mt={8}>
                        <Typography
                            fontSize={16}
                            mb={2}
                            sx={{alignSelf: "flex-start"}}
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
                            <Typography
                                className={classes.deliveryMessage}
                                width={100}
                                color={theme.palette.primary.dark}
                            >
                                총결제금액
                            </Typography>
                            <Typography className={classes.deliveryMessage} color={theme.palette.primary.dark}>
                                13,000원
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack className={classes.rootStack} my={8}>
                    <Button variant="outlined" onClick={onClickOrderList}>
                        구매내역 보기
                    </Button>
                    <Button variant="contained" onClick={onClickHome}>
                        홈으로 돌아가기
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
