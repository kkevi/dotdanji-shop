import React, {useState} from "react"

import MainLayout from "components/main-layout/MainLayout"
import LoginLayout from "components/login-layout/LoginLayout"
import Find from "src/Find"

export default function Index() {
    return (
        <MainLayout>
            <LoginLayout>
                <Find />
            </LoginLayout>
        </MainLayout>
    )
}
