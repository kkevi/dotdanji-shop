import React from "react"
import {useRouter} from "next/router"

import {Container, Typography, Stack} from "@mui/material"
import ImageBox from "components/image-box/ImageBox"
import useStyles from "./styles"

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
    const classes = useStyles()

    return (
        <div style={{position: "relative"}}>
            <Container maxWidth={mobile ? "sm" : "lg"}>
                <Stack
                    position="absolute"
                    top={mobile ? "48%" : "52%"}
                    zIndex={10}
                    px={mobile ? 2 : 0}
                    fontWeight={800}
                    color="white"
                >
                    <Typography fontSize={mobile ? 20 : 38} className="pointFont">
                        {title}
                    </Typography>
                    <Typography fontSize={mobile ? 16 : 20} mt={0.8}>
                        {subTitle}
                    </Typography>

                    <Stack
                        sx={{marginTop: 4, width: mobile ? 150 : 200}}
                        className={classes.button}
                        onClick={() => {
                            window.open(url, "")
                        }}
                    >
                        <img
                            src={"/icons/buttonLayout-white.png"}
                            style={{
                                width: mobile ? 150 : 200,
                                height: mobile ? 50 : 60,
                            }}
                        />
                        <Typography sx={{fontSize: mobile ? 14 : 18}} className={`${classes.buttonText} popFont`}>
                            자세히 보기
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
            <ImageBox height={mobile ? 700 : 720} src={image} brightness={0.7} />
        </div>
    )
}
