import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import MainLayout from "components/main-layout/MainLayout"
import ServiceLayout from "components/service-layout/ServiceLayout"
import ServiceLayoutMobile from "components/service-layout/ServiceLayoutMobile"

export default function Index() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [queryNoticeId, setQueryNoticeId] = useState<string | string[] | undefined>("")

    useEffect(() => {
        setQueryNoticeId(route.query.noticeId)
    }, [route])

    return (
        <MainLayout>
            {mobile ? (
                <ServiceLayoutMobile tab={0} noticeId={queryNoticeId} />
            ) : (
                <ServiceLayout tab={0} noticeId={queryNoticeId} />
            )}
        </MainLayout>
    )
}
