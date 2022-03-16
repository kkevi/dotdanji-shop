import React, {useEffect, useState} from "react"
import useStyles from "./styles"
import router from "next/router"
//ui components
import {ButtonGroup, Container, IconButton, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"
//icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
//fake data
import {GOODS_CATEGORY_DATA} from "Components/fake-data"

export default function Topbar() {
    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))
    const [category, setCategory] = useState(GOODS_CATEGORY_DATA)

    //스크롤시, 스타일변경
    const [scrollPosition, setScrollPosition] = useState(0)
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScroll)
    })

    const textColor = {color: "white"}

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                background: theme.palette.primary.dark,
                zIndex: 10,
            }}
        >
            <div style={{position: "relative"}}>
                <Container maxWidth="lg" sx={{py: scrollPosition < 100 ? 4 : 1, transition: "0.5s"}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <div>
                            <Link href={"/"}>
                                <img src="/images/logo3.png" alt="" width="130px" />
                            </Link>
                        </div>

                        <Stack
                            sx={{width: "40%", marginLeft: 32}}
                            direction="row"
                            spacing={4}
                            justifyContent="space-between"
                            fontWeight={700}
                        >
                            {category.map(({categoryId, title}, idx) => (
                                <Link
                                    href={`/goods/${categoryId}`}
                                    underline="none"
                                    key={categoryId + idx}
                                    style={textColor}
                                >
                                    {title}
                                </Link>
                            ))}

                            <Link href="#" underline="none" style={textColor}>
                                제휴&문의
                            </Link>
                        </Stack>

                        <Stack>
                            <ButtonGroup size="small" disableElevation>
                                <IconButton sx={{marginRight: 2}} onClick={() => router.push("/")}>
                                    <ShoppingCartRoundedIcon style={{color: "white", fontSize: "28px"}} />
                                </IconButton>
                                <IconButton onClick={() => router.push("/")}>
                                    <AccountCircleIcon style={{color: "white", fontSize: "28px"}} />
                                </IconButton>
                            </ButtonGroup>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}
