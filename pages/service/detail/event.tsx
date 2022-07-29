import React, {useEffect, useState} from "react"

import EventDetailPage from "src/Service/event-detail-page"
import MainLayout from "components/main-layout/MainLayout"
import {useRouter} from "next/router"

export default function Event() {
    const route = useRouter()
    const [queryEventId, setQueryEventId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        if (route.query.eventId) setQueryEventId(route.query.eventId)
        else route.push("/")
    }, [route, route.query])

    return (
        <MainLayout>
            <EventDetailPage eventId={queryEventId as string} />
        </MainLayout>
    )
}
