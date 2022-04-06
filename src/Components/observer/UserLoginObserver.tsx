import {observer} from "mobx-react"
import {useRouter} from "next/router"
import React, {ReactChild, useEffect} from "react"
import {useLocalStorage} from "react-use"
import userPool from "../../Login/login-section/UserPool"
import UserPool from "Login/login-section/UserPool"
import {CognitoUser} from "amazon-cognito-identity-js"
import useStore from "Components/store/useStore"

type Props = {
    children: ReactChild
}

export default function UserLoginObserver(props: Props) {
    const {children} = props
    const {userStore} = useStore()
    class newCognitoUser extends CognitoUser {
        public storage?: any
    }
    const currentUser: newCognitoUser | null = UserPool.getCurrentUser()

    useEffect(() => {
        if (!userStore.userName || userStore.userName === "") {
            console.log("work on login observer")
            userStore.setUserName(JSON.parse(currentUser?.storage.login).name)
        }
    }, [currentUser, userStore])

    return <div>{children}</div>
}

// observer(UserLoginObserver)
