import React, {useEffect, useState} from "react"
import useStyles from "./styles"
import Router from "next/router"
//ui components
import {Button, ButtonGroup, Container, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"
//icon
//fake data
import {GOODS_CATEGORY_DATA} from "Components/fake-data/fake-goods"
import UserLoginButton from "./user-login-button/UserLoginButton"
import ShopCartButton from "./shop-cart-button/ShopCartButton"
import {useLocalStorage} from "react-use"

export default function Topbar() {
    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))
    const [category, setCategory] = useState(GOODS_CATEGORY_DATA)
    const [badgeContent, setBadgeContent] = useState(1)
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage<{name: string; email: string} | null>("login")

    //스크롤시, 스타일변경
    const [scrollPosition, setScrollPosition] = useState(0)
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScroll)
    })

    const textColor = {color: theme.palette.secondary.dark, fontWeight: 800, fontSize: 16}

    const onClickCategorys = (categoryId: string) => {
        Router.push({pathname: "/goods", query: {categoryId: categoryId}})
    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                background: "white",
                zIndex: 10,
                borderBottom: scrollPosition < 320 ? "none" : "1px solid #eaeaea",
            }}
        >
            <div style={{position: "relative"}}>
                <Container
                    maxWidth="lg"
                    sx={{
                        py: scrollPosition < 320 ? 4 : 2,
                        transition: "0.5s",
                    }}
                >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <div>
                            <Link href={"/"}>
                                <img src="/images/logo_new.png" alt="" width="130px" />
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
                                <Button onClick={() => onClickCategorys(categoryId)} key={categoryId} style={textColor}>
                                    {title}
                                </Button>
                            ))}

                            <Button onClick={() => Router.push("/notice")} style={textColor}>
                                고객센터
                            </Button>
                        </Stack>

                        <Stack>
                            <ButtonGroup size="small" disableElevation>
                                {isLoggedIn && <ShopCartButton badgeContent={badgeContent} />}
                                <UserLoginButton isLoggedIn={isLoggedIn} />
                            </ButtonGroup>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}
