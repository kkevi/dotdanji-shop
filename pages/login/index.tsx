import MainLayout from "Components/main-layout/MainLayout"
import Login from "Login"
import {useRouter} from "next/router"

export default function Index() {
    const router = useRouter()

    return (
        <MainLayout>
            <Login />
        </MainLayout>
    )
}
