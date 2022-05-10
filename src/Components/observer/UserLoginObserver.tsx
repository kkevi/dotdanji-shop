import {CognitoUser} from "amazon-cognito-identity-js"
import UserPool from "src/Login/login-section/UserPool"
import React, {ReactChild, useEffect} from "react"
import useStore from "store/useStore"

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
        if (!currentUser) {
            userStore.setUserName("")
            userStore.setRefreshToken("")
            userStore.setIsLoggedIn(false)
            return
        } else if (!userStore.userName || userStore.userName === "") {
            console.log("work on login observer")
            userStore.setUserName(JSON.parse(currentUser?.storage.login).name)
        }
    }, [currentUser, userStore])

    return <div>{children}</div>
}

// observer(UserLoginObserver)
