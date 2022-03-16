import React from "react"
import MainLayout from "Components/main-layout/MainLayout"
import {useRouter} from "next/router"
import GoodsDetailPage from "Goods/goods-detail-page/GoodsDetailPage"

export default function Index() {
    const router = useRouter()
    const goodsId = router.query.goodsId

    return (
        <MainLayout>
            <GoodsDetailPage goodsId={goodsId} />
        </MainLayout>
    )
}
