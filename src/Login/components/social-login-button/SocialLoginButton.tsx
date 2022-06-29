import React, {MutableRefObject, useEffect, useRef} from "react"
import {useRouter} from "next/router"
import {useSessionStorage} from "react-use"

import {Stack, useTheme} from "@mui/material"
import useStyles from "./styles"
import {socialList} from "./social-list"

export default function SocialLoginButton() {
    const classes = useStyles()
    const theme = useTheme()
    const route = useRouter()

    const naverRef = useRef() as MutableRefObject<HTMLDivElement>
    const [kakaoLoginStorage, setKakaoLoginStorage] = useSessionStorage("kakao", {})
    const [naverLoginStorage, setNaverLoginStorage] = useSessionStorage("naver", {})

    const naverLoginInitialize = () => {
        const login = new window.naver.LoginWithNaverId({
            clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
            callbackUrl: "http://localhost:3000/login",
            isPopup: true,
            loginButton: {color: "green", type: 1, height: theme.breakpoints.down("sm") ? 35 : 45},
            callbackHandle: true,
        })
        login.init()
        login.logout()
        login.getLoginStatus((status: any) => {
            if (status) {
                const response = login.user
                console.log("logging", response)
                const {id, email, name} = response
                setNaverLoginStorage({response})
                route.push("/")
            } else {
                console.log("you're not login status")
            }
        })
    }

    // 카카오 로그인
    const onLoggedInKakao = () => {
        window.Kakao.Auth.authorize({
            redirectUri: ``,
            success: function (response: any) {
                console.log("kakao-response:", response)
                window.Kakao.Auth.setAccessToken(response.access_token)
                setKakaoLoginStorage({response})
                route.push("/")
            },
            fail: function (error: Error) {
                console.log(error)
            },
        })
    }

    //네이버 로그인
    const onLoggedInNaver = () => {
        const button = naverRef.current.children[0] as HTMLElement
        button.click()
    }

    //구글 로그인
    const onLoggedInGoggle = () => {}

    const onClickSocialButton = (snsId: string) => {
        alert("현재 회원에 대한 서비스는 준비중입니다. 빠른 시일내에 찾아뵙겠습니다.")
        // switch (snsId) {
        //     case "kakao":
        //         onLoggedInKakao()
        //         break
        //     case "naver":
        //         onLoggedInNaver()
        //         break
        //     case "google":
        //         onLoggedInGoggle()
        //         break
        // }
    }

    useEffect(() => {
        naverLoginInitialize()
    }, [])

    return (
        <Stack direction="row" width="40%" justifyContent="space-between" alignSelf="center">
            <div id="naverIdLogin" ref={naverRef} style={{display: "none"}} />
            {socialList.map((sns, index) => (
                <div className={classes.socialLogin} style={{backgroundColor: sns.color}} key={index}>
                    <img
                        className={classes.socialImage}
                        src={sns.image}
                        onClick={() => onClickSocialButton(sns.snsId)}
                        style={{width: index === 1 ? 25 : 30, height: index === 1 ? 25 : 30}}
                    />
                </div>
            ))}
        </Stack>
    )
}
