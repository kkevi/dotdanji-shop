import React from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Typography, Button} from "@mui/material"

import {EventType} from "types/event-type"
import useStyles from "./style"

type Props = {
    data: EventType
}

export default function EventDetailMobile(props: Props) {
    const {data} = props
    const route = useRouter()
    const classes = useStyles()

    return (
        <Stack>
            <Divider flexItem sx={{borderBottomWidth: 2}} />
            <Stack py={3} px={2}>
                <Typography fontSize={16} fontWeight={700} mb={0.5}>
                    {data?.title}
                </Typography>
                <Typography fontSize={14}>
                    {data?.startDate} ~ {data?.endDate}
                </Typography>
            </Stack>
            <Divider flexItem />
            <Stack py={3} px={2}>
                <div dangerouslySetInnerHTML={{__html: data?.content}} className={classes.htmlContainerMobile} />
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
