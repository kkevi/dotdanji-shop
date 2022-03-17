import MainLayout from "Components/main-layout/MainLayout"
import GoodsLayout from "Goods"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"

export default function Index() {
    const router = useRouter()
    const [categoryId, setCategoryId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setCategoryId(router.query.categoryId)
    }, [router])

    return (
        <MainLayout>
            <GoodsLayout categoryId={categoryId} />
        </MainLayout>
    )
}
