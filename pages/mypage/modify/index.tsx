import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import MyPageModifyPage from "MyPage/mypage-modify-page/MyPageModifyPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <MyPageModifyPage />
            </Stack>
        </MainLayout>
    )
}
