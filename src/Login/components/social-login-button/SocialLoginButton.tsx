import {Stack} from "@mui/material"
import {useRouter} from "next/router"
import {useSessionStorage} from "react-use"
import {socialList} from "./social-list"
import useStyles from "./styles"

export default function SocialLoginButton() {
    const classes = useStyles()
    const route = useRouter()
    const [kakaoLoginStorage, setKakaoLoginStorage] = useSessionStorage("kakao", {})

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
    const onLoggedInNaver = () => {}

    //구글 로그인
    const onLoggedInGoggle = () => {}

    const onClickSocialButton = (snsId: string) => {
        switch (snsId) {
            case "kakao":
                onLoggedInKakao()
                break
            case "naver":
                onLoggedInNaver()
                break
            case "google":
                onLoggedInGoggle()
                break
        }
    }

    return (
        <Stack direction="row" width="40%" justifyContent="space-between" alignSelf="center">
            {socialList.map((sns, index) => (
                <div className={classes.socialLogin} style={{backgroundColor: sns.color}} key={index}>
                    <img
                        className={classes.socialImage}
                        src={sns.image}
                        onClick={() => onClickSocialButton(sns.snsId)}
                    />
                </div>
            ))}
        </Stack>
    )
}
