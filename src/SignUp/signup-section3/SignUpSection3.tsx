import React, {useState} from "react"

import {Stack, Button, Typography, InputAdornment, IconButton, useMediaQuery, useTheme} from "@mui/material"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import useStyles from "../styles"

import {useVerfiyPw} from "lib/useVerifyData"

import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

import {CustomedTextField} from "components/customed-textfield/CustomedTextField"

type SignUpSection2Prop = {
    password: string
    setPassword: (val: string) => void
    validPassword: string
    setValidPassword: (val: string) => void
    onSignUp: () => void
}

export default function SignUpSection3(prop: SignUpSection2Prop) {
    const {password, setPassword, validPassword, setValidPassword, onSignUp} = prop
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    const [visibility, setVisibility] = useState<boolean>(false)
    const [visibility2, setVisibility2] = useState<boolean>(false)

    const validPw = useVerfiyPw(password)
    const validPwLength = password.length < 21 && password.length > 7
    const correspondPw = password !== "" && password === validPassword
    const validPwAll = validPw && validPwLength && password === validPassword

    return (
        <Stack width={"100%"}>
            <CustomedTextField
                sx={{mt: mobile ? 3 : 6, mb: 0}}
                type={visibility ? "text" : "password"}
                label="비밀번호"
                variant="outlined"
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setVisibility(!visibility)}
                                edge="end"
                            >
                                {visibility ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Stack ml={1} mt={1} height={10} direction="row">
                <CheckRoundedIcon
                    sx={{marginRight: "2px", color: validPw ? theme.palette.primary.main : "#757575", fontSize: 18}}
                />
                <Typography mr={2} variant="caption" color={validPw ? theme.palette.primary.main : "#757575"}>
                    특수문자 포함
                </Typography>

                <CheckRoundedIcon
                    sx={{
                        marginRight: "2px",
                        color: validPwLength ? theme.palette.primary.main : "#757575",
                        fontSize: 18,
                    }}
                />
                <Typography variant="caption" color={validPwLength ? theme.palette.primary.main : "#757575"}>
                    8~20자 이내
                </Typography>
            </Stack>
            <CustomedTextField
                sx={{mt: mobile ? 2 : 4, mb: 0}}
                type={visibility2 ? "text" : "password"}
                label="비밀번호 확인"
                variant="outlined"
                fullWidth
                value={validPassword}
                onChange={e => setValidPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility2"
                                onClick={() => setVisibility2(!visibility2)}
                                edge="end"
                            >
                                {visibility2 ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Stack ml={1} mt={1} height={10} direction="row">
                <CheckRoundedIcon
                    sx={{
                        marginRight: "2px",
                        color: correspondPw ? theme.palette.primary.main : "#757575",
                        fontSize: 18,
                    }}
                />
                <Typography variant="caption" color={correspondPw ? theme.palette.primary.main : "#757575"}>
                    비밀번호 일치
                </Typography>
            </Stack>

            <Button
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
