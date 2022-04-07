import React, {useState} from "react"
import {useRouter} from "next/router"
import {Button, Stack, TextField, Typography, Divider, Link} from "@mui/material"

import useStyles from "./styles"
import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js"
import {toast} from "react-toastify"
import {userEmailCheck, userPasswordCheck} from "./validation-check"
import UserPool, {KAKAO_AUTH_URL} from "./UserPool"
import useStore from "Components/store/useStore"

export default function LoginSection() {
    const classes = useStyles()
    const route = useRouter()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const {userStore} = useStore()

    //error
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const onChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    //aws cognito login api
    const doLogin = () => {
        setLoading(true)

        try {
            new CognitoUser({Username: email, Pool: UserPool}).authenticateUser(
                new AuthenticationDetails({
                    Username: email,
                    Password: password,
                    ValidationData: {email: email},
                }),
                {
                    onSuccess: function (result: any) {
                        userStore.setRefreshToken(result.refreshToken.token)
                        userStore.setUserName(result.idToken.payload.name)
                        userStore.setIsLoggedIn(true)
                        toast.info(`${result.idToken.payload.name}님 환영합니다.`)
                        route.push("/")
                    },
                    onFailure: function (err) {
                        if (err.message == "User is not confirmed.") {
                            toast.error("가입한 이메일을 인증해주세요.")
                        } else if (err.message == "Incorrect username or password.") {
                            toast.error("잘못 된 이메일 또는 비밀번호 입니다.")
                        } else {
                            console.log(err.message)
                        }
                    },
                },
            )
        } catch (e) {
            toast.error("로그인 중, 문제가 생겼습니다.")
        } finally {
            setLoading(false)
        }
    }

    const onClickLogin = () => {
        setErrorEmail(!userEmailCheck(email))
        setErrorPassword(!userPasswordCheck(password))
        if (errorEmail || errorPassword) return
        doLogin()
    }

    const socialLogin = [
        {
            id: "naver",
            image: "/images/logo-naver.png",
            color: "#06BE34",
            url: "/",
        },
        {
            id: "kakao",
            image: "/images/logo-kakao.png",
            color: "#FFE617",
            url: KAKAO_AUTH_URL,
        },
        {
            id: "google",
            image: "/images/logo-google.jpeg",
            color: "white",
            url: "/",
        },
    ]

    return (
        <Stack justifyContent="center" alignItems="flex-start" width="100%" maxWidth={400} height={"100%"}>
            {/* <img src="/images/logo_new3.png" style={{height: 35}} /> */}
            <Typography mt={4} variant="h4" fontWeight={700}>
                다시 만나서 반가워요!
            </Typography>
            <Typography sx={{mt: 0.5}} variant="subtitle2" color="#757575">
                심키즈 계정으로 로그인하고 다양한 이야기를 읽어보세요.
            </Typography>
            <TextField
                className={classes.textField}
                sx={{mt: 6}}
                label="이메일"
                value={email}
                onChange={onChangeEmailInput}
                variant="outlined"
                fullWidth
            />
            <TextField
                className={classes.textField}
                sx={{mt: 2}}
                type="password"
                label="비밀번호"
                value={password}
                onChange={onChangePasswordInput}
                variant="outlined"
                fullWidth
            />
            <Button
                sx={{mt: 3, mb: 3}}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                disableElevation
                onClick={onClickLogin}
            >
                로그인 하기
            </Button>
            {/* socialLogin */}
            <Stack direction="row" width="40%" justifyContent="space-between" alignSelf="center">
                {socialLogin.map((itm, idx) => (
                    <div className={classes.socialLogin} style={{backgroundColor: itm.color}} key={idx}>
                        <img className={classes.socialImage} src={itm.image} onClick={() => route.push(itm.url)} />
                    </div>
                ))}
            </Stack>
            <Button
                sx={{mt: 12, mb: 4}}
                className={classes.outlinedButton}
                variant="outlined"
                fullWidth
                onClick={() => route.push("/signup")}
            >
                아직 계정이 없으신가요?
            </Button>
            <Stack direction="row" justifyContent="center" alignSelf="center">
                <Link sx={{mt: 0.5, mr: 1}} variant="subtitle2" color="#757575" underline="hover" href="#">
                    아이디 (이메일) 찾기
                </Link>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Link sx={{mt: 0.5, ml: 1}} variant="subtitle2" color="#757575" underline="hover" href="#">
                    비밀번호 찾기
                </Link>
            </Stack>
        </Stack>
    )
}
