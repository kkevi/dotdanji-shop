import MainLayout from "components/main-layout/MainLayout"
import OrderListPage from "src/MyPage/order-list-page/OrderListPage"
import React from "react"

export default function Index() {
    return (
        <MainLayout>
            <OrderListPage />
        </MainLayout>
    )
}
