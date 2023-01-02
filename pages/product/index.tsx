import React, {useEffect, useState} from "react"

import MainLayout from "components/main-layout/MainLayout"
import ProductLayout from "src/Product/product-list-page/ProductListPage"
import {useRouter} from "next/router"

export default function IndexGoods() {
    const route = useRouter()
    const [categoryId, setCategoryId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setCategoryId(route.query.categoryId as string)
    }, [route])

    return (
        <MainLayout>
            <ProductLayout categoryId={categoryId} />
        </MainLayout>
    )
}
