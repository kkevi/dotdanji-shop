import React, {useState} from "react"

import {Stack, Typography} from "@mui/material"

import ImageBox from "Components/image-box/ImageBox"
import SignUpSection1 from "./signup-section1/SignUpSection1"
import SignUpSection2 from "./signup-section2/SignUpSection2"
import SignUpSection3 from "./signup-section3/SignUpSection3"
// import SignUpSection4 from "./signup-section4/SignUpSection4"

export default function SignUp() {
    const [step, setStep] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const section = [
        {
            subTitle: "심키즈 서비스 이용약관에 동의해주세요.",
            render: <SignUpSection1 setStep={setStep} />,
        },
        {
            subTitle: "로그인에 사용할 이메일을 입력해주세요.",
            render: <SignUpSection2 email={email} setEmail={setEmail} setStep={setStep} />,
        },
        {
            subTitle: "로그인에 사용할 비밀번호를 입력해주세요.",
            render: <SignUpSection3 password={password} setPassword={setPassword} setStep={setStep} />,
        },
        {
            subTitle: "",
            render: <SignUpSection1 setStep={setStep} />,
        },
    ]

    return (
        <Stack justifyContent="center" sx={{backgroundColor: "antiquewhite"}}>
            <div style={{width: 2000, alignSelf: "center"}}>
                <Stack
                    sx={{mt: 17, mb: 4, backgroundColor: "white"}}
                    direction="row"
                    justifyContent="space-between"
                    padding={2}
                >
                    <Stack sx={{flex: 1.2}} height={"85vh"}>
                        <ImageBox height={"100%"} src="/images/fake/home-slider2.png" />
                    </Stack>
                    <Stack sx={{flex: 0.8}} height={"85vh"}>
                        <Stack justifyContent="center" alignItems="flex-start" padding={20} height={"100%"}>
                            <img src="/images/logo_new3.png" style={{height: 35}} />
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
