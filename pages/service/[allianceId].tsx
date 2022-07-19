import {useRouter} from "next/router"
import React, {useEffect, useState} from "react"
import MainLayout from "src/Components/main-layout/MainLayout"
import Service from "src/Service/intex"
import {ServiceTabKey} from "types/service-type"

export default function IndexService() {
    const route = useRouter()
    const [tabIndex, setTabIndex] = useState<ServiceTabKey>("notice")

    useEffect(() => {
        if (route?.query.allianceId !== undefined || "") {
            setTabIndex(route.query.allianceId as ServiceTabKey)
        } else return
    }, [route.query])

    return (
        <MainLayout>
            <Service tabIndex={tabIndex} />
        </MainLayout>
    )
}
