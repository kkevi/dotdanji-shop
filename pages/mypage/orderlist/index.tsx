import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import OrderListPage from "src/MyPage/order-list-page/OrderListPage"

export default function Index() {
    return (
        <MainLayout>
            <OrderListPage />
        </MainLayout>
    )
}
