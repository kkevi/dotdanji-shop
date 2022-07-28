import React from "react"
import MainLayout from "components/main-layout/MainLayout"
import ProductLayout from "src/Product/product-list-page/ProductListPage"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"

export default function IndexGoods() {
    const route = useRouter()
    const [categoryId, setCategoryId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setCategoryId(route.query.categoryId)
    }, [route])

    return (
        <MainLayout>
            <ProductLayout categoryId={categoryId} />
        </MainLayout>
    )
}
