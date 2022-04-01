import {observer} from "mobx-react"
import {useRouter} from "next/router"
import React, {ReactChild, useEffect} from "react"
import userPool from "../../Login/login-section/UserPool"

type Props = {
    children: ReactChild
}

function UserLoginObserver(props: Props) {
    const route = useRouter()
    const {children} = props

    useEffect(() => {
        const currentUser = userPool.getCurrentUser()
        console.log("UserLoginObserver", currentUser)
        // if (currentUser === "" || !currentUser) {
        //     route.push("/")
        // }
    }, [, userPool])

    return <div>{children}</div>
}

export default observer(UserLoginObserver)