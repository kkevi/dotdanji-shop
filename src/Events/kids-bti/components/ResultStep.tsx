import React from "react"
import useStyles from "../styles"

import {Stack, Typography, Button} from "@mui/material"

type ResultStepProps = {}

export default function ResultStep(props: ResultStepProps) {
    const {} = props
    const classes = useStyles()
    return (
        <Stack>
            <Typography mt={5} className={`${classes.title} pointFont`}>
                언어발달 검사결과
            </Typography>
            <Typography my={1} className={`${classes.title} pointFont`}>
                30점
            </Typography>
            <Typography className={`${classes.title} pointFont`}>입니다!</Typography>
        </Stack>
    )
}
