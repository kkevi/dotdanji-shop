import {useRouter} from "next/router"
import {useEffect} from "react"

export default function Index() {
    const router = useRouter()
    const categoryId = router.query.categoryId

    useEffect(() => {
        router.push(`/goods/${categoryId}`)
    }, [])
    return null
}
