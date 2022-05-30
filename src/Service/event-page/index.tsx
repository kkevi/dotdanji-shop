import React, {useState} from "react"
import {useRouter} from "next/router"
import {useMediaQuery, useTheme} from "@mui/material"

import {FAKE_EVENT_LIST} from "src/Components/fake-data/fake-event"
import EventWeb from "./EventWeb"
import EventMobile from "./EventMobile"

export default function EventPage() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [eventList, setEventList] = useState(FAKE_EVENT_LIST)

    const onClickRouter = (eventId: string) => {
        route.push({pathname: "/service/detail/event", query: {eventId: eventId}})
    }

    return (
        <>
            {mobile ? (
                <EventMobile eventList={eventList} onClickRouter={onClickRouter} mobile />
            ) : (
                <EventWeb eventList={eventList} onClickRouter={onClickRouter} />
            )}
        </>
    )
}
