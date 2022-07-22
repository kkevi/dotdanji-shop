import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import MainLayout from "components/main-layout/MainLayout"
import GoodsDetailPage from "src/Goods/goods-detail-page/GoodsDetailPage"

export default function IndexGoodsDetail() {
    const route = useRouter()
    const [productId, setProductId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        if (route.query.productId) setProductId(route.query.productId)
        else route.push("/")
    }, [route.query])

    return (
        <MainLayout>
            <GoodsDetailPage productId={productId as string} />
        </MainLayout>
    )
}
