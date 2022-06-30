import React from "react"
import useStyles from "./styles"

import {Container, Divider, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/material"
export default function Footer() {
    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div className={classes.footer}>
            <Container maxWidth="lg" sx={{py: smDown ? 3 : 6}}>
                <Stack direction={smDown ? "column" : "row"} justifyContent="space-between">
                    <div style={{opacity: 0.6}}>
                        <img src="/images/logo3.png" alt="" width="130px" />
                    </div>
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <Link href="https://www.simbaat.com" underline="none">
                            회사소개
                        </Link>
                        <Link href="/terms-of-use" underline="none">
                            이용약관
                        </Link>
                        <Link href="/privacy-policy" underline="none">
                            개인정보 처리방침
                        </Link>
                    </Stack>
                    {smDown && <Divider orientation="horizontal" />}
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <p className={classes.footerTextArea}>대표자 | 오홍석</p>
                        <p className={classes.footerTextArea}>사업자 등록번호 | 456-88-01404</p>
                        <p className={classes.footerTextArea}>통신판매업 신고번호 | 2021-서울마포-0644</p>
                        <p className={classes.footerTextArea}>
                            주소 | 서울특별시 중구 세종대로 136, 서울파이낸스센터 3층
                        </p>
                        <p className={classes.footerTextArea}>
                            고객센터 | <a href="tel:16682584">1668-2584</a>
                        </p>
                    </Stack>
                    {smDown && <Divider orientation="horizontal" />}
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <Link href="/proposal" underline="none">
                            제휴&문의
                        </Link>
                        <p className={classes.footerTextArea}>simkids@simbaat.com</p>
                        <p className={classes.footerTextArea}>Copyright ⓒ 2021 Simbaat All rights reserved.</p>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}
