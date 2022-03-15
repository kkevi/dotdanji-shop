import React from "react"
import {Button, ButtonGroup, Container, IconButton, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"
import useStyles from "./styles"

export default function Topbar() {
    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    const category = [
        {id: "", name: "E-BOOK"},
        {id: "", name: "교재"},
        {id: "", name: "교구"},
    ]

    const textColor = {color: "white"}

    return (
        <div style={{position: "fixed", top: 0, left: 0, width: "100%", background: theme.palette.primary.dark}}>
            <div style={{position: "relative"}}>
                <Container maxWidth="lg" sx={{py: 4}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <div>
                            {/* TODO : 로고 화이트 버전으로 변경 필요 */}
                            <img src="/images/logo.png" alt="" width="130px" />
                        </div>
                        <Stack
                            sx={{width: "40%"}}
                            direction="row"
                            spacing={4}
                            justifyContent="space-between"
                            fontWeight={700}
                        >
                            {category.map(({id, name}, idx) => (
                                <Link href="#" underline="none" key={id} style={textColor}>
                                    {name}
                                </Link>
                            ))}
                            <Link href="#" underline="none" style={textColor}>
                                제휴&문의
                            </Link>
                        </Stack>
                        <Stack>
                            <ButtonGroup size="small" disableElevation>
                                <IconButton>로그인</IconButton>
                                <Button style={textColor}>회원가입</Button>
                            </ButtonGroup>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}
