import React from "react"
import {useTheme} from "@mui/system"
import useStyles from "./styles"

import {Stack, Container, Typography} from "@mui/material"

export default function KidsBTI() {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Stack sx={{backgroundColor: theme.palette.primary.light}}>
            <Container maxWidth="sm" className={classes.container}>
                <Typography className={classes.contents}>제목</Typography>
            </Container>
        </Stack>
    )
}
