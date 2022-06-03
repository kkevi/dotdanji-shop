import {Container, useMediaQuery, useTheme} from "@mui/material"
import React, {useEffect, useState} from "react"
import {ServiceTabKey} from "types/service-type"
import {bannerList} from "./banner-list"
import ServiceMobileTabs from "./ServiceMobileTabs"
import ServiceWebTabs from "./ServiceWebTabs"

type Props = {
    tabId: ServiceTabKey
    children: React.ReactNode
}

export default function ServiceLayout(props: Props) {
    const {tabId, children} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [topBanner, setTopBanner] = useState(bannerList[0])

    useEffect(() => {
        setTopBanner(bannerList.filter(it => it.tabId === tabId)[0])
    }, [tabId])

    return (
        <>
            {mobile ? (
                <>
                    <ServiceMobileTabs topBanner={topBanner} tabId={tabId} />
                    <Container maxWidth="sm">{children}</Container>
                </>
            ) : (
                <>
                    <ServiceWebTabs topBanner={topBanner} tabId={tabId} />
                    <Container maxWidth="lg">{children}</Container>
                </>
            )}
        </>
    )
}
