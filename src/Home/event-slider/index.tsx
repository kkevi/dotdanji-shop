import React, {useState} from "react"

import {EventType} from "types/event-type"
import {FAKE_EVENT_LIST} from "src/Components/fake-data/fake-event"

import EventSliderMobile from "./EventSliderMobile"
import EventSliderWeb from "./EventSliderWeb"

type Props = {
    isMobile: boolean
}

//현재 진행중인 이벤트만 표시 필요
export default function EventSlider(props: Props) {
    const {isMobile} = props
    const [eventList, setEventList] = useState<EventType[]>(FAKE_EVENT_LIST)

    return <>{isMobile ? <EventSliderMobile eventList={eventList} /> : <EventSliderWeb eventList={eventList} />}</>
}
