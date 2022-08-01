import React, {useState} from "react"
import {useRouter} from "next/router"
import useStyles from "./styles"
import {Button, Stack, Typography, Divider, useMediaQuery, useTheme} from "@mui/material"

import {CustomedTextField} from "components/customed-textfield/CustomedTextField"
import SocialLoginButton from "./components/social-login-button/SocialLoginButton"
import DefaultLoginButton from "./components/default-login-button/DefaultLoginButton"
import VisibilityButton from "src/Components/visibility-button/VisibilityButton"

export default function Login() {
    const theme = useTheme()
    const classes = useStyles()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const route = useRouter()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [visibility, setVisibility] = useState<boolean>(false)

    const onChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <Stack
            justifyContent="center"
            alignItems={mobile ? "center" : "flex-start"}
            alignSelf="center"
            width="100%"
            maxWidth={mobile ? "90%" : 400}
            height={"100%"}
        >
            <Typography mt={mobile ? 2 : 4} variant={mobile ? "h6" : "h4"} fontWeight={700}>
                다시 만나서 반가워요!
            </Typography>
            <Typography sx={{mt: 0.5}} variant={mobile ? "body2" : "subtitle2"} color="#757575">
                돛단지 계정으로 로그인하고 다양한 이야기를 읽어보세요.
            </Typography>
            <CustomedTextField sx={{mt: mobile ? 3 : 6}} label="이메일" value={email} onChange={onChangeEmailInput} />
            <CustomedTextField
                type={visibility ? "text" : "password"}
                label="비밀번호"
                value={password}
                onChange={onChangePasswordInput}
                InputProps={{
                    endAdornment: (
                        <VisibilityButton position="end" visibility={visibility} setVisibility={setVisibility} />
                    ),
                }}
            />

            <DefaultLoginButton email={email} password={password} />
            <SocialLoginButton />

            <Button
                sx={{mt: mobile ? 8 : 12, mb: 4}}
                className={classes.outlinedButton}
                variant="outlined"
                fullWidth
                onClick={
                    // () => alert("현재 회원에 대한 서비스는 준비중입니다. 빠른 시일내에 찾아뵙겠습니다.")
                    () => route.push("/signup")
                }
            >
                아직 계정이 없으신가요?
            </Button>
            <Stack direction="row" justifyContent="center" alignSelf="center">
                <Typography
                    className={classes.findLink}
                    onClick={() => {
                        alert("현재 회원에 대한 서비스는 준비중입니다. 빠른 시일내에 찾아뵙겠습니다.")
                        // Router.push({pathname: "/login/find", query: {find: "email"}})
                    }}
                >
                    아이디 (이메일) 찾기
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem sx={{mx: 1, my: 0.5, height: 14}} />
                <Typography
                    className={classes.findLink}
                    onClick={() => {
                        alert("현재 회원에 대한 서비스는 준비중입니다. 빠른 시일내에 찾아뵙겠습니다.")
                        // Router.push({pathname: "/login/find", query: {find: "pw"}})
                    }}
                >
                    비밀번호 찾기
                </Typography>
            </Stack>
        </Stack>
    )
}
