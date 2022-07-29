import React, {useEffect, useState} from "react"

import MainLayout from "components/main-layout/MainLayout"
import NoticeDetailPage from "src/Service/notice-detail-page"
import {useRouter} from "next/router"

export default function Notice() {
    const route = useRouter()
    const [queryNoticeId, setQueryNoticeId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        if (route.query.eventId) setQueryNoticeId(route.query.noticeId)
    }, [route.query])

    return (
        <MainLayout>
            <NoticeDetailPage noticeId={queryNoticeId as string} />
        </MainLayout>
    )
}
