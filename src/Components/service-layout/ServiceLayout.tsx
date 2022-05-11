import React, {useState} from "react"
import {Container, Typography, Stack, Tabs, Tab} from "@mui/material"

import {customerServiceTabs} from "src/lib/customer-service-tabs"
import {useTheme} from "@mui/system"
import {routerPush} from "src/lib/routerPush"

import Notice from "src/Notice"
import FAQ from "src/FAQ"
import Inquiry from "src/Inquiry"
import NoticeDetailPage from "src/Notice/notice-detail-page/NoticeDetailPage"
import {FAKE_NOTICE_DATA} from "../fake-data/fake-service"

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
}

export default function ServiceLayout(props: Props) {
    const {tab, children, noticeId} = props
    const theme = useTheme()
    const [noticeData, setNoticeData] = useState()

    const tabList = [
        {
            phrase: "심키즈의 새로운 소식입니다.",
            title: "공지사항",
            color: theme.palette.primary.light,
            image: "",
        },

        {
            phrase: "무엇을 도와드릴까요?",
            title: "FAQ",
            color: theme.palette.primary.main,
            image: "",
        },

        {
            phrase: "소중한 문의에 답변드립니다.",
            title: "1:1 문의",
            color: theme.palette.primary.dark,
            image: "",
        },
    ]

    const handleTabChange = (tab: number) => {
        const tabId = Object.keys(customerServiceTabs)[tab]
        if (tabId) {
            routerPush(`/customer-service/${tabId}`)
        }
    }

    return (
        <Stack>
            <Stack
                justifyContent="center"
                alignItems="center"
                height={300}
                sx={{backgroundColor: tabList[tab ? tab : 0].color}}
            >
                <Typography className="pointFont" fontSize={32} color="white">
                    {tabList[tab ? tab : 0].phrase}
                </Typography>
                <Typography className="pointFont" mt={1} fontSize={18} color={theme.palette.secondary.light}>
                    {tabList[tab ? tab : 0].title}
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
                    {tab === 2 && <Inquiry />}
                    <Stack py={8}>{children}</Stack>
                </Container>
            </Stack>
        </Stack>
    )
}
