import React, {useState} from "react"

import {Stack, Button, TextField, Typography} from "@mui/material"
import useStyles from "../styles"

type SignUpSection2Prop = {
    email: string
    setEmail: (val: string) => void
    setStep: (val: number) => void
}

export default function SignUpSection2(prop: SignUpSection2Prop) {
    const {email, setEmail, setStep} = prop
    const classes = useStyles()
    const [warningText, setWarningText] = useState("")

    const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    const isValidEmail = (email: string) => {
        if (regEmail.test(email)) {
            setStep(2)
        } else {
            setWarningText("올바른 이메일 형식이 아닙니다.")
        }
    }

    return (
        <Stack width={"100%"}>
            <TextField
                sx={{mt: 6}}
                className={classes.textField}
                label="이메일"
                variant="outlined"
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningText}
            </Typography>

            <Button
                sx={{mt: 6, mb: 3}}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                onClick={() => isValidEmail(email)}
            >
                동의하고 가입하기
            </Button>
        </Stack>
    )
}
