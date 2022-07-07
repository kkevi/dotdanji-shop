import React from "react"

import {Stack, Typography, useTheme} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"
import {sliderSetOption} from "../slider-set-option"
import Slider from "react-slick"
import {NewsType} from "types/news-type"

type Props = {
    newArrivalList: NewsType[]
}

export default function NewArrivalMobile(props: Props) {
    const {newArrivalList} = props
    const theme = useTheme()

    return (
        <>
            <Typography
                color={theme.palette.secondary.dark}
                className="pointFont"
                fontSize={22}
                sx={{
                    mt: 4,
                    mb: 2,
                    ml: 4,
                    alignSelf: "flex-start",
                }}
            >
                #돛단지의 따끈따끈 소식
            </Typography>
            <Slider {...sliderSetOption}>
                {newArrivalList.map((goods, index) => (
                    <Stack alignItems="flex-start" mb={4} key={goods.title}>
                        <ImageBox width="100%" height={450} src={goods.thumbnails} />

                        <Typography
                            mt={2}
                            ml={3}
                            fontSize={18}
                            className="pointFont"
                            color={theme.palette.primary.main}
                        >
                            {`0${index + 1} `}
                        </Typography>
                        <Typography ml={3} fontWeight={800} fontSize={18} color="#222">
                            {goods.title}
                        </Typography>
                    </Stack>
                ))}
            </Slider>
        </>
    )
}
