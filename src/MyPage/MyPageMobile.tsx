import React from "react"
import {useRouter} from "next/router"

import {Container, Stack, Typography, useTheme} from "@mui/material"
import useStyles from "./styles-mobile"

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

export default function MyPageMobile(prop: MyPageProps) {
    const {userName, onClickLoggedOut} = prop
    const route = useRouter()
    const theme = useTheme()
    const classes = useStyles()

    const Box: React.FC<Box2Props> = ({onClick, src, title}) => {
        return (
            <Stack className={classes.box2} direction="row" onClick={onClick}>
                <ImageBox width={25} height={25} src={src} />
                <Typography ml={1} fontSize={14} fontWeight={700}>
                    {title}
                </Typography>
            </Stack>
        )
    }

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
            <Stack direction="row" alignItems="center" alignSelf="center" mt={4} spacing={2}>
                <Box onClick={() => route.push("/mypage/wishlist")} src="/icons/icon-heart.png" title="찜 상품" />

                <Box
                    onClick={() => confirm("현재 준비 중인 서비스입니다.")}
                    src="/icons/icon-jewel.png"
                    title="마일리지"
                />
            </Stack>
            {/* 회원정보 리스트2 */}
            <Stack direction="row" alignItems="center" alignSelf="center" mt={2} spacing={2}>
                <Box onClick={() => route.push("/mypage/inquiry")} src="/icons/icon-mail.png" title="문의 내역" />
                <Box onClick={() => route.push("/mypage/modify")} src="/icons/icon-mypage.png" title="내 정보 수정" />
            </Stack>

            <OrderListPage front />
        </Container>
    )
}
