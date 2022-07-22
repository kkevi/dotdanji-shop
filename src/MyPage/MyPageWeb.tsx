import React from "react"
import {useRouter} from "next/router"

import {Container, Stack, Typography, useTheme} from "@mui/material"
import useStyles from "./styles"

//icons
import OrderListPage from "./order-list-page/OrderListPage"
import ImageBox from "src/Components/image-box/ImageBox"

type MyPageProps = {
    userName: string
    onClickLoggedOut: () => void
}

type Box2Props = {
    onClick: () => void
    src: string
    title: string
}

export default function MyPageWeb(prop: MyPageProps) {
    const {userName, onClickLoggedOut} = prop
    const route = useRouter()
    const theme = useTheme()
    const classes = useStyles()

    const Box: React.FC<Box2Props> = ({onClick, src, title}) => {
        return (
            <Stack className={classes.box2} direction="row" onClick={onClick}>
                <ImageBox width={30} height={30} src={src} />
                <Typography ml={1} fontSize={18} fontWeight={700}>
                    {title}
                </Typography>
            </Stack>
        )
    }

    return (
        <Container maxWidth="lg">
            <Stack mt={12} direction="row" alignItems="center">
                <Typography className="pointFont" variant="h4" color={theme.palette.secondary.dark}>
                    {userName ? userName : "홍길동"}
                </Typography>
                <Typography className="pointFont" variant="h4" mr={2}>
                    님 안녕하세요!
                </Typography>
                <Typography
                    fontSize={14}
                    fontWeight={700}
                    color={theme.palette.primary.dark}
                    sx={{textDecoration: "underline"}}
                    onClick={onClickLoggedOut}
                >
                    로그아웃
                </Typography>
            </Stack>

            {/* 회원정보 리스트 */}
            <Stack direction="row" alignItems="center" mt={8} spacing={4}>
                <Box onClick={() => route.push("/mypage/wishlist")} src="/icons/icon-heart.png" title="찜 상품" />

                <Box
                    onClick={() => confirm("현재 준비 중인 서비스입니다.")}
                    src="/icons/icon-jewel.png"
                    title="마일리지"
                />

                <Box onClick={() => route.push("/mypage/modify")} src="/icons/icon-mypage.png" title="내 정보 수정" />

                <Box
                    onClick={() => route.push("/mypage/password-edit")}
                    src="/icons/icon-lock2.png"
                    title="비밀번호 변경"
                />
            </Stack>

            <OrderListPage front />
        </Container>
    )
}
