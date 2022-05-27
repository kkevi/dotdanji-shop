import React, {useState} from "react"
import {useRouter} from "next/router"

import {Button, Stack} from "@mui/material"
import useStyles from "../styles"
import {useVerfiyPhone} from "lib/useVerifyData"

import FindEmail1 from "./components/FindEmail1"
import FindEmail2 from "./components/FindEmail2"

type FindEmailProps = {
    mobile: boolean
}

export default function FindEmail(props: FindEmailProps) {
    const {mobile} = props
    const route = useRouter()
    const classes = useStyles()
    const [fintStep, setFindStep] = useState<string>("before")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [warningPhone, setWarningPhone] = useState<string>("")
    const [validFind, setValidFind] = useState<boolean>(false)

    const validPhone = useVerfiyPhone(phoneNumber)

    const onClickCheck = () => {
        if (phoneNumber === "") return setWarningPhone("휴대폰번호를 입력해주세요.")

        if (!validPhone) return setWarningPhone("올바른 휴대폰번호 형식이 아닙니다.")
        // TODO : 입력된 휴대폰번호로 가입된 계정이 있는지 먼저 찾기
        // if(phoneNumber){}
        // TODO : 아임포트 본인인증

        setValidFind(true)
    }

    const foundEmail = () => {
        let email: string = "bora_kim980@naver.com"
        let subStrEmail: string[] = email.split("@")
        let showingEmail: string = subStrEmail[0].slice(0, subStrEmail[0].length - 3)
        let hiddenEmail: string = showingEmail + "***@" + subStrEmail[1]

        return hiddenEmail
    }

    const email = foundEmail()

    return (
        <Stack width="100%">
            {fintStep === "before" ? (
                <FindEmail1
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    onClickCheck={onClickCheck}
                    warningPhone={warningPhone}
                    mobile={mobile}
                />
            ) : (
                <FindEmail2 email={email} mobile={mobile} />
            )}
            <Button
                className={classes.containedButton}
                variant="contained"
                fullWidth
                disabled={!validFind}
                onClick={() => {
                    if (fintStep === "before") {
                        setFindStep("after")
                    } else route.push("/login")
                }}
            >
                {fintStep === "before" ? "다음으로" : "로그인 하러가기"}
            </Button>
        </Stack>
    )
}
