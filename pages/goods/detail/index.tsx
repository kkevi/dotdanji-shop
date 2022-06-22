import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import MainLayout from "components/main-layout/MainLayout"
import GoodsDetailPage from "src/Goods/goods-detail-page/GoodsDetailPage"

export default function Index() {
    const route = useRouter()
    const [goodsId, setGoodsId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setGoodsId(route.query.goodsId)
    }, [route])

    return (
        <MainLayout>
            <GoodsDetailPage goodsId={goodsId as string} />
        </MainLayout>
    )
}
