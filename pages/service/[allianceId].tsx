import React, {useEffect, useState} from "react"

import MainLayout from "src/Components/main-layout/MainLayout"
import ServicePage from "src/Service"
import {ServiceTabKey} from "types/service-type"
import {useRouter} from "next/router"

export default function Service() {
    const route = useRouter()
    const [tabIndex, setTabIndex] = useState<ServiceTabKey>("notice")

    useEffect(() => {
        if (route?.query.allianceId !== undefined || "") {
            setTabIndex(route.query.allianceId as ServiceTabKey)
        } else return
    }, [route.query])

    return (
        <MainLayout>
            <ServicePage tabIndex={tabIndex} />
        </MainLayout>
    )
}
