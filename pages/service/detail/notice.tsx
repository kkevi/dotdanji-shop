import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {Container, useTheme} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import NoticeDetailPage from "src/Service/notice-detail-page"

export default function Index() {
    const route = useRouter()
    const theme = useTheme()
    const [queryNoticeId, setQueryNoticeId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setQueryNoticeId(route.query.noticeId)
    }, [route])

    return (
        <MainLayout>
            <NoticeDetailPage noticeId={queryNoticeId as string} />
        </MainLayout>
    )
}
