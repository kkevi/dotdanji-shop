import React from "react"
import {Container, Grid, Stack, Typography, useTheme} from "@mui/material"
import {useRouter} from "next/router"

import useStyles from "./styles"
import EBookItem from "./ebook-item/EbookItem"
//icons
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import PersonIcon from "@mui/icons-material/Person"
import LockIcon from "@mui/icons-material/Lock"

type MyPageProps = {
    userName: string
    onClickLoggedOut: () => void
    fakeEbookList: {
        title: string
        url: string
        image: string
    }[]
}

export default function MyPageWeb(prop: MyPageProps) {
    const {userName, onClickLoggedOut, fakeEbookList} = prop
    const route = useRouter()
    const theme = useTheme()
    const classes = useStyles()

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
                <Stack className={classes.box} direction="column" onClick={() => route.push("/mypage/wishlist")}>
                    <FavoriteIcon className={classes.iconBig} />
                    <Typography className="pointFont" fontSize={20} my={3}>
                        찜상품
                    </Typography>
                    <Typography color="#777777">0개</Typography>
                </Stack>
                <Stack className={classes.box} direction="column" onClick={() => route.push("/mypage/orderlist")}>
                    <ShoppingBasketIcon className={classes.iconBig} />
                    <Typography className="pointFont" fontSize={20} my={3}>
                        구매내역
                    </Typography>
                    <Typography color="#777777">0개</Typography>
                </Stack>

                <Stack direction="column" spacing={3}>
                    <Stack className={classes.box2} direction="row" onClick={() => route.push("/mypage/modify")}>
                        <PersonIcon className={classes.iconSmall} />
                        <Typography fontSize={18} fontWeight={700}>
                            내 정보 수정
                        </Typography>
                    </Stack>

                    <Stack className={classes.box2} direction="row" onClick={() => route.push("/mypage/password-edit")}>
                        <LockIcon className={classes.iconSmall} />
                        <Typography fontSize={18} fontWeight={700}>
                            비밀번호 변경
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            {/* 이북리스트 */}
            <Stack className={classes.container} mt={8}>
                <Stack direction="row" alignItems="center" mb={6}>
                    <Typography className="pointFont" fontSize={20} mr={2}>
                        나의 E-BOOK
                    </Typography>
                    <Typography color="#777777">{fakeEbookList.length}권</Typography>
                </Stack>
                <Grid container alignItems="center" spacing={4}>
                    {fakeEbookList.map((itm, index) => {
                        return (
                            <Grid key={"ebookitem" + index} item xs={3}>
                                <EBookItem title={itm.title} url={itm.url} images={itm.image} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
        </Container>
    )
}
