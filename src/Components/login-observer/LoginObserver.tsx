import React from "react"
import {useEffect} from "react"

type Props = {
    children: React.ReactNode
}

export default function LoginObserver(props: Props) {
    const {children} = props

    // const naverLoginInitialize = () => {
    //     const login = new window.naver.LoginWithNaverId({
    //         clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
    //         callbackUrl: "http://localhost:3000/login",
    //         isPopup: true,
    //         // loginButton: {color: "green", type: 1, height: 25},
    //         callbackHandle: true,
    //     })
    //     login.init()
    // }

    useEffect(() => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY)
        window.Kakao.isInitialized()

        // naverLoginInitialize()
    }, [])

    return <>{children}</>
}
