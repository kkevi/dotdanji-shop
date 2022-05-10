import React from "react"

import {useTheme} from "@mui/styles"
import {Button, Stack, Typography} from "@mui/material"

import ImageBox from "Component/image-box/ImageBox"

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
}

export default function VerticalSlider(props: VerticalSliderProps) {
    const {eventId, title, startDate, endDate, caption, image, url} = props
    const theme = useTheme()

    return (
        <Stack>
            <Stack
                sx={{height: 350, backgroundColor: "#fff", padding: 3}}
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Stack>
                    <Typography className="pointFont" my={2} fontWeight={800} fontSize={20}>
                        {title}
                    </Typography>
                    <Typography fontWeight={800} fontSize={14} color="#bbb">
                        {startDate} - {endDate}
                    </Typography>
                    <Typography mt={4} fontWeight={300} fontSize={15} color="#777">
                        {caption}
                    </Typography>
                </Stack>

                <Button color="inherit" variant="outlined" sx={{width: 120}} onClick={() => Router.push(url)}>
                    확인하기
                </Button>
            </Stack>
            <div style={{height: 300, backgroundColor: "pink"}}>
                <ImageBox height={300} src={image} />
            </div>
        </Stack>
    )
}
