import React from "react"
import {Container, Typography, Stack, Tabs, Tab} from "@mui/material"

import {customerServiceTabs} from "lib/customer-service-tabs"
import {useTheme} from "@mui/system"
import {routerPush} from "lib/routerPush"

import Notice from "src/Notice"
import FAQ from "src/FAQ"
import Event from "src/Event"
import Inquiry from "src/Inquiry"
import NoticeDetailPage from "src/Notice/notice-detail-page/NoticeDetailPage"

function tabProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    }
}

type Props = {
    tab?: number
    children?: React.ReactNode
    noticeId?: string | string[] | undefined
    tablist: {
        phrase: string
        title: string
        color: string
        image: string
    }
}

export default function ServiceLayoutMobile(props: Props) {
    const {tab, children, noticeId, tablist} = props
    const theme = useTheme()

    const handleTabChange = (tab: number) => {
        const tabId = Object.keys(customerServiceTabs)[tab]
        if (tabId) {
            routerPush(`/customer-service/${tabId}`)
        }
    }

    return (
        <Container maxWidth="sm" sx={{mt: 9.9, p: 0}}>
            <Stack justifyContent="center" alignItems="center" height={200} sx={{backgroundColor: tablist?.color}}>
                <Typography className="pointFont" fontSize={24} color="white">
                    {tablist?.phrase}
                </Typography>
                <Typography className="pointFont" fontSize={18} color={theme.palette.secondary.light}>
                    {tablist?.title}
                </Typography>
            </Stack>
            <Stack>
                <Tabs sx={{marginBottom: 6}} centered value={tab} onChange={(event, value) => handleTabChange(value)}>
                    {Object.values(customerServiceTabs).map((tabName, idx) => (
                        <Tab
                            key={"customer-service" + idx}
                            sx={{padding: 1.5}}
                            label={<Typography>{tabName}</Typography>}
                            value={idx}
                            {...tabProps(idx)}
                        />
                    ))}
                </Tabs>

                {tab === 0 && (noticeId ? <NoticeDetailPage noticeId={noticeId as string} /> : <Notice />)}
                {tab === 1 && <FAQ />}
                {tab === 2 && <Event />}
                {tab === 3 && <Inquiry />}
                <Stack py={8}>{children}</Stack>
            </Stack>
        </Container>
    )
}
