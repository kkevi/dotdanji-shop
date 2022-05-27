import React from "react"

import MainLayout from "components/main-layout/MainLayout"
import LoginLayout from "components/login-layout/LoginLayout"
import FindPage from "src/Login/find-page"

export default function Index() {
    return (
        <MainLayout>
            <LoginLayout>
                <FindPage />
            </LoginLayout>
        </MainLayout>
    )
}
