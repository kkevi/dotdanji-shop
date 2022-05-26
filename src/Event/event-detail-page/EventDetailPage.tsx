import React, {useState} from "react"
import {useRouter} from "next/router"
import {Stack, Divider, Typography, Button} from "@mui/material"

export default function EventDetailPage() {
    const route = useRouter()

    console.log("what happened")

    return (
        <Stack>
            <Divider flexItem sx={{borderBottomWidth: 2}} />
            <Stack direction="row" justifyContent="space-between" alignItems="center" py={4} px={6}>
                <Typography fontSize={22} fontWeight={700}>
                    제목
                </Typography>
                <Typography fontSize={15}>작성날짜</Typography>
            </Stack>
            <Divider flexItem />
            <Stack pt={4} pb={8} px={6}>
                {/* <div dangerouslySetInnerHTML={{__html: data?.content}} className={classes.htmlContainer} /> */}
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
