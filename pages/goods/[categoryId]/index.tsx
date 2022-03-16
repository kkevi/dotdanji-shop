import MainLayout from "Components/main-layout/MainLayout"
import GoodsLayout from "Goods/GoodsLayout"
import {useRouter} from "next/router"

export default function Index() {
    const router = useRouter()
    const categoryId = router.query.categoryId

    return (
        <MainLayout>
            <GoodsLayout categoryId={categoryId} />
        </MainLayout>
    )
}
