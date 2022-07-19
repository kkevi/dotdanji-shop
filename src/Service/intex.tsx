import React from "react"

import ServiceLayout from "src/Components/service-layout/ServiceLayout"
import {ServiceTabKey} from "types/service-type"

import NoticePage from "./notice-page"
import FAQPage from "./faq-page"
import EventPage from "./event-page"
import InquiryPage from "./inquiry-page"
import {Stack} from "@mui/material"

type Props = {
    tabIndex: ServiceTabKey
}

export default function Service({tabIndex}: Props) {
    return (
        <ServiceLayout tabId={tabIndex}>
            <Stack mb={8}>
                {tabIndex === "notice" && <NoticePage />}
                {tabIndex === "faq" && <FAQPage />}
                {tabIndex === "event" && <EventPage />}
                {tabIndex === "inquiry" && <InquiryPage />}
            </Stack>
        </ServiceLayout>
    )
}
