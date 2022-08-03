import MainLayout from "components/main-layout/MainLayout"
import NoticeDetailPage from "src/Service/notice-detail-page"
import React from "react"
import {useRouter} from "next/router"

export default function Notice() {
    const route = useRouter()

    return (
        <MainLayout>
            <NoticeDetailPage noticeId={route.query.noticeId as string} />
        </MainLayout>
    )
}
