import React, {useEffect, useState} from "react"

import {Stack, Button, TextField, Typography} from "@mui/material"
import useStyles from "../styles"
import {useVerfiyPhone, useVerfiyEmail} from "lib/useVerifyData"

type SignUpSection2Prop = {
    email: string
    setEmail: (val: string) => void
    phoneNumber: string
    setPhoneNumber: (val: string) => void
    setStep: (val: number) => void
}

export default function SignUpSection2(prop: SignUpSection2Prop) {
    const {email, setEmail, setStep, phoneNumber, setPhoneNumber} = prop
    const classes = useStyles()
    const [warningEmail, setWarningEmail] = useState<string>("")
    const [warningPhone, setWarningPhone] = useState<string>("")
    const [validAll, setValidAll] = useState({
        email: false,
        phone: false,
    })

    // const IMP = window.IMP; // 생략 가능
    // IMP.init("{가맹점 식별코드}"); // 예: imp00000000

    const validEmail = useVerfiyEmail(email)
    const isValidEmail = (email: string) => {
        if (email === "") return setWarningEmail("이메일을 입력해주세요.")

        if (!validEmail) return setWarningEmail("올바른 이메일 형식이 아닙니다.")
        if (validEmail) {
            setWarningEmail("")
            // TODO : 이메일 중복확인

            setValidAll({
                ...validAll,
                email: true,
            })
        }
    }

    const validPhone = useVerfiyPhone(phoneNumber)
    const isValidPhone = (phoneNumber: string) => {
        if (phoneNumber === "") return setWarningPhone("휴대폰번호를 입력해주세요.")

        if (!validPhone) return setWarningPhone("올바른 휴대폰번호 형식이 아닙니다.")
        if (validPhone) {
            setWarningPhone("")
            // TODO : 본인인증

            setValidAll({
                ...validAll,
                phone: true,
            })
        }
    }

    const isValidAll = () => {
        if (validAll.email && validAll.phone) {
            setStep(2)
        }
    }

    return (
        <Stack width={"100%"}>
            <Stack direction="row" mt={6}>
                <TextField
                    className={classes.textField}
                    label="이메일"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button className={classes.smallButton} onClick={() => isValidEmail(email)}>
                    중복확인
                </Button>
            </Stack>
            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningEmail}
            </Typography>
            <Stack direction="row" mt={2}>
                <TextField
                    className={classes.textField}
                    label="휴대폰번호"
                    variant="outlined"
                    fullWidth
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <Button className={classes.smallButton} onClick={() => isValidPhone(phoneNumber)}>
                    본인인증
                </Button>
            </Stack>
            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningPhone}
            </Typography>

            <Button
                sx={{mt: 6, mb: 3}}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                disabled={validAll.email && validAll.phone ? false : true}
                onClick={() => {
                    isValidAll()
                }}
            >
                다음으로
            </Button>
        </Stack>
    )
}
