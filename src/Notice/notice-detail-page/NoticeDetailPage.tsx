import React from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Typography, Button} from "@mui/material"

import {NoticeDetailProps} from "../notice-type"

type NoticeDetailPageProps = {
    noticeId: string
}

export default function NoticeDetailPage({noticeId}: NoticeDetailPageProps) {
    const route = useRouter()

    const current = fakeTableListItem[Number(noticeId)]

    return (
        <Stack>
            <Divider flexItem sx={{borderBottomWidth: 2}} />
            <Stack direction="row" justifyContent="space-between" alignItems="center" py={4} px={6}>
                <Typography fontSize={22} fontWeight={700}>
                    {current.title}
                </Typography>
                <Typography fontSize={15}>{current.date}</Typography>
            </Stack>
            <Divider flexItem />
            <Stack pt={4} pb={8} px={6}>
                <Typography>{current.content} 내요냉욘애뇽ㅇ</Typography>
            </Stack>
            <Divider flexItem />
            <Button
                variant="contained"
                sx={{alignSelf: "center", marginTop: 4, width: 150, height: 50, fontSize: 18, fontWeight: 700}}
                onClick={() => route.back()}
            >
                목 록
            </Button>
        </Stack>
    )
}

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
