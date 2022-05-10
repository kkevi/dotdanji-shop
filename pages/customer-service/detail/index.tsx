import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {Container, Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import ServiceLayout from "components/service-layout/ServiceLayout"
import NoticeDetailPage from "src/Notice/notice-detail-page/NoticeDetailPage"

export default function Index() {
    const route = useRouter()
    const [noticeId, setNoticeId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setNoticeId(route.query.noticeId)
    }, [route])

    return (
        <MainLayout>
            <Stack py={13.5}>
                <ServiceLayout tab={0} noticeId={noticeId} />
            </Stack>
        </MainLayout>
    )
}
