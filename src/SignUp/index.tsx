import React, {useState} from "react"

import {Stack, Typography} from "@mui/material"
import {useTheme} from "@mui/system"

import ImageBox from "components/image-box/ImageBox"
import SignUpSection1 from "./signup-section1/SignUpSection1"
import SignUpSection2 from "./signup-section2/SignUpSection2"
import SignUpSection3 from "./signup-section3/SignUpSection3"
import SignUpSection4 from "./signup-section4/SignUpSection4"
import userPool from "src/Login/login-section/UserPool"
import {toast} from "react-toastify"
import {CognitoUserAttribute} from "amazon-cognito-identity-js"

export default function SignUp() {
    const theme = useTheme()
    const [step, setStep] = useState(0)
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState("")

    const onSignUp = () => {
        var attributeName = new CognitoUserAttribute({Name: "name", Value: userName})
        userPool.signUp(email, password, [attributeName], [], (err, data) => {
            if (err) {
                return console.error("SignUp error: ", err)
            }
            setStep(3)
            toast.success("가입완료! 이메일 인증 후 로그인 하세요.")
        })
    }

    const section = [
        {
            subTitle: "심키즈 서비스 이용약관에 동의해주세요.",
            render: <SignUpSection1 setStep={setStep} />,
        },
        {
            subTitle: "로그인에 사용할 이메일을 입력해주세요.",
            render: (
                <SignUpSection2
                    email={email}
                    userName={userName}
                    setUserName={setUserName}
                    setEmail={setEmail}
                    setStep={setStep}
                />
            ),
        },
        {
            subTitle: "로그인에 사용할 비밀번호를 입력해주세요.",
            render: (
                <SignUpSection3
                    password={password}
                    setPassword={setPassword}
                    validPassword={validPassword}
                    setValidPassword={setValidPassword}
                    setStep={setStep}
                    onSignUp={onSignUp}
                />
            ),
        },
        {
            subTitle: "",
            render: <SignUpSection4 />,
        },
    ]

    return (
        <Stack justifyContent="center" sx={{backgroundColor: theme.palette.primary.light}}>
            <div style={{maxWidth: 1800, width: "100%", alignSelf: "center"}}>
                <Stack
                    sx={{mt: 17, mb: 4, backgroundColor: "white"}}
                    direction="row"
                    justifyContent="space-between"
                    padding={2}
                >
                    <Stack sx={{flex: 1.2}} height={"85vh"}>
                        <ImageBox height={"100%"} src="/images/illust/dottdanji-illust1.png" />
                    </Stack>
                    <Stack sx={{flex: 0.8}} height={"85vh"} alignItems="center">
                        <Stack
                            justifyContent="center"
                            alignItems="flex-start"
                            width="100%"
                            maxWidth={400}
                            height={"100%"}
                        >
                            {/* <img src="/images/logo_new3.png" style={{height: 35}} /> */}
                            <Typography mt={4} variant="h4" fontWeight={700}>
                                간편가입
                            </Typography>
                            <Typography sx={{mt: 0.5}} variant="subtitle2" color="#757575">
                                {section[step].subTitle}
                            </Typography>

                            {section[step].render}
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        </Stack>
    )
}
