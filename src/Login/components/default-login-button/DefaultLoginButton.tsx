import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js"
import {userEmailCheck, userPasswordCheck} from "../../validation-check"

import {Button} from "@mui/material"
import React from "react"
import UserPool from "../../user-pool"
import {toast} from "react-toastify"
import {useRouter} from "next/router"
import {useState} from "react"
import useStyles from "./styles"

type Props = {
    email: string
    password: string
}

export default function DefaultLoginButton(props: Props) {
    const {email, password} = props
    const classes = useStyles()
    const route = useRouter()
    const [loading, setLoading] = useState(false)
    //error
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorPassword, setErrorPassword] = useState(false)

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
        alert("현재 회원에 대한 서비스는 준비중입니다. 빠른 시일내에 찾아뵙겠습니다.")
        // setErrorEmail(!userEmailCheck(email))
        // setErrorPassword(!userPasswordCheck(password))
        // if (errorEmail || errorPassword) return
        // doLogin()
    }

    return (
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
    )
}
