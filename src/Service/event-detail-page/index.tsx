import React, {useEffect, useState} from "react"
import {Stack, useMediaQuery, useTheme, Container} from "@mui/material"

import {eventDefaultData, EventType} from "types/event-type"
import ServiceLayout from "src/Components/service-layout/ServiceLayout"
import EventDetailWeb from "./EventDetailWeb"
import {FAKE_EVENT_LIST} from "src/Components/fake-data/fake-event"

type Props = {
    eventId: string
}

export default function EventDetailPage(props: Props) {
    const {eventId} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [data, setData] = useState<EventType>(eventDefaultData)

    useEffect(() => {
        setData(FAKE_EVENT_LIST.filter(it => it.eventId === eventId)[0])
    }, [data])

    return (
        <ServiceLayout tabId="event">
            <Container maxWidth="lg">
                <Stack mb={8}>{mobile ? <EventDetailWeb data={data} /> : <EventDetailWeb data={data} />}</Stack>
            </Container>
        </ServiceLayout>
    )
}
