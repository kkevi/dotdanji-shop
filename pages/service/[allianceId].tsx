import React, {useEffect} from "react"

import MainLayout from "src/Components/main-layout/MainLayout"
import ServicePage from "src/Service"
import {ServiceTabKey} from "types/service-type"
import {useRouter} from "next/router"

export default function Service() {
    const route = useRouter()

    const allianceId = route.query.allianceId

    useEffect(() => {
        if (!allianceId) return
    }, [route])

    return (
        <MainLayout>
            <ServicePage tabIndex={allianceId as ServiceTabKey} />
        </MainLayout>
    )
}
