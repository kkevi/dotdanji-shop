import React from "react"
import {useRouter} from "next/router"
import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import EventWeb from "./EventWeb"
import {EventDetailProps} from "types/service-type"

export default function Event() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    const fakeEventList: EventDetailProps[] = [
        {
            eventId: "fake_event_0",
            title: "오픈 이벤트",
            content:
                "<p>안녕하세요. 어린이들을 위한 즐거운 한글 콘텐츠를 만드는 심키즈입니다.<br/> 좋은 상품과 서비스로 찾아뵙겠습니다.<br/> 많은 기대 부탁드립니다! 감사합니다.</p>",
            startDate: "2022-06-01",
            endDate: "2022-08-07",
        },
        {
            eventId: "fake_event_1",
            title: "가정의 달 이벤트",
            content:
                "<p>안녕하세요. 어린이들을 위한 즐거운 한글 콘텐츠를 만드는 심키즈입니다.<br/> 좋은 상품과 서비스로 찾아뵙겠습니다.<br/> 많은 기대 부탁드립니다! 감사합니다.</p>",
            startDate: "2022-06-01",
            endDate: "2022-08-07",
        },
        {
            eventId: "fake_event_2",
            title: "후기 이벤트",
            content:
                "<p>안녕하세요. 어린이들을 위한 즐거운 한글 콘텐츠를 만드는 심키즈입니다.<br/> 좋은 상품과 서비스로 찾아뵙겠습니다.<br/> 많은 기대 부탁드립니다! 감사합니다.</p>",
            startDate: "2022-06-01",
            endDate: "2022-08-07",
        },
        {
            eventId: "fake_event_3",
            title: "공유 이벤트",
            content:
                "<p>안녕하세요. 어린이들을 위한 즐거운 한글 콘텐츠를 만드는 심키즈입니다.<br/> 좋은 상품과 서비스로 찾아뵙겠습니다.<br/> 많은 기대 부탁드립니다! 감사합니다.</p>",
            startDate: "2022-06-01",
            endDate: "2022-08-07",
        },
        {
            eventId: "fake_event_4",
            title: "이벤트",
            content:
                "<p>안녕하세요. 어린이들을 위한 즐거운 한글 콘텐츠를 만드는 심키즈입니다.<br/> 좋은 상품과 서비스로 찾아뵙겠습니다.<br/> 많은 기대 부탁드립니다! 감사합니다.</p>",
            startDate: "2022-06-01",
            endDate: "2022-08-07",
        },
    ]

    const onClickRouter = (eventId: string) => {
        route.push({pathname: "/customer-service/detail/event", query: {eventId: eventId}})
    }

    return <>{mobile ? <></> : <EventWeb eventList={fakeEventList} onClickRouter={onClickRouter} />}</>
}
