import React, {useEffect, useState} from "react"
import MainLayout from "components/main-layout/MainLayout"
import {useRouter} from "next/router"
import {useTheme} from "@mui/material"
import EventDetailPage from "src/Service/event-detail-page"
import ServiceLayout from "src/Components/service-layout/ServiceLayout"

export default function Index() {
    const route = useRouter()
    const theme = useTheme()
    const [queryEventId, setQueryEventId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setQueryEventId(route.query.eventId)
    }, [route])

    return (
        <MainLayout>
            <EventDetailPage eventId={queryEventId as string} />
        </MainLayout>
    )
}