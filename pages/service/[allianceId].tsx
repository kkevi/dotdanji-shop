import MainLayout from "src/Components/main-layout/MainLayout"
import React from "react"
import ServicePage from "src/Service"
import {ServiceTabKey} from "types/service-type"
import {useRouter} from "next/router"

export default function Service() {
    const route = useRouter()
    const allianceId = route.query.allianceId ?? "notice"

    return (
        <MainLayout>
            <ServicePage tabIndex={allianceId as ServiceTabKey} />
        </MainLayout>
    )
}
