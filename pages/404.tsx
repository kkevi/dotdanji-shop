import React from "react"
import {Button, Stack, Typography} from "@mui/material"
import {useRouter} from "next/router"

export default function Index() {
    const route = useRouter()

    return (
        <div>
            <Stack width="100vw" height="100vh" justifyContent="center" alignItems="center">
                <Typography variant="h1" mt={-10}>
                    😓
                </Typography>
                <Typography variant="h3" fontWeight={800} mt={2}>
                    404
                </Typography>
                <Typography variant="body1" mt={3} mb={8} textAlign="center">
                    죄송합니다. 현재 찾고 계신 페이지에 접속할 수 없습니다.
                    <br />
                    수정,이동 또는 삭제 되었을 수 있습니다.
                </Typography>
                <Button onClick={() => route.push("/")} variant="outlined">
                    홈으로 이동
                </Button>
            </Stack>
            <div style={{position: "absolute", bottom: "2rem", left: "50%", transform: "translate(-50%,0)"}}>
                <img src="/images/logo.png" alt="" width="120px" />
            </div>
        </div>
    )
}
