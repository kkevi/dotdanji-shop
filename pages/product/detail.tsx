import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import MainLayout from "components/main-layout/MainLayout"
import ProductDetailPage from "src/Product/product-detail-page/ProductDetailPage"

export default function IndexGoodsDetail() {
    const route = useRouter()
    const [productId, setProductId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        if (route.query.productId) setProductId(route.query.productId)
        else route.push("/")
    }, [route.query])

    return (
        <MainLayout>
            <ProductDetailPage productId={productId as string} />
        </MainLayout>
    )
}
