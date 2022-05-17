import React from "react"
import {Stack, Typography} from "@mui/material"

import useStyles from "./style"

export default function StorySelfIntroSection() {
    const classes = useStyles()
    return (
        <Stack className={classes.storySelfContainer}>
            <Typography>스토리셀프 홍보 내용</Typography>
        </Stack>
    )
}
