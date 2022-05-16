import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {Stack} from "@mui/material"

import {customerServiceTabs} from "lib/customer-service-tabs"
import MainLayout from "src/Components/main-layout/MainLayout"
import ServiceLayout from "src/Components/service-layout/ServiceLayout"

export default function Index() {
    const router = useRouter()
    const [tabIndex, setTabIndex] = useState<number>(0)

    useEffect(() => {
        if (router.query.allianceId !== "") {
            setTabIndex(Object.keys(customerServiceTabs).indexOf(router.query.allianceId as string))
        }
    }, [router])

    return (
        <MainLayout>
            <Stack py={13.5}>
                <ServiceLayout tab={tabIndex} />
            </Stack>
        </MainLayout>
    )
}
