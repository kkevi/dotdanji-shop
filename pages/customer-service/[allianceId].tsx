import React from "react"
import {useRouter} from "next/router"
import {Stack} from "@mui/material"

import {customerServiceTabs} from "src/lib/customer-service-tabs"
import MainLayout from "src/Components/main-layout/MainLayout"
import ServiceLayout from "src/Components/service-layout/ServiceLayout"

export default function Index() {
    const router = useRouter()
    const allianceId = router.query?.["allianceId"] ?? ""
    const tabIndex = Object.keys(customerServiceTabs).indexOf(allianceId as string)

    return (
        <MainLayout>
            <Stack py={13.5}>
                <ServiceLayout tab={tabIndex < 0 ? 0 : tabIndex} />
            </Stack>
        </MainLayout>
    )
}
