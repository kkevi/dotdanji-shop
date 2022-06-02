import React from "react"

import {Typography, useTheme} from "@mui/material"

type FindEmail2Props = {
    email: string
    mobile: boolean
}

export default function FindEmail2({email, mobile}: FindEmail2Props) {
    const theme = useTheme()
    return (
        <>
            <Typography mt={mobile ? 3 : 6} variant="body2" fontWeight={400}>
                회원님의 이메일은
            </Typography>
            <Typography variant="h6" fontWeight={800} color={theme.palette.primary.dark}>
                {email}
            </Typography>
            <Typography variant="body2" fontWeight={400}>
                입니다
            </Typography>
        </>
    )
}
