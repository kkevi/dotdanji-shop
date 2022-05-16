import React from "react"
import useStyles from "../styles"

import {Stack, Typography} from "@mui/material"

type ResultStepProps = {}

export default function ResultStep(props: ResultStepProps) {
    const {} = props
    const classes = useStyles()
    return (
        <Stack className={classes.resultContainer}>
            <Typography mt={5} className={`${classes.title} pointFont`}>
                언어발달 검사결과
            </Typography>
            <Typography my={1} className={`${classes.title} pointFont result`}>
                30점
            </Typography>
            <Typography className={`${classes.title} pointFont`}>입니다!</Typography>
        </Stack>
    )
}
