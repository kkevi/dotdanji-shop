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

export default function ServiceMobileTabs(props: Props) {
    const {tabId, topBanner} = props
    const theme = useTheme()

    const onClickTabChange = (event: React.SyntheticEvent, newValue: string) => {
        if (tabId) {
            routerPush(`/service/${newValue}`)
        }
    }

    return (
        <>
            <Stack
                justifyContent="center"
                alignItems="center"
                height={200}
                sx={{backgroundColor: topBanner?.color}}
                mt={9.9}
            >
                <Typography className="pointFont" fontSize={24} color="white">
                    {topBanner?.phrase}
                </Typography>
                <Typography className="pointFont" fontSize={18} color={theme.palette.secondary.light}>
                    {topBanner?.title}
                </Typography>
            </Stack>
            <Tabs centered value={tabId} onChange={onClickTabChange} sx={{mb: 3}}>
                {Object.entries(serviceTabList).map((tabName, index) => (
                    <Tab
                        key={"customer-service" + index}
                        sx={{padding: 1.5}}
                        label={<Typography fontSize={13}>{tabName[1]}</Typography>}
                        value={tabName[0]}
                        {...tabProps(index)}
                    />
                ))}
            </Tabs>
        </>
    )
}
