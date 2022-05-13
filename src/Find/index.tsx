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

            {findEmail ? <FindEmail /> : <FindPw />}
        </Stack>
    )
}
