import React from "react"
import useStyles from "./styles"

import {Container, Divider, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

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
                        <p className={classes.footerTextArea}>통신판매업 신고번호 | 12345678-12345678</p>
                    </Stack>
                    {smDown && <Divider orientation="horizontal" />}
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <Link href="#" underline="none">
                            고객센터
                        </Link>
                        <p className={classes.footerTextArea}>contact@simbaat.com</p>
                        <p className={classes.footerTextArea}>Copyright ⓒ 2021 Simbaat All rights reserved.</p>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}