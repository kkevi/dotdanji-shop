import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"

import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import {customerServiceTabs} from "lib/customer-service-tabs"
import MainLayout from "src/Components/main-layout/MainLayout"

import ServiceLayout from "components/service-layout/ServiceLayout"
import ServiceLayoutMobile from "components/service-layout/ServiceLayoutMobile"

export default function Index() {
    const router = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [tabIndex, setTabIndex] = useState<number>(0)

    useEffect(() => {
        if (router.query.allianceId !== "") {
            setTabIndex(Object.keys(customerServiceTabs).indexOf(router.query.allianceId as string))
        }
    }, [router])

    return <MainLayout>{mobile ? <ServiceLayoutMobile tab={tabIndex} /> : <ServiceLayout tab={tabIndex} />}</MainLayout>
}
