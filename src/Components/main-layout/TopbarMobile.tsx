import React, {useEffect, useState} from "react"
import Router, {useRouter} from "next/router"
//ui components
import {ButtonGroup, Container, Stack, Drawer, IconButton, useTheme} from "@mui/material"

//icon
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded"
//fake data
import {GOODS_CATEGORY_DATA} from "components/fake-data/fake-goods"
import UserLoginButton from "./user-login-button/UserLoginButton"
import ShopCartButton from "./shop-cart-button/ShopCartButton"
import useStore from "store/useStore"

export default function TopbarMobile() {
    const route = useRouter()
    const theme = useTheme()
    const [category, setCategory] = useState(GOODS_CATEGORY_DATA)
    const [drawer, setDrawer] = useState<boolean>(false)
    const [badgeContent, setBadgeContent] = useState(1)
    const {userStore} = useStore()

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
            <Container
                maxWidth="sm"
                sx={{
                    py: scrollPosition < 120 ? 2 : 1,
                    px: 1,
                    transition: "0.5s",
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <IconButton onClick={() => setDrawer(true)}>
                        <MenuRoundedIcon style={{color: theme.palette.secondary.dark, fontSize: "30px"}} />
                    </IconButton>

                    <img src="/images/logo_new.png" alt="" width="100px" onClick={() => route.push("/")} />
                    <Drawer open={drawer} onClose={() => setDrawer(false)}>
                        <Stack
                            sx={{ml: 3, mr: 12, py: 6}}
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="center"
                            spacing={4}
                            fontWeight={700}
                        >
                            <IconButton sx={{ml: -1}} onClick={() => setDrawer(false)}>
                                <ArrowBackIosRoundedIcon
                                    style={{color: theme.palette.secondary.dark, fontSize: "20px"}}
                                />
                            </IconButton>
                            {category.map(({categoryId, title}, idx) => (
                                <Stack onClick={() => onClickCategorys(categoryId)} key={categoryId} style={textColor}>
                                    {title}
                                </Stack>
                            ))}

                            <Stack onClick={() => Router.push("/customer-service")} style={textColor}>
                                고객센터
                            </Stack>
                        </Stack>
                    </Drawer>

                    <ButtonGroup size="small" disableElevation>
                        {userStore.isLoggedIn && <ShopCartButton badgeContent={badgeContent} />}
                        <UserLoginButton userName={userStore.userName} isLoggedIn={userStore.isLoggedIn} />
                    </ButtonGroup>
                </Stack>
            </Container>
        </div>
    )
}
