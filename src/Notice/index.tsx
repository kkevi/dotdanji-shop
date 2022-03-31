import React from "react"
import {Container, Typography, Stack, Divider, Accordion} from "@mui/material"

import ImageBox from "Components/image-box/ImageBox"
import {useTheme} from "@mui/system"

export default function Index() {
    const theme = useTheme()

    return (
        <Stack>
            <Stack
                justifyContent="center"
                alignItems="center"
                height={300}
                sx={{backgroundColor: theme.palette.primary.main}}
            >
                <Typography className="pointFont" fontSize={32} color="white">
                    고객님의 소중한 문의에 답변드립니다.
                </Typography>
                <Typography className="pointFont" mt={1} fontSize={18} color={theme.palette.secondary.light}>
                    FAQ
                </Typography>
                <div>{/* <ImageBox /> */}</div>
            </Stack>
            <Stack>
                <Container maxWidth="lg">
                    <div>work on here</div>
                </Container>
            </Stack>
        </Stack>
    )
}
