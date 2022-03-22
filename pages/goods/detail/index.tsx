import React, {useEffect, useState} from "react"
import MainLayout from "Components/main-layout/MainLayout"
import {useRouter} from "next/router"
import GoodsDetailPage from "Goods/goods-detail-page/GoodsDetailPage"

export default function Index() {
    const route = useRouter()
    const [goodsId, setGoodsId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setGoodsId(route.query.goodsId)
    }, [route])

    return (
        <MainLayout>
            <GoodsDetailPage goodsId={goodsId} />
        </MainLayout>
    )
}
