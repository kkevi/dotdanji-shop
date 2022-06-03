import React from "react"
import MainLayout from "components/main-layout/MainLayout"
import LoginLayout from "components/login-layout/LoginLayout"
import SignUp from "src/SignUp"

export default function Index() {
    return (
        <MainLayout>
            <LoginLayout>
                <SignUp />
            </LoginLayout>
        </MainLayout>
    )
}
