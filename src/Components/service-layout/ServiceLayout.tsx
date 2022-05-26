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
import EventDetailPage from "src/Event/event-detail-page/EventDetailPage"

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
    eventId?: string | string[] | undefined
    tablist: {
        phrase: string
        title: string
        color: string
        image: string
    }
}

export default function ServiceLayout(props: Props) {
    const {tab, children, noticeId, eventId, tablist} = props
    const theme = useTheme()

    const handleTabChange = (tab: number) => {
        const tabId = Object.keys(customerServiceTabs)[tab]
        if (tabId) {
            routerPush(`/customer-service/${tabId}`)
        }
    }

    return (
        <Stack py={13.5}>
            <Stack justifyContent="center" alignItems="center" height={300} sx={{backgroundColor: tablist?.color}}>
                <Typography className="pointFont" fontSize={32} color="white">
                    {tablist?.phrase}
                </Typography>
                <Typography className="pointFont" mt={1} fontSize={18} color={theme.palette.secondary.light}>
                    {tablist?.title}
                </Typography>
            </Stack>
            <Stack>
                <Container maxWidth="lg">
                    <Tabs
                        sx={{marginBottom: 8}}
                        centered
                        value={tab}
                        onChange={(event, value) => handleTabChange(value)}
                    >
                        {Object.values(customerServiceTabs).map((tabName, idx) => (
                            <Tab
                                key={"customer-service" + idx}
                                sx={{padding: 3}}
                                label={<Typography fontSize={18}>{tabName}</Typography>}
                                value={idx}
                                {...tabProps(idx)}
                            />
                        ))}
                    </Tabs>

                    {tab === 0 && (noticeId ? <NoticeDetailPage noticeId={noticeId as string} /> : <Notice />)}
                    {tab === 1 && <FAQ />}
                    {tab === 2 && eventId ? <></> : <Event />}
                    {tab === 3 && <Inquiry />}
                    <Stack py={8}>{children}</Stack>
                </Container>
            </Stack>
        </Stack>
    )
}
