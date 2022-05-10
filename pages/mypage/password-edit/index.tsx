import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import MyPagePwEditPage from "src/MyPage/mypage-pwEdit-page/MyPagePwEditPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <MyPagePwEditPage />
            </Stack>
        </MainLayout>
    )
}
