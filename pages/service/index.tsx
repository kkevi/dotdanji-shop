import MainLayout from "src/Components/main-layout/MainLayout"
import React from "react"
import ServicePage from "src/Service"

export default function Service() {
    return (
        <MainLayout>
            <ServicePage tabIndex={"notice"} />
        </MainLayout>
    )
}
