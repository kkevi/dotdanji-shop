import {Button, Container, Stack, Typography} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import UserPool from "Login/login-section/UserPool"
import Router from "next/router"
import {useEffect, useState} from "react"

export default function Index() {
    const currentUser = UserPool.getCurrentUser()
    const [userName, setUserName] = useState("")

    const onClickLoggedOut = () => {
        currentUser?.signOut(() => {
            Router.push("/")
        })
    }

    useEffect(() => {
        if (!currentUser) {
            setUserName("")
        }
    }, [])

    return (
        <MainLayout>
            <Stack py={20}>
                <Container maxWidth="xl">
                    <Stack width="100%" direction="row" justifyContent="space-around">
                        <Typography className="pointFont" variant="h4">
                            {userName}님 환영합니다.
                        </Typography>
                        <Button onClick={onClickLoggedOut} variant="outlined" color="inherit">
                            로그아웃
                        </Button>
                    </Stack>
                </Container>
            </Stack>
        </MainLayout>
    )
}
