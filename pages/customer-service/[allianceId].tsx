import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"

import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import {customerServiceTabs} from "lib/customer-service-tabs"
import MainLayout from "src/Components/main-layout/MainLayout"

import ServiceLayout from "components/service-layout/ServiceLayout"
import ServiceLayoutMobile from "components/service-layout/ServiceLayoutMobile"

export default function Index() {
    const router = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [tabIndex, setTabIndex] = useState<number>(0)

    useEffect(() => {
        if (router?.query.allianceId !== undefined || "") {
            setTabIndex(Object.keys(customerServiceTabs).indexOf(router.query.allianceId as string))
        }
    }, [router])

    const tabList = [
        {
            phrase: "심키즈의 새로운 소식입니다.",
            title: "공지사항",
            color: "#95D6EE",
            image: "",
        },
        {
            phrase: "무엇을 도와드릴까요?",
            title: "FAQ",
            color: theme.palette.primary.main,
            image: "",
        },
        {
            phrase: "함께 즐길 수 있는 새 이벤트!",
            title: "이벤트",
            color: theme.palette.secondary.main,
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
                <ServiceLayoutMobile tab={tabIndex} tablist={tabList[tabIndex]} />
            ) : (
                <ServiceLayout tab={tabIndex} tablist={tabList[tabIndex]} />
            )}
        </MainLayout>
    )
}
