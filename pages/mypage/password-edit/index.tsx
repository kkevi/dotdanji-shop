import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import MyPagePwEditPage from "MyPage/mypage-pwEdit-page/MyPagePwEditPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <MyPagePwEditPage />
            </Stack>
        </MainLayout>
    )
}
