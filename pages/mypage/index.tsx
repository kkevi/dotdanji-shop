import {Button, Container, Stack, Typography} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import UserLoginObserver from "Components/observer/UserLoginObserver"
import UserPool from "Login/login-section/UserPool"
import Router from "next/router"
import {useLocalStorage} from "react-use"

export default function Index() {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage<{name: string; email: string} | null>("login")

    const onClickLoggedOut = () => {
        const currentUser = UserPool.getCurrentUser()
        currentUser?.signOut(() => {
            setIsLoggedIn(null)
            Router.push("/")
        })
    }

    return (
        <UserLoginObserver>
            <MainLayout>
                <Stack py={20}>
                    <Container maxWidth="xl">
                        <Stack width="100%" direction="row" justifyContent="space-around">
                            <Typography className="pointFont" variant="h4">
                                {isLoggedIn?.name}님 환영합니다.
                            </Typography>
                            <Button onClick={onClickLoggedOut} variant="outlined" color="inherit">
                                로그아웃
                            </Button>
                        </Stack>
                    </Container>
                </Stack>
            </MainLayout>
        </UserLoginObserver>
    )
}
