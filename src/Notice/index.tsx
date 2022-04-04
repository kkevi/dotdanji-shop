import React from "react"
import {useRouter} from "next/router"

import {Stack, Divider, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"

import {NoticeDetailProps} from "./notice-type"

export default function Index() {
    const route = useRouter()

    const onClickRouter = (noticeId: string) => {
        route.push({pathname: "/notice/detail", query: {noticeId: noticeId}})
    }

    return (
        <Stack mt={2}>
            <Divider flexItem sx={{borderBottomWidth: 2}} />

            <Table>
                <TableHead>
                    <TableRow>
                        {tableTitle.map((title, idx) => (
                            <TableCell key={"tableTitle" + idx} sx={{fontSize: "1rem", fontWeight: 700}} align="center">
                                {title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeTableListItem.map((itm, idx) => (
                        <TableRow sx={{padding: 12, cursor: "pointer"}}>
                            <TableCell align="center" sx={{fontSize: "1rem"}}>
                                {idx + 1}
                            </TableCell>
                            <TableCell sx={{fontSize: "1rem"}} onClick={() => onClickRouter(itm.noticeId)}>
                                {itm.title}
                            </TableCell>
                            <TableCell align="center" sx={{fontSize: "1rem"}}>
                                {itm.date}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Stack>
    )
}

const tableTitle: string[] = ["번호", "제목", "등록일"]
const fakeTableListItem: NoticeDetailProps[] = [
    {
        noticeId: "0",
        title: "똑똑하고 흥미로운 언어교육, 돛단지 출시!",
        content: "내용0",
        date: "2022-04-04",
    },
    {
        noticeId: "1",
        title: "돛단지 전용 학습기기 A/S 안내",
        content: "내용1",
        date: "2022-04-04",
    },
    {
        noticeId: "2",
        title: "돛단지 전용 학습 단말기 사용 안내",
        content: "내용2",
        date: "2022-04-04",
    },
]
