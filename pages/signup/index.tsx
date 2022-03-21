import MainLayout from "Components/main-layout/MainLayout"
import SignUp from "SignUp"
import {useRouter} from "next/router"

export default function Index() {
    const router = useRouter()

    return (
        <MainLayout>
            <SignUp />
        </MainLayout>
    )
}
