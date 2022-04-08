import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import OrderListPage from "MyPage/order-list-page/OrderListPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <OrderListPage />
            </Stack>
        </MainLayout>
    )
}
