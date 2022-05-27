import React, {useEffect, useState} from "react"
import {Stack, useMediaQuery, useTheme, Container} from "@mui/material"

import {eventDefaultData, EventType} from "types/event-type"
import ServiceLayout from "src/Components/service-layout/ServiceLayout"
import EventDetailPage from "./EventDetailPage"

type Props = {
    eventId: string
}

export default function NoticeDetailPage(props: Props) {
    const {eventId} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [data, setData] = useState<EventType>(eventDefaultData)

    useEffect(() => {
        // setData(FAKE_NOTICE_DATA.filter(it => it.noticeId === eventId)[0])
    }, [data])

    return (
        <ServiceLayout tabId="event">
            <Container maxWidth="lg">
                <Stack mb={8}>{mobile && <EventDetailPage data={data} />}</Stack>
            </Container>
        </ServiceLayout>
    )
}
