import React, {useState} from "react"
import {useRouter} from "next/router"
import {useMediaQuery} from "@mui/material"

import EventWeb from "./EventWeb"
import {useTheme} from "@mui/material"
import {FAKE_EVENT_LIST} from "src/Components/fake-data/fake-event"

export default function Event() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [eventList, setEventList] = useState(FAKE_EVENT_LIST)

    const onClickRouter = (eventId: string) => {
        console.log("eventId", eventId)
        route.push({pathname: "/service/detail/event", query: {eventId: eventId}})
    }

    return (
        <>
            {mobile ? (
                <EventWeb eventList={eventList} onClickRouter={onClickRouter} />
            ) : (
                <EventWeb eventList={eventList} onClickRouter={onClickRouter} />
            )}
        </>
    )
}
