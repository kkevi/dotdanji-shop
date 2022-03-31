import React, {ReactChild, useEffect} from "react"
import {observer} from "mobx-react"
import {useSessionStorage} from "react-use"
import {useRouter} from "next/router"
import userPool from "./UserPool"

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
