import {observer} from "mobx-react"
import {useRouter} from "next/router"
import React, {ReactChild, useEffect} from "react"
import {useLocalStorage} from "react-use"
import userPool from "../../Login/login-section/UserPool"

type Props = {
    children: ReactChild
}

function UserLoginObserver(props: Props) {
    const route = useRouter()
    const {children} = props
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage<{name: string; email: string} | null>("login")

    useEffect(() => {
        const currentUser = userPool.getCurrentUser()
        if (currentUser === null && !isLoggedIn) {
            route.push("/")
        }
    }, [userPool])

    return <div>{children}</div>
}

export default observer(UserLoginObserver)
