import React from "react"
import {useRouter} from "next/router"
import {Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import ServiceLayout from "components/service-layout/ServiceLayout"

import {customerServiceTabs} from "lib/customer-service-tabs"

// declare function queryParam(value: string | string[] | null | undefined): string | undefined

export default function Index() {
    const router = useRouter()
    // const allianceId = queryParam(router.query?.["allianceId"]) ?? ""
    const allianceId = router.query?.["allianceId"] ?? ""
    const tabIndex = Object.keys(customerServiceTabs).indexOf(allianceId)

    return (
        <MainLayout>
            <Stack py={13.5}>
                <ServiceLayout tab={tabIndex < 0 ? 0 : tabIndex} />
            </Stack>
        </MainLayout>
    )
}
