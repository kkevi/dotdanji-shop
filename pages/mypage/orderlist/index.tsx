import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "Component/main-layout/MainLayout"
import OrderListPage from "src/MyPage/order-list-page/OrderListPage"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <OrderListPage />
            </Stack>
        </MainLayout>
    )
}
