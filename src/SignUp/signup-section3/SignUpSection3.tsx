import React from "react"

import {Stack, Button, TextField, Typography} from "@mui/material"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import useStyles from "../styles"
import {theme} from "styles/theme"

type SignUpSection2Prop = {
    password: string
    setPassword: (val: string) => void
    validPassword: string
    setValidPassword: (val: string) => void
    setStep: (val: number) => void
    onSignUp: () => void
}

export default function SignUpSection3(prop: SignUpSection2Prop) {
    const {password, setPassword, validPassword, setValidPassword, setStep, onSignUp} = prop
    const classes = useStyles()

    const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
    const validPw = regPw.test(password)
    const validPwLength = password.length < 21 && password.length > 7
    const correspondPw = password !== "" && password === validPassword
    const validPwAll = validPw && validPwLength && password === validPassword

    return (
        <Stack width={"100%"}>
            <TextField
                sx={{mt: 6}}
                className={classes.textField}
                type="password"
                label="비밀번호"
                variant="outlined"
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Stack ml={1} mt={1} height={10} direction="row">
                <CheckRoundedIcon
                    sx={{marginRight: "2px", color: validPw ? theme.palette.primary.light : "#757575", fontSize: 18}}
                />
                <Typography mr={2} variant="caption" color={validPw ? theme.palette.primary.light : "#757575"}>
                    특수문자 포함
                </Typography>

                <CheckRoundedIcon
                    sx={{
                        marginRight: "2px",
                        color: validPwLength ? theme.palette.primary.light : "#757575",
                        fontSize: 18,
                    }}
                />
                <Typography variant="caption" color={validPwLength ? theme.palette.primary.light : "#757575"}>
                    8~20자 이내
                </Typography>
            </Stack>
            <TextField
                sx={{mt: 4}}
                className={classes.textField}
                type="password"
                label="비밀번호 확인"
                variant="outlined"
                fullWidth
                value={validPassword}
                onChange={e => setValidPassword(e.target.value)}
            />
            <Stack ml={1} mt={1} height={10} direction="row">
                <CheckRoundedIcon
                    sx={{
                        marginRight: "2px",
                        color: correspondPw ? theme.palette.primary.light : "#757575",
                        fontSize: 18,
                    }}
                />
                <Typography variant="caption" color={correspondPw ? theme.palette.primary.light : "#757575"}>
                    비밀번호 일치
                </Typography>
            </Stack>

            <Button
                sx={{mt: 6, mb: 3}}
                disabled={!validPwAll}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                onClick={() => {
                    if (validPwAll) {
                        onSignUp()
                    } else return
                }}
            >
                동의하고 가입하기
            </Button>
        </Stack>
    )
}
