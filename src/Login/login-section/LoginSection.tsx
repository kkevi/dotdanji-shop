import React from "react"
import {useRouter} from "next/router"
import {Button, Stack, TextField, Typography, Divider, Link} from "@mui/material"

import styled from "styled-components"
import useStyles from "./styles"

export default function LoginSection() {
    const classes = useStyles()
    const router = useRouter()
    const socialLogin = [
        {
            id: "naver",
            image: "/images/logo-naver.png",
            color: "#06BE34",
            url: "/",
        },
        {
            id: "kakao",
            image: "/images/logo-kakao.png",
            color: "#FFE617",
            url: "/",
        },
        {
            id: "google",
            image: "/images/logo-google.jpeg",
            color: "white",
            url: "/",
        },
    ]

    const WhiteBorderTextField = styled(TextField)`
        & label.Mui-focused {
            color: black;
        }
        & .MuiOutlinedInput-root {
            &.Mui-focused fieldset {
                border-color: black;
            }
        }
    `

    return (
        <Stack justifyContent="center" alignItems="flex-start" padding={20} height={"100%"}>
            <img src="/images/logo_new3.png" style={{height: 35}} />
            <Typography mt={4} variant="h4" fontWeight={700}>
                다시 만나서 반가워요!
            </Typography>
            <Typography sx={{mt: 0.5}} variant="subtitle2" color="#757575">
                심키즈 계정으로 로그인하고 다양한 이야기를 읽어보세요.
            </Typography>
            <WhiteBorderTextField sx={{mt: 6}} label="이메일" variant="outlined" fullWidth />
            <WhiteBorderTextField sx={{mt: 2}} label="비밀번호" variant="outlined" fullWidth />
            <Button sx={{mt: 3, mb: 3}} className={classes.containedButton} variant="contained" fullWidth>
                로그인 하기
            </Button>
            <Stack direction="row" width="35%" justifyContent="space-between" alignSelf="center">
                {socialLogin.map((itm, idx) => {
                    return (
                        <div className={classes.socialLogin} style={{backgroundColor: itm.color}}>
                            <img className={classes.socialImage} src={itm.image} onClick={() => router.push(itm.url)} />
                        </div>
                    )
                })}
            </Stack>

            <Button
                sx={{mt: 12, mb: 4}}
                className={classes.outlinedButton}
                variant="outlined"
                fullWidth
                onClick={() => router.push("/signup")}
            >
                아직 계정이 없으신가요?
            </Button>

            <Stack direction="row" justifyContent="center" alignSelf="center">
                <Link sx={{mt: 0.5, mr: 1}} variant="subtitle2" color="#757575" underline="hover" href="#">
                    아이디 (이메일) 찾기
                </Link>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Link sx={{mt: 0.5, ml: 1}} variant="subtitle2" color="#757575" underline="hover" href="#">
                    비밀번호 찾기
                </Link>
            </Stack>
        </Stack>
    )
}