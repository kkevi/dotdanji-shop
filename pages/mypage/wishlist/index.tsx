import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import WishListPage from "src/MyPage/wish-list-page/WishListPage"

export default function Index() {
    return (
        <MainLayout>
            <WishListPage />
        </MainLayout>
    )
}
