import React, {useState} from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Typography, Button} from "@mui/material"

import {NoticeDetailProps} from "types/service-type"
import useStyles from "./style"

type Props = {
    data: NoticeDetailProps
}

export default function NoticeDetailWeb(props: Props) {
    const classes = useStyles()
    const {data} = props
    const route = useRouter()

    return (
        <Stack>
            <Divider flexItem sx={{borderBottomWidth: 2}} />
            <Stack direction="row" justifyContent="space-between" alignItems="center" py={4} px={6}>
                <Typography fontSize={22} fontWeight={700}>
                    {data?.title}
                </Typography>
                <Typography fontSize={15}>{data?.date}</Typography>
            </Stack>
            <Divider flexItem />
            <Stack pt={4} pb={8} px={6}>
                <div dangerouslySetInnerHTML={{__html: data?.content}} className={classes.htmlContainer} />
            </Stack>
            <Divider flexItem />
            <Button
                variant="contained"
                sx={{alignSelf: "center", marginTop: 4, width: 150, height: 50, fontSize: 18, fontWeight: 700}}
                onClick={() => route.back()}
                disableElevation
            >
                목 록
            </Button>
        </Stack>
    )
}
