import MainLayout from "components/main-layout/MainLayout"
import React from "react"
import WishListPage from "src/MyPage/wish-list-page/WishListPage"

export default function Index() {
    return (
        <MainLayout>
            <WishListPage />
        </MainLayout>
    )
}
