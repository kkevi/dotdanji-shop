import React from "react"
import Slider from "react-slick"

import {useTheme} from "@mui/styles"
import {Button, Stack, Typography} from "@mui/material"

import ImageBox from "Components/ImageBox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type VerticalSliderProps = {
    id: string
    title: string
    author: string
    content: string
    image: string
    url: string
}

export default function VerticalSlider(props: VerticalSliderProps) {
    const {id, title, author, content, image, url} = props
    const theme = useTheme()

    return (
        <Stack>
            <Stack
                sx={{height: 350, backgroundColor: "#FAFBFD", padding: 3}}
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Stack>
                    <Typography mt={2} fontWeight={800} fontSize={24}>
                        {title}
                    </Typography>
                    <Typography fontWeight={800} fontSize={14} color="#757575">
                        {author}
                    </Typography>
                    <Typography mt={4} fontWeight={800} fontSize={16} color="#757575">
                        {content}
                    </Typography>
                </Stack>

                <Button variant="outlined" sx={{width: 120}} onClick={() => {}}>
                    읽으러 가기
                </Button>
            </Stack>
            <div style={{height: 300, backgroundColor: "pink"}}>
                <ImageBox height={300} src={image} />
            </div>
        </Stack>
    )
}
