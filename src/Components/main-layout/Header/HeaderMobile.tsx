import React, {useEffect, useState} from "react"
import Router, {useRouter} from "next/router"
//ui components
import {ButtonGroup, Container, Stack, Drawer, IconButton, useTheme} from "@mui/material"
import useStyles from "./styles"
//fake data
import {GOODS_CATEGORY_DATA} from "components/fake-data/fake-goods"
import UserLoginButton from "./components/user-login-button/UserLoginButton"
import ShopCartButton from "./components/shop-cart-button/ShopCartButton"
import ImageBox from "src/Components/image-box/ImageBox"

export default function HeaderMobile() {
    const classes = useStyles()
    const route = useRouter()
    const theme = useTheme()
    const [category, setCategory] = useState(GOODS_CATEGORY_DATA)
    const [drawer, setDrawer] = useState<boolean>(false)
    const [badgeContent, setBadgeContent] = useState(1)

    const isLoggedIn = false

    //스크롤시, 스타일변경
    const [scrollPosition, setScrollPosition] = useState(0)
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }

    useEffect(() => {
        window.addEventListener("scroll", updateScroll)
    })

    const onClickCategorys = (categoryId: string) => {
        Router.push({pathname: "/product", query: {categoryId: categoryId}})
    }

    return (
        <div
            className={classes.headerDefaultStyle}
            style={{
                background: scrollPosition < 120 ? "none" : "white",
                borderBottom: scrollPosition < 120 ? "none" : "1px solid #eaeaea",
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
                        <ImageBox width={30} height={30} src="/icons/icon-menu2.png" />
                    </IconButton>

                    <img src="/images/logo-dotdanji.png" alt="" width="100px" onClick={() => route.push("/")} />
                    <Drawer open={drawer} onClose={() => setDrawer(false)}>
                        <Stack
                            sx={{ml: 3, mr: 12, py: 6}}
                            direction="column"
                            alignItems="flex-start"
                            justifyContent="center"
                            spacing={4}
                            fontWeight={700}
                        >
                            <IconButton sx={{ml: -2}} onClick={() => setDrawer(false)}>
                                <ImageBox width={32} height={32} src="/icons/icon-backarrow.png" />
                                {/* <ArrowBackIosRoundedIcon
                                    style={{color: theme.palette.secondary.dark, fontSize: "20px"}}
                                /> */}
                            </IconButton>
                            {category.map(({categoryId, title}) => (
                                <Stack
                                    onClick={() => onClickCategorys(categoryId)}
                                    key={categoryId}
                                    style={{fontSize: 17}}
                                    className={classes.titleButton}
                                >
                                    {title}
                                </Stack>
                            ))}

                            <Stack
                                onClick={() => Router.push("/service")}
                                style={{fontSize: 16}}
                                className={classes.titleButton}
                            >
                                고객센터
                            </Stack>
                        </Stack>
                    </Drawer>

                    <ButtonGroup size="small" disableElevation>
                        {isLoggedIn && <ShopCartButton badgeContent={badgeContent} />}
                        <UserLoginButton userName={"홍길동"} isLoggedIn={isLoggedIn} mobile />
                    </ButtonGroup>
                </Stack>
            </Container>
        </div>
    )
}
