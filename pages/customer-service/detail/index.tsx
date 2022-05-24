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

    const tabList = [
        {
            phrase: "심키즈의 새로운 소식입니다.",
            title: "공지사항",
            color: theme.palette.primary.light,
            image: "",
        },

        {
            phrase: "무엇을 도와드릴까요?",
            title: "FAQ",
            color: theme.palette.primary.main,
            image: "",
        },

        {
            phrase: "소중한 문의에 답변드립니다.",
            title: "1:1 문의",
            color: theme.palette.primary.dark,
            image: "",
        },
    ]

    return (
        <MainLayout>
            {mobile ? (
                <ServiceLayoutMobile tab={0} tablist={tabList[0]} noticeId={queryNoticeId} />
            ) : (
                <ServiceLayout tab={0} tablist={tabList[0]} noticeId={queryNoticeId} />
            )}
        </MainLayout>
    )
}
