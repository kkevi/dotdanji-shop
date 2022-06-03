import React from "react"
import MainLayout from "components/main-layout/MainLayout"
import GoodsLayout from "src/Goods"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"

export default function Index() {
    const route = useRouter()
    const [categoryId, setCategoryId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setCategoryId(route.query.categoryId)
    }, [route])

    return (
        <MainLayout>
            <GoodsLayout categoryId={categoryId} />
        </MainLayout>
    )
}
