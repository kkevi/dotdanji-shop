import React from "react"
import {useRouter} from "next/router"

import {Stack} from "@mui/material"
import ImageBox from "components/image-box/ImageBox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type Props = {
    title: string
    subTitle: string
    image: string
    imageMobile: string
    backgroundColor: string[]
    url: string
    mobile: boolean
}

export default function HomeSliderItem(props: Props) {
    const {title, subTitle, image, imageMobile, backgroundColor, url, mobile} = props
    const route = useRouter()

    return (
        <Stack style={{position: "relative", backgroundColor: backgroundColor[0]}} alignItems="center">
            {/* <Container maxWidth={mobile ? "sm" : "lg"}>
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

                    <CustomedButton
                        src="/icons/buttonLayout-white.png"
                        width={mobile ? 150 : 200}
                        buttonHeight={mobile ? 50 : 60}
                        buttonStyle={{marginTop: 4}}
                        text="자세히 보기"
                        textColor="white"
                        textSize={mobile ? 14 : 18}
                        onClick={() => {
                            window.open(url, "")
                        }}
                    />
                </Stack>
            </Container> */}
            <ImageBox
                width={mobile ? 390 : "100%"}
                height={mobile ? 700 : 720}
                style={{maxWidth: mobile ? 640 : 1920}}
                src={mobile ? imageMobile : image}
            />
        </Stack>
    )
}
