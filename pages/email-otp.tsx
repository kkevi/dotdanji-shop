import {Button, Container, Stack, TextField, Typography} from "@mui/material"
import UserPool from "Login/login-section/UserPool"
import {useState} from "react"
import * as AWS from "aws-sdk"

export default function EmailOtp() {
    const [emailCode, setEmailCode] = useState("")

    const onClickOtp = () => {}

    return (
        <Container maxWidth="lg">
            <Stack width="100vw" height="100vh" justifyContent="center" alignItems="center">
                <Typography>이메일로 받은 코드를 입력해주세요.</Typography>
                <TextField value={emailCode} onChange={e => setEmailCode(e.target.value)} fullWidth />
                <Button onClick={onClickOtp} fullWidth variant="outlined">
                    인증코드 확인
                </Button>
            </Stack>
        </Container>
    )
}
