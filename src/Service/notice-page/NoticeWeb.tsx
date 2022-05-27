import React, {useState} from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"

import PaginationBox from "src/Components/pagination-box/PaginationBox"
import {NoticeType} from "types/service-type"

type Props = {
    noticeList: NoticeType[]
    onClickRouter: (val: string) => void
}

export default function NoticeWeb(props: Props) {
    const {noticeList, onClickRouter} = props
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
                        {tableTitle.map((title, index) => (
                            <TableCell
                                key={"tableTitle" + index}
                                sx={{fontSize: "1rem", fontWeight: 700}}
                                align="center"
                            >
                                {title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {noticeList
                        .map((notice, index) => (
                            <TableRow key={`notice-table-row-${index}`} sx={{cursor: "pointer"}}>
                                <TableCell align="center" sx={{fontSize: "1rem"}}>
                                    {index + 1}
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
