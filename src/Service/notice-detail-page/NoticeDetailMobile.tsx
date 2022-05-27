import React from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Typography, Button} from "@mui/material"

import {NoticeType} from "types/service-type"
import useStyles from "./style"

type Props = {
    data: NoticeType
}

export default function NoticeDetailMobile(props: Props) {
    const {data} = props
    const route = useRouter()
    const classes = useStyles()

    return (
        <Stack>
            <Divider flexItem sx={{borderBottomWidth: 2}} />
            <Stack p={4}>
                <Typography fontSize={16} fontWeight={700} mb={0.5}>
                    {data.title}
                </Typography>
                <Typography fontSize={14}>{data.date}</Typography>
            </Stack>
            <Divider flexItem />
            <Stack p={4}>
                <div dangerouslySetInnerHTML={{__html: data.content}} className={classes.htmlContainerMobile} />
            </Stack>
            <Divider flexItem />
            <Button
                variant="contained"
                sx={{alignSelf: "center", marginTop: 4, width: 120, height: 40, fontSize: 14, fontWeight: 700}}
                onClick={() => route.back()}
                disableElevation
            >
                목 록
            </Button>
        </Stack>
    )
}
