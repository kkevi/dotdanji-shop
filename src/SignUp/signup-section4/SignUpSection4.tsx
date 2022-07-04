import React from "react"
import {useRouter} from "next/router"

import {Stack, Button, Divider, Typography, useMediaQuery, useTheme} from "@mui/material"
import useStyles from "../styles"

import ImageBox from "components/image-box/ImageBox"

export default function SignUpSection4() {
    const classes = useStyles()
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Stack width={"100%"}>
            <Typography variant={mobile ? "body2" : "h6"} fontWeight={700} mt={mobile ? 0 : 2} mb={2}>
                돛단지와 함께 다양한 이야기들을 읽어보세요!
            </Typography>

            <ImageBox height={300} src="/images/fake/pinokio.png" />

            <Divider orientation="horizontal" sx={{mt: 4}} />

            <Typography variant="caption" color="#757575" mt={2}>
                (주)돛단지에 가입하신 것을 진심으로 환영합니다.
            </Typography>
            <Typography variant="caption" color="#757575">
                로그인 후 돛단지의 다양한 서비스를 이용하실 수 있습니다.
            </Typography>
            <Typography variant="caption" color="#757575">
                광고성 정보 수신에 동의하였습니다. (2022년 03월 22일 11시 09분)
            </Typography>

            <Stack mt={4} mb={3} direction="row">
                <Button
                    sx={{mr: 1}}
                    className={classes.containedButton}
                    variant="contained"
                    fullWidth
                    onClick={() => route.push("/login")}
                >
                    로그인하러 가기
                </Button>

                <Button
                    sx={{ml: 1}}
                    className={classes.containedButton}
                    variant="contained"
                    fullWidth
                    onClick={() => route.push("/")}
                >
                    메인 화면으로 가기
                </Button>
            </Stack>
        </Stack>
    )
}
