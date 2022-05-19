import React from "react"
import MainLayout from "components/main-layout/MainLayout"
import LoginLayout from "components/login-layout/LoginLayout"
import Login from "src/Login"

export default function Index() {
    return (
        <MainLayout>
            <LoginLayout>
                <Login />
            </LoginLayout>
        </MainLayout>
    )
}
