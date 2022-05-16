import React, {useState} from "react"
import {useRouter} from "next/router"

import {Button, Stack, Typography} from "@mui/material"
import useStyles from "../styles"

import {useVerfiyPhone, useVerfiyEmail, useVerfiyPw} from "lib/useVerifyData"

import FindPw1 from "./components/FindPw1"
import FindPw2 from "./components/FindPw2"

type FindPwProps = {}

export default function FindPw(props: FindPwProps) {
    const {} = props
    const route = useRouter()
    const classes = useStyles()
    const [findStep, setFindStep] = useState<string>("before")
    const [email, setEmail] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [newPw, setNewPw] = useState<string>("")
    const [confirmNewPw, setConfirmNewPw] = useState<string>("")
    const [warningEmail, setWarningEmail] = useState<string>("")
    const [warningPhone, setWarningPhone] = useState<string>("")
    const [warningPw, setWarningPw] = useState<string>("")
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

    const validEmail = useVerfiyEmail(email)
    const onClickNext = () => {
        if (email === "") return setWarningEmail("이메일을 입력해주세요.")
        if (!validEmail) return setWarningEmail("올바른 이메일 형식이 아닙니다.")
        if (!validFind) return setWarningPhone("휴대폰인증을 해주세요.")

        setFindStep("after")
    }

    const validPw = useVerfiyPw(newPw)
    const validPwLength = newPw.length < 21 && newPw.length > 7
    const correspondPw = confirmNewPw !== "" && newPw === confirmNewPw
    const validPwAll = validPw && validPwLength && newPw === confirmNewPw
    const onClickNewPassword = () => {
        if (!correspondPw) return setWarningPw("비밀번호가 일치하지 않습니다.")
        if (newPw === "") return setWarningPw("새 비밀번호를 입력해주세요.")
        if (confirmNewPw === "") return setWarningPw("새 비밀번호 확인을 입력해주세요.")
        if (!validPw) return setWarningPw("비밀번호가 조건에 맞지 않습니다.")

        if (validPwAll) {
            setWarningPw("")
            setFindStep("finished")
        }
    }

    return (
        <Stack width="100%">
            {findStep === "before" && (
                <FindPw1
                    email={email}
                    setEmail={setEmail}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    onClickCheck={onClickCheck}
                    warningPhone={warningPhone}
                />
            )}
            {findStep === "after" && (
                <FindPw2
                    newPw={newPw}
                    setNewPw={setNewPw}
                    confirmNewPw={confirmNewPw}
                    setConfirmNewPw={setConfirmNewPw}
                    warningPw={warningPw}
                />
            )}
            {findStep === "finished" && (
                <Typography mt={6} fontSize={18}>
                    회원님의 비밀번호 재설정이 완료 되었습니다.
                    <br />새 비밀번호로 로그인 해주세요.
                </Typography>
            )}

            <Button
                sx={{mt: 6, mb: 3}}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                disabled={!validFind}
                onClick={() => {
                    if (findStep === "before") {
                        onClickNext()
                    } else if (findStep === "after") {
                        onClickNewPassword()
                    } else {
                        route.push("/login")
                    }
                }}
            >
                {findStep === "finished" ? "로그인 하러가기" : "다음으로"}
            </Button>
        </Stack>
    )
}
