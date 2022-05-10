import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "Component/main-layout/MainLayout"
import MyPage from "src/MyPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5} sx={{backgroundColor: "#f9fafb"}}>
                <MyPage />
            </Stack>
        </MainLayout>
    )
}
