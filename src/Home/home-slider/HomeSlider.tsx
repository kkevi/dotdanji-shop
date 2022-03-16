import React from "react"

import {Typography, Stack, Button} from "@mui/material"
import {makeStyles} from "@mui/styles"

import ImageBox from "Components/ImageBox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type HomeSliderProps = {
    id: string
    title: string
    subTitle: string
    image: string
    url: string
}

const useStyles = makeStyles({
    button: {
        marginTop: 60,
        width: 250,
        padding: "16px 28px",
        fontSize: 18,
        color: "white",
        border: "2px solid white",
        "&:hover": {
            backgroundColor: "rgba(250,251,253,0.3)",
            color: "white",
            fontWeight: 700,
            border: "2px solid white",
        },
    },
})

export default function HomeSlider(props: HomeSliderProps) {
    const {id, title, subTitle, image, url} = props
    const classes = useStyles()

    return (
        <div style={{position: "relative"}}>
            <Stack position="absolute" bottom={110} left={500} zIndex={10} fontWeight={800} color="white">
                <Typography variant="h3">{title}</Typography>
                <Typography variant="h5" mt={2}>
                    {subTitle}
                </Typography>

                <Button variant="outlined" className={classes.button} onClick={() => {}}>
                    자세히 보기
                </Button>
            </Stack>
            <ImageBox height={720} src={image} />
        </div>
    )
}
