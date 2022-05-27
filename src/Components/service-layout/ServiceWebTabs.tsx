import React from "react"
import {Typography, Stack, Tabs, Tab} from "@mui/material"

import {routerPush} from "lib/routerPush"
import {useTheme} from "@mui/material"
import {ServiceBannerType, ServiceTabKey} from "types/service-type"
import {serviceTabList} from "./banner-list"

function tabProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    }
}

type Props = {
    tabId?: ServiceTabKey
    topBanner: ServiceBannerType
}

export default function ServiceWebTabs(props: Props) {
    const {tabId, topBanner} = props
    const theme = useTheme()

    const onClickTabChange = (event: React.SyntheticEvent, newValue: string) => {
        if (tabId) {
            routerPush(`/service/${newValue}`)
        }
    }

    return (
        <Stack mt={13.5} mb={7}>
            <Stack justifyContent="center" alignItems="center" height={300} sx={{backgroundColor: topBanner?.color}}>
                <Typography className="pointFont" fontSize={32} color="white">
                    {topBanner?.phrase}
                </Typography>
                <Typography className="pointFont" mt={1} fontSize={18} color={theme.palette.secondary.light}>
                    {topBanner?.title}
                </Typography>
            </Stack>
            <Tabs centered value={tabId} onChange={onClickTabChange}>
                {Object.entries(serviceTabList).map((tabName, index) => (
                    <Tab
                        key={`service-tabs-${index}`}
                        sx={{pt: 3, pb: 2}}
                        label={<Typography fontSize={18}>{tabName[1]}</Typography>}
                        value={tabName[0]}
                        {...tabProps(index)}
                    />
                ))}
            </Tabs>
        </Stack>
    )
}
