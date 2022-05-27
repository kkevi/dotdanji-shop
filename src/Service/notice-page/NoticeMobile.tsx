import React, {useState} from "react"
import {useRouter} from "next/router"
import {Divider, Table, TableRow, TableCell, TableBody, Button} from "@mui/material"

import {NoticeType} from "types/service-type"

type Props = {
    noticeList: NoticeType[]
    onClickRouter: (val: string) => void
}

export default function NoticeMobile(props: Props) {
    const {noticeList, onClickRouter} = props
    const [activePage, setActivePage] = useState(10)

    return (
        <>
            <Divider flexItem sx={{borderBottomWidth: 1}} />
            <Table>
                <TableBody>
                    {noticeList
                        .map((notice, index) => (
                            <TableRow key={`tableRow ${index}`} sx={{cursor: "pointer"}}>
                                <TableCell sx={{fontSize: "1rem"}} onClick={() => onClickRouter(notice.noticeId)}>
                                    <p style={{fontWeight: 700}}>{notice.title}</p>
                                    <p style={{fontSize: 12}}>{notice.date}</p>
                                </TableCell>
                            </TableRow>
                        ))
                        .reverse()
                        .slice(0, activePage)}
                </TableBody>
            </Table>
            {activePage < noticeList.length ? (
                <Button
                    variant="contained"
                    sx={{alignSelf: "center", marginTop: 4, width: "90%", height: 40, fontSize: 14, fontWeight: 700}}
                    onClick={() => {
                        setActivePage(prev => prev + 10)
                    }}
                    disableElevation
                >
                    더보기
                </Button>
            ) : undefined}
        </>
    )
}
