import React from "react"
import {Container, Stack, Typography, useTheme} from "@mui/material"
import {useRouter} from "next/router"

import useStyles from "./styles-mobile"

//icons
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import PersonIcon from "@mui/icons-material/Person"
import LockIcon from "@mui/icons-material/Lock"
import OrderListPage from "./order-list-page/OrderListPage"

type MyPageProps = {
    userName: string
    onClickLoggedOut: () => void
}

export default function MyPageMobile(prop: MyPageProps) {
    const {userName, onClickLoggedOut} = prop
    const route = useRouter()
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Container maxWidth="sm" sx={{backgroundColor: "#fff"}}>
            <Stack mt={4} direction="row" alignItems="center">
                <Typography variant="h6" className="pointFont">
                    {userName ? userName : "홍길동"}
                </Typography>
                <Typography variant="h6" className="pointFont" mr={1}>
                    님 안녕하세요!
                </Typography>
                <Typography
                    fontSize={11}
                    fontWeight={700}
                    color={theme.palette.primary.dark}
                    sx={{textDecoration: "underline"}}
                    onClick={onClickLoggedOut}
                >
                    로그아웃
                </Typography>
            </Stack>

            {/* 회원정보 리스트 */}
            <Stack direction="row" alignItems="center" alignSelf="center" mt={4} spacing={4}>
                <Stack className={classes.box} direction="column" onClick={() => route.push("/mypage/wishlist")}>
                    <FavoriteIcon className={classes.iconBig} />
                    <Typography className="pointFont">찜상품</Typography>
                    <Typography fontSize={11} color="#777777">
                        0개
                    </Typography>
                </Stack>
                <Stack className={classes.box} direction="column" onClick={() => route.push("/mypage/orderlist")}>
                    <ShoppingBasketIcon className={classes.iconBig} />
                    <Typography className="pointFont">구매내역</Typography>
                    <Typography fontSize={11} color="#777777">
                        0개
                    </Typography>
                </Stack>
            </Stack>
            {/* 회원정보 리스트2 */}
            <Stack direction="row" alignItems="center" alignSelf="center" mt={2} spacing={4}>
                <Stack className={classes.box2} direction="row" onClick={() => route.push("/mypage/modify")}>
                    <PersonIcon className={classes.iconSmall} />
                    <Typography fontSize={14} fontWeight={700}>
                        내 정보 수정
                    </Typography>
                </Stack>

                <Stack className={classes.box2} direction="row" onClick={() => route.push("/mypage/password-edit")}>
                    <LockIcon className={classes.iconSmall} />
                    <Typography fontSize={14} fontWeight={700}>
                        비밀번호 변경
                    </Typography>
                </Stack>
            </Stack>

            <OrderListPage front />
        </Container>
    )
}
