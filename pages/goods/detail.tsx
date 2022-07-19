import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import MainLayout from "components/main-layout/MainLayout"
import GoodsDetailPage from "src/Goods/goods-detail-page/GoodsDetailPage"

export default function IndexGoodsDetail() {
    const route = useRouter()
    const [goodsId, setGoodsId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        if (route.query.goodsId) setGoodsId(route.query.goodsId)
        else route.push("/")
    }, [route.query])

    return (
        <MainLayout>
            <GoodsDetailPage goodsId={goodsId as string} />
        </MainLayout>
    )
}
