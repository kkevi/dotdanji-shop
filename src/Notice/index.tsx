import React, {useState} from "react"
import {useRouter} from "next/router"
import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import {FAKE_NOTICE_DATA} from "src/Components/fake-data/fake-service"

import NoticeWeb from "./NoticeWeb"
import NoticeMobile from "./NoticeMobile"

export default function Index() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [noticeList, setNoticeList] = useState(FAKE_NOTICE_DATA)

    const onClickRouter = (noticeId: string) => {
        route.push({pathname: "/customer-service/detail", query: {noticeId: noticeId}})
    }

    const tableTitle: string[] = ["번호", "제목", "등록일"]

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
