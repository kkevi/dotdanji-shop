import React, {useEffect} from "react"

import EventDetailPage from "src/Service/event-detail-page"
import MainLayout from "components/main-layout/MainLayout"
import {useRouter} from "next/router"

export default function Event() {
    const route = useRouter()

    return (
        <MainLayout>
            <EventDetailPage eventId={route.query.eventId as string} />
        </MainLayout>
    )
}
