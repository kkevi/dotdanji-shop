import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import WishListPage from "MyPage/wish-list-page/WishListPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <WishListPage />
            </Stack>
        </MainLayout>
    )
}
