import React, {useState} from "react"
import {useRouter} from "next/router"
import {useMediaQuery, useTheme} from "@mui/material"

import {FAKE_NOTICE_DATA} from "src/Components/fake-data/fake-service"

import NoticeWeb from "./NoticeWeb"
import NoticeMobile from "./NoticeMobile"

export default function Index() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [noticeList, setNoticeList] = useState(FAKE_NOTICE_DATA)

    const onClickRouter = (noticeId: string) => {
        route.push({pathname: "/service/detail/notice", query: {noticeId: noticeId}})
    }

    return (
        <>
            {mobile ? (
                <NoticeMobile noticeList={noticeList} onClickRouter={onClickRouter} />
            ) : (
                <NoticeWeb noticeList={noticeList} onClickRouter={onClickRouter} />
            )}
        </>
    )
}
