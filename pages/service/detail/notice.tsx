import React, {useEffect} from "react"

import MainLayout from "components/main-layout/MainLayout"
import NoticeDetailPage from "src/Service/notice-detail-page"
import {useRouter} from "next/router"

export default function Notice() {
    const route = useRouter()

    return (
        <MainLayout>
            <NoticeDetailPage noticeId={route.query.noticeId as string} />
        </MainLayout>
    )
}
