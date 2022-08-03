import MainLayout from "src/Components/main-layout/MainLayout"
import React from "react"
import ServicePage from "src/Service"
import {ServiceTabKey} from "types/service-type"
import {useRouter} from "next/router"

export default function Service() {
    const route = useRouter()

    return (
        <MainLayout>
            <ServicePage tabIndex={route.query.allianceId as ServiceTabKey} />
        </MainLayout>
    )
}
