import React from "react"

import {Button, Container, Stack, Typography} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {EventType} from "types/event-type"
import {useRouter} from "next/router"
import Slider from "react-slick"
import {sliderSetOption} from "../slider-set-option"
import {theme} from "src/styles/theme"
import HomeVideo from "../home-video/HomeVideo"

type Props = {
    eventList: EventType[]
}

//현재 진행중인 이벤트만 표시 필요
export default function EventSliderWeb(props: Props) {
    const {eventList} = props
    const route = useRouter()

    return (
        <Container maxWidth="lg">
            <Stack mt={2} mb={6} direction="column" justifyContent="space-between" position="relative">
                <Typography
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                    variant="h4"
                    mt={10}
                    fontWeight={800}
                >
                    # 우리 아이가 좋아하는 이야기
                </Typography>
                <div style={{width: 850, height: 450, borderRadius: 20, overflow: "hidden"}}>
                    <HomeVideo />
                </div>

                {/* 우측 세로 슬라이더 (이벤트) */}
                <div
                    style={{
                        width: 320,
                        height: 650,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                        borderRadius: 20,
                        overflow: "hidden",
                        borderBottomLeftRadius: 0,
                    }}
                >
                    <Slider {...sliderSetOption}>
                        {eventList.map((eventData, index) => (
                            <>
                                <Stack
                                    sx={{
                                        height: 350,
                                        backgroundColor: "#fff",
                                        padding: 3,
                                    }}
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                >
                                    <Stack>
                                        <Typography className="pointFont" mt={2} fontWeight={800} fontSize={20}>
                                            {eventData.title}
                                        </Typography>
                                        <Typography mt={2} fontWeight={800} fontSize={14} color="#bbb">
                                            {eventData.startDate} - {eventData.endDate}
                                        </Typography>
                                        <Typography mt={4} fontWeight={300} fontSize={15} color="#777">
                                            {eventData.homeCaption}
                                        </Typography>
                                    </Stack>

                                    <Button
                                        color="inherit"
                                        variant="outlined"
                                        sx={{width: 120}}
                                        onClick={() =>
                                            route.push({
                                                pathname: "/service/detail/event",
                                                query: {eventId: eventData.eventId},
                                            })
                                        }
                                    >
                                        확인하기
                                    </Button>
                                </Stack>
                                <div style={{height: 300, backgroundColor: "pink"}}>
                                    <ImageBox height={300} src={eventData.homeImageUrl} />
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
            </Stack>
        </Container>
    )
}