import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {Container, Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import ServiceLayout from "Components/service-layout/ServiceLayout"
import NoticeDetailPage from "Notice/notice-detail-page/NoticeDetailPage"

export default function Index() {
    const route = useRouter()
    const [noticeId, setNoticeId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setNoticeId(route.query.noticeId)
    }, [route])

    return (
        <MainLayout>
            <Stack py={13.5}>
                <ServiceLayout index={0}>
                    <NoticeDetailPage noticeId={noticeId as string} />
                </ServiceLayout>
            </Stack>
        </MainLayout>
    )
}
