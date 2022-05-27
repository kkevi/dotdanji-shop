import React, {useEffect, useState} from "react"
import {Stack, useMediaQuery, useTheme} from "@mui/material"

import UserPool from "src/Login/user-pool"
import Router from "next/router"

import MyPageHeader from "./mypage-header/MyPageHeader"
import MyPageWeb from "./MyPageWeb"
import MyPageMobile from "./MyPageMobile"

export default function Index() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const currentUser = UserPool.getCurrentUser()
    const [userName, setUserName] = useState("")

    const onClickLoggedOut = () => {
        currentUser?.signOut(() => {
            Router.push("/")
        })
    }

    useEffect(() => {
        if (!currentUser) {
            setUserName("")
        }
    }, [])

    const fakeEbookList = [
        {
            title: "피노키오",
            url: "/",
            image: "images/fake/pinokio.png",
        },
        {
            title: "피노키오",
            url: "/",
            image: "images/fake/pinokio.png",
        },
        {
            title: "피노키오",
            url: "/",
            image: "images/fake/pinokio.png",
        },
        {
            title: "피노키오",
            url: "/",
            image: "images/fake/pinokio.png",
        },
        {
            title: "피노키오",
            url: "/",
            image: "images/fake/pinokio.png",
        },
        {
            title: "피노키오",
            url: "/",
            image: "images/fake/pinokio.png",
        },
    ]

    return (
        <>
            <Stack py={mobile ? 9.5 : 13.5} sx={{backgroundColor: "#f9fafb"}}>
                <MyPageHeader title="마이페이지" mobile={mobile} />
                {mobile ? (
                    <MyPageMobile
                        fakeEbookList={fakeEbookList}
                        userName={userName}
                        onClickLoggedOut={onClickLoggedOut}
                        mobile
                    />
                ) : (
                    <MyPageWeb fakeEbookList={fakeEbookList} userName={userName} onClickLoggedOut={onClickLoggedOut} />
                )}
            </Stack>
        </>
    )
}
