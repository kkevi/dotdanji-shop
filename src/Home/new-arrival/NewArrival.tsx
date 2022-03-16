import React from "react"
import {Container, Typography, Stack} from "@mui/material"

export default function NewArrival() {
    return (
        <Container maxWidth="xl" style={{backgroundColor: "pink"}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" height={500} mt={20}>
                <Typography variant="h4" fontWeight={800}>
                    # 새로 나온 이야기
                </Typography>
                <div style={{width: 700, height: 500, backgroundColor: "tomato"}} />
                <Stack style={{backgroundColor: "antiquewhite"}}>
                    <div>
                        <Typography variant="h6" fontWeight={800}>
                            스위스 전래 동화를 함께 읽으며 배우는 배려심
                        </Typography>
                        <Typography variant="subtitle2" fontWeight={800}>
                            읽으러 가기
                        </Typography>
                    </div>
                </Stack>
            </Stack>
        </Container>
    )
}
