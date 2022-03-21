import React, {useState} from "react"

import {Stack, Button, TextField, Typography} from "@mui/material"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import useStyles from "../styles"

type SignUpSection2Prop = {
    password: string
    setPassword: (val: string) => void
    setStep: (val: number) => void
}

export default function SignUpSection3(prop: SignUpSection2Prop) {
    const {password, setPassword, setStep} = prop
    const classes = useStyles()

    const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
    const regEn = /^[a-zA-Z]*$/
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g

    const isValidPw = (password: string) => {
        const validPwEn = regPw.test(password)
        const validPwLength = password.length < 21 && password.length > 8

        console.log("validPwEn", validPwEn)
        console.log("validPwLength", validPwLength)

        const validPwAll = validPwEn && validPwLength

        if (validPwAll) {
            console.log("it is valid Password")
            // setStep(2)
        } else return
    }

    return (
        <Stack width={"100%"}>
            <TextField
                sx={{mt: 6}}
                className={classes.textField}
                label="비밀번호"
                variant="outlined"
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Stack ml={1} mt={1} height={10} direction="row">
                <CheckRoundedIcon sx={{marginRight: "2px", color: "#757575", fontSize: 18}} />
                <Typography mr={2} variant="caption" color="#757575">
                    특수문자 포함
                </Typography>

                <CheckRoundedIcon sx={{marginRight: "2px", color: "#757575", fontSize: 18}} />
                <Typography variant="caption" color="#757575">
                    6~20자 이내
                </Typography>
            </Stack>
            <TextField
                sx={{mt: 4}}
                className={classes.textField}
                label="비밀번호 확인"
                variant="outlined"
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Stack ml={1} mt={1} height={10} direction="row">
                <CheckRoundedIcon sx={{marginRight: "2px", color: "#757575", fontSize: 18}} />
                <Typography variant="caption" color="#757575">
                    비밀번호 일치
                </Typography>
            </Stack>

            <Button
                sx={{mt: 6, mb: 3}}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                onClick={() => isValidPw(password)}
            >
                동의하고 가입하기
            </Button>
        </Stack>
    )
}
