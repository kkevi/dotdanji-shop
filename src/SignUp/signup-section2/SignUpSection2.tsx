import React, {useState} from "react"

import {Stack, Button, TextField, Typography} from "@mui/material"
import useStyles from "../styles"

type SignUpSection2Prop = {
    email: string
    setEmail: (val: string) => void
    userName: string
    setUserName: (val: string) => void
    setStep: (val: number) => void
}

export default function SignUpSection2(prop: SignUpSection2Prop) {
    const {email, setEmail, setStep, userName, setUserName} = prop
    const classes = useStyles()
    const [warningName, setWarningName] = useState("")
    const [warningEmail, setWarningEmail] = useState("")

    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    const isValidEmail = (email: string) => {
        if (regEmail.test(email)) {
            setStep(2)
        } else {
            setWarningEmail("올바른 이메일 형식이 아닙니다.")
        }
    }

    return (
        <Stack width={"100%"}>
            <TextField
                sx={{mt: 6}}
                className={classes.textField}
                label="이름"
                variant="outlined"
                fullWidth
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningName}
            </Typography>
            <TextField
                sx={{mt: 2}}
                className={classes.textField}
                label="이메일"
                variant="outlined"
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningEmail}
            </Typography>

            <Button
                sx={{mt: 6, mb: 3}}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                onClick={() => {
                    if (userName === "") return setWarningName("이름을 입력해주세요.")
                    isValidEmail(email)
                }}
            >
                다음으로
            </Button>
        </Stack>
    )
}
