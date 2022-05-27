import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Typography, Button, useMediaQuery, useTheme, Container} from "@mui/material"

import useStyles from "./style"
import {NoticeDetailProps} from "types/service-type"
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
    const [data, setData] = useState<NoticeDetailProps>({
        title: "",
        noticeId: noticeId,
        content: "",
        date: "",
    })

    useEffect(() => {
        setData(FAKE_NOTICE_DATA.filter(it => it.noticeId === noticeId)[0])
    }, [data])

    return (
        <ServiceLayout tabId="notice">
            <Container maxWidth="lg">
                <Stack mb={8}>{mobile ? <NoticeDetailMobile data={data} /> : <NoticeDetailWeb data={data} />}</Stack>
            </Container>
        </ServiceLayout>
    )
}
