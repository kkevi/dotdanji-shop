import React, {useState} from "react"
import {Stack, Typography, useMediaQuery, useTheme} from "@mui/material"

import {CognitoUserAttribute} from "amazon-cognito-identity-js"
import SignUpSection1 from "./signup-section1/SignUpSection1"
import SignUpSection2 from "./signup-section2/SignUpSection2"
import SignUpSection3 from "./signup-section3/SignUpSection3"
import SignUpSection4 from "./signup-section4/SignUpSection4"
import {toast} from "react-toastify"
import userPool from "src/Login/user-pool"

export default function SignUp() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [step, setStep] = useState(0)
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState("")

    const onSignUp = () => {
        alert("회원가입은 준비 중입니다.")
        setStep(3)

        // var attributeName = new CognitoUserAttribute({Name: "name", Value: phoneNumber})
        // userPool.signUp(email, password, [attributeName], [], (err, data) => {
        //     if (err) {
        //         return console.error("SignUp error: ", err)
        //     }
        //     setStep(3)
        //     toast.success("가입완료! 이메일 인증 후 로그인 하세요.")
        // })
    }

    const section = [
        {
            subTitle: "돛단지 서비스 이용약관에 동의해주세요.",
            render: <SignUpSection1 setStep={setStep} />,
        },
        {
            subTitle: "로그인에 사용할 이메일을 입력해주세요.",
            render: (
                <SignUpSection2
                    email={email}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
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
        <Stack
            justifyContent="center"
            alignItems="flex-start"
            alignSelf="center"
            width="100%"
            maxWidth={mobile ? "90%" : 400}
            height={"100%"}
        >
            <Typography mt={4} variant={mobile ? "h6" : "h4"} fontWeight={700}>
                간편가입
            </Typography>
            <Typography sx={{mt: 0.5}} variant={mobile ? "body2" : "subtitle2"} color="#757575">
                {section[step].subTitle}
            </Typography>

            {section[step].render}
        </Stack>
    )
}
