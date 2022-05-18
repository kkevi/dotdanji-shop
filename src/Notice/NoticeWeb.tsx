import React, {useState} from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"

import PaginationBox from "src/Components/pagination-box/PaginationBox"
import {NoticeDetailProps} from "types/service-type"

type NoticeWebProps = {
    noticeList: NoticeDetailProps[]
    onClickRouter: (val: string) => void
}

export default function NoticeWeb({noticeList, onClickRouter}: NoticeWebProps) {
    const route = useRouter()
    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber)
    }

    const tableTitle: string[] = ["번호", "제목", "등록일"]

    return (
        <Stack mt={2}>
            <Divider flexItem sx={{borderBottomWidth: 2}} />

            <Table>
                <TableHead>
                    <TableRow key={`tableTitle`}>
                        {tableTitle.map((title, idx) => (
                            <TableCell key={"tableTitle" + idx} sx={{fontSize: "1rem", fontWeight: 700}} align="center">
                                {title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {noticeList
                        .map((notice, idx) => (
                            <TableRow key={`tableRow ${idx}`} sx={{cursor: "pointer"}}>
                                <TableCell align="center" sx={{fontSize: "1rem"}}>
                                    {idx + 1}
                                </TableCell>
                                <TableCell sx={{fontSize: "1rem"}} onClick={() => onClickRouter(notice.noticeId)}>
                                    {notice.title}
                                </TableCell>
                                <TableCell align="center" sx={{fontSize: "1rem"}}>
                                    {notice.date}
                                </TableCell>
                            </TableRow>
                        ))
                        .reverse()
                        .slice((activePage - 1) * 10, activePage * 10)}
                </TableBody>
            </Table>
            <PaginationBox activePage={activePage} dataLength={noticeList.length} handlePageChange={handlePageChange} />
        </Stack>
    )
}
