import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import MyPageModifyPage from "src/MyPage/mypage-modify-page/MyPageModifyPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <MyPageModifyPage />
            </Stack>
        </MainLayout>
    )
}
