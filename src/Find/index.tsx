import React from "react"
import {useRouter} from "next/router"

import {Stack, Typography, useMediaQuery} from "@mui/material"

import FindEmail from "./find-email/FindEmail"
import FindPw from "./find-pw/FindPw"

export default function Find() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    const findEmail = route.query.find === "email"

    return (
        <Stack
            justifyContent="center"
            alignItems="flex-start"
            alignSelf="center"
            width="100%"
            maxWidth={mobile ? "90%" : 400}
            height={"100%"}
        >
            <Typography mt={4} variant={mobile ? "h6" : "h4"} fontWeight={700}>
                {findEmail ? "이메일 찾기" : "비밀번호 찾기"}
            </Typography>

            {findEmail ? <FindEmail mobile={mobile} /> : <FindPw mobile={mobile} />}
        </Stack>
    )
}
