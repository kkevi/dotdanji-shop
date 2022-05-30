import React, {useEffect, useState} from "react"
import {Stack, useMediaQuery, useTheme, Container} from "@mui/material"

import {noticeDefaultData, NoticeType} from "types/service-type"
import {FAKE_NOTICE_DATA} from "components/fake-data/fake-service"
import NoticeDetailWeb from "./NoticeDetailWeb"
import NoticeDetailMobile from "./NoticeDetailMobile"
import ServiceLayout from "src/Components/service-layout/ServiceLayout"

type Props = {
    noticeId: string
}

export default function NoticeDetailPage(props: Props) {
    const {noticeId} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [data, setData] = useState<NoticeType>(noticeDefaultData)

    useEffect(() => {
        setData(FAKE_NOTICE_DATA.filter(it => it.noticeId === noticeId)[0])
    }, [data])

    return (
        <ServiceLayout tabId="notice">
            <Container maxWidth="lg" sx={{p: 0}}>
                <Stack mb={8}>{mobile ? <NoticeDetailMobile data={data} /> : <NoticeDetailWeb data={data} />}</Stack>
            </Container>
        </ServiceLayout>
    )
}
