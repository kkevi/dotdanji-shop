import React from "react"
import {useRouter} from "next/router"

import {Container, Typography, Stack, Button} from "@mui/material"
import {makeStyles} from "@mui/styles"

import ImageBox from "Component/image-box/ImageBox"

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
        width: 200,
        height: 50,
        fontSize: 18,
        color: "white",
        border: "2px solid white",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.3)",
            color: "white",
            fontWeight: 700,
            border: "2px solid white",
        },
    },
})

export default function HomeSlider(props: HomeSliderProps) {
    const {id, title, subTitle, image, url} = props
    const classes = useStyles()
    const route = useRouter()

    return (
        <div style={{position: "relative"}}>
            <Container maxWidth="lg">
                <Stack position="absolute" top="40%" zIndex={10} fontWeight={800} color="white">
                    <Typography variant="h3" className="pointFont">
                        {title}
                    </Typography>
                    <Typography variant="h5" mt={2}>
                        {subTitle}
                    </Typography>

                    <Button
                        variant="outlined"
                        className={classes.button}
                        onClick={() => {
                            route.push("/")
                        }}
                    >
                        자세히 보기
                    </Button>
                </Stack>
            </Container>
            <ImageBox height={720} src={image} brightness={0.7} />
        </div>
    )
}
