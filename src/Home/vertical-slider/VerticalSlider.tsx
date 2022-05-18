import React from "react"

import {useTheme} from "@mui/styles"
import {Button, Stack, Typography} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Router from "next/router"

type VerticalSliderProps = {
    eventId: string
    title: string
    startDate: string
    endDate: string
    caption: string
    image: string
    url: string
    mobile?: boolean
}

export default function VerticalSlider(props: VerticalSliderProps) {
    const {eventId, title, startDate, endDate, caption, image, url, mobile} = props
    const theme = useTheme()

    return (
        <>
            <Stack
                sx={{
                    height: mobile ? 260 : 350,
                    backgroundColor: "#fff",
                    padding: 3,
                }}
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Stack>
                    <Typography className="pointFont" mt={2} fontWeight={800} fontSize={20}>
                        {title}
                    </Typography>
                    <Typography mt={mobile ? 1 : 2} fontWeight={800} fontSize={mobile ? 12 : 14} color="#bbb">
                        {startDate} - {endDate}
                    </Typography>
                    <Typography mt={mobile ? 2 : 4} fontWeight={300} fontSize={mobile ? 14 : 15} color="#777">
                        {caption}
                    </Typography>
                </Stack>

                <Button color="inherit" variant="outlined" sx={{width: 120}} onClick={() => Router.push(url)}>
                    확인하기
                </Button>
            </Stack>
            <div style={{height: mobile ? 200 : 300, backgroundColor: "pink"}}>
                <ImageBox height={mobile ? 200 : 300} src={image} />
            </div>
        </>
    )
}
