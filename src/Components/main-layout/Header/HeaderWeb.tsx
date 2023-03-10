//ui components
import {Button, ButtonGroup, Container, Stack} from "@mui/material"
import React, {useEffect, useState} from "react"
import Router, {useRouter} from "next/router"

//icon
//fake data
import {GOODS_CATEGORY_DATA} from "components/fake-data/fake-goods"
import ShopCartButton from "./components/shop-cart-button/ShopCartButton"
import UserLoginButton from "./components/user-login-button/UserLoginButton"
import useStyles from "./styles"

export default function HeaderWeb() {
    const classes = useStyles()
    const route = useRouter()
    const [category, setCategory] = useState(GOODS_CATEGORY_DATA)
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
                        <div style={{cursor: "pointer"}}>
                            <img src="/images/logo-dotdanji.png" alt="" width="150px" onClick={() => route.push("/")} />
                        </div>

                        <Stack
                            sx={{width: "40%", marginLeft: 32}}
                            direction="row"
                            spacing={4}
                            justifyContent="space-between"
                            fontWeight={700}
                        >
                            {category.map(({categoryId, title}) => (
                                <Button
                                    onClick={() => onClickCategorys(categoryId)}
                                    key={categoryId}
                                    style={{fontSize: 20}}
                                    className={classes.titleButton}
                                >
                                    {title}
                                </Button>
                            ))}

                            <Button
                                onClick={() => Router.push("/service/notice")}
                                style={{fontSize: 20}}
                                className={classes.titleButton}
                            >
                                고객센터
                            </Button>
                        </Stack>

                        <Stack>
                            <ButtonGroup size="small" disableElevation>
                                {isLoggedIn && <ShopCartButton badgeContent={badgeContent} />}
                                <UserLoginButton userName={"홍길동"} isLoggedIn={isLoggedIn} />
                            </ButtonGroup>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}
