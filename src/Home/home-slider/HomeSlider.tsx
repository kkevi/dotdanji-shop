import React from "react"
import {useRouter} from "next/router"

import {Container, Typography, Stack, Button} from "@mui/material"
import {makeStyles} from "@mui/styles"

import ImageBox from "components/image-box/ImageBox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type HomeSliderProps = {
    id: string
    title: string
    subTitle: string
    image: string
    url: string
    mobile?: boolean
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
    const {id, title, subTitle, image, url, mobile} = props
    const classes = useStyles()
    const route = useRouter()

    return (
        <div style={{position: "relative"}}>
            <Container maxWidth={mobile ? "sm" : "lg"}>
                <Stack
                    position="absolute"
                    top={mobile ? "48%" : "40%"}
                    zIndex={10}
                    px={mobile ? 2 : 0}
                    fontWeight={800}
                    color="white"
                >
                    <Typography variant={mobile ? "h5" : "h3"} className="pointFont">
                        {title}
                    </Typography>
                    <Typography variant={mobile ? "body1" : "h5"} mt={2}>
                        {subTitle}
                    </Typography>

                    <Button
                        variant="outlined"
                        style={{
                            marginTop: mobile ? 30 : 60,
                            width: mobile ? 150 : 200,
                            height: mobile ? 40 : 50,
                            fontSize: mobile ? 14 : 18,
                            color: "white",
                            border: `${mobile ? 1 : 2}px solid white`,
                        }}
                        onClick={() => {
                            route.push("/")
                        }}
                    >
                        자세히 보기
                    </Button>
                </Stack>
            </Container>
            <ImageBox height={mobile ? 700 : 720} src={image} brightness={0.7} />
        </div>
    )
}
