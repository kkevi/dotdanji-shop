import React from "react"
import {useRouter} from "next/router"

import {Container, Typography, Stack, Button} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type Props = {
    title: string
    subTitle: string
    image: string
    url: string
    mobile: boolean
}

export default function HomeSliderItem(props: Props) {
    const {title, subTitle, image, url, mobile} = props
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

                    {/* <img
                                        // className={classes.buttonLayout}
                                        src={"/icons/buttonLayout.png"}
                                        style={{height: 50, position: "absolute"}}
                                        alt=""
                                        onClick={() => route.push("/")}
                                    /> */}
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
                            window.open(url, "")
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
