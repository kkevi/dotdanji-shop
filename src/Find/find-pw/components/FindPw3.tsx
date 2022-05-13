import React from "react"
import {useTheme} from "@mui/system"

import {Typography} from "@mui/material"

type FindPw3Props = {}

export default function FindPw3(props: FindPw3Props) {
    const {} = props
    const theme = useTheme()
    return (
        <>
            <Typography mt={6} variant="body2" fontWeight={400}>
                회원님의 비밀번호가 재설정 되었습니다.
            </Typography>
            {/* <Typography variant="h6" fontWeight={800} color={theme.palette.primary.dark}>
                
            </Typography>
            <Typography variant="body2" fontWeight={400}>
                입니다
            </Typography> */}
        </>
    )
}
