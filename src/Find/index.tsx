import React from "react"
import {useRouter} from "next/router"

import {Stack, Typography} from "@mui/material"
import {useTheme} from "@mui/system"
import useStyles from "./styles"

import FindEmail from "./find-email/FindEmail"
import FindPw from "./find-pw/FindPw"

type FindProps = {}

export default function Find(props: FindProps) {
    const {} = props
    const route = useRouter()
    const theme = useTheme()
    const styles = useStyles()

    const findEmail = route.query.find === "email"

    return (
        <Stack justifyContent="center" alignItems="flex-start" width="100%" maxWidth={400} height={"100%"}>
            <Typography mt={4} variant="h4" fontWeight={700}>
                {findEmail ? "이메일 찾기" : "비밀번호 찾기"}
            </Typography>
            <Typography mt={2} variant="body2" fontWeight={400} color="#888">
                SNS를 통해 회원가입을 하셨다면, 해당 SNS 서비스를 통해 계정 정보를 찾을 수 있습니다.
            </Typography>

            {findEmail ? <FindEmail /> : <FindPw />}
        </Stack>
    )
}
