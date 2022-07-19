import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import MainLayout from "components/main-layout/MainLayout"
import NoticeDetailPage from "src/Service/notice-detail-page"

export default function IndexServiceNotice() {
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
