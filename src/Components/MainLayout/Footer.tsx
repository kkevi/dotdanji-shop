import React from "react"
import useStyles from "./styles"
import styled from "styled-components"

import {Container, Divider, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

export default function Footer() {
    const styles = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    const textColor = {color: theme.palette.primary.light}
    const textColor2 = {color: "white"}

    return (
        <div style={{backgroundColor: theme.palette.primary.dark, color: "#777", fontSize: "0.85rem"}}>
            <Container maxWidth="lg" sx={{py: smDown ? 3 : 6}}>
                <Stack direction={smDown ? "column" : "row"} justifyContent="space-between">
                    <div>
                        <img src="/images/logo3.png" alt="" width="130px" />
                    </div>
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <Link style={textColor} href="#" underline="none">
                            회사소개
                        </Link>
                        <Link style={textColor} href="#" underline="none">
                            이용약관
                        </Link>
                        <Link style={textColor} href="#" underline="none">
                            개인정보 처리방침
                        </Link>
                    </Stack>
                    {smDown && <Divider orientation="horizontal" />}
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <General>대표자 | 오홍석</General>
                        <General>사업자 등록번호 | 456-88-01404</General>
                        <General>통신판매업 신고번호 | 12345678-12345678</General>
                    </Stack>
                    {smDown && <Divider orientation="horizontal" />}
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <Link style={textColor} href="#" underline="none">
                            고객센터
                        </Link>
                        <General>contact@simbaat.com</General>
                        <General>Copyright ⓒ 2021 Simbaat All rights reserved.</General>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}

const General = styled.p`
    color: white;
`
