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
import useStyles from "./styles"

type Props = {
    eventList: EventType[]
}

//현재 진행중인 이벤트만 표시 필요
export default function EventSliderWeb(props: Props) {
    const {eventList} = props
    const route = useRouter()
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Stack mt={2} mb={6} direction="column" justifyContent="space-between" position="relative">
                <Typography
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                    variant="h4"
                    mt={10}
                    mb={2}
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
                        {eventList.map((event, index) => (
                            <div key={`home-event-${event.eventId}`}>
                                <Stack
                                    sx={{
                                        height: 300,
                                        backgroundColor: "#fff",
                                        padding: 3,
                                    }}
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                >
                                    <Stack>
                                        <Typography className="pointFont" mt={2} fontWeight={800} fontSize={19}>
                                            {event.title}
                                        </Typography>
                                        <Typography mt={1} fontWeight={800} fontSize={14} color="#bbb">
                                            {event.startDate} - {event.endDate}
                                        </Typography>
                                        <Typography mt={3} fontWeight={300} fontSize={15} color="#777">
                                            {event.homeCaption}
                                        </Typography>
                                    </Stack>

                                    <Stack
                                        sx={{marginTop: 4, width: 120}}
                                        className={classes.button}
                                        onClick={() =>
                                            route.push({
                                                pathname: "/service/detail/event",
                                                query: {eventId: event.eventId},
                                            })
                                        }
                                    >
                                        <img
                                            src={"/icons/buttonLayout-grey.png"}
                                            style={{
                                                width: 120,
                                                height: 40,
                                            }}
                                        />
                                        <Typography
                                            fontSize={14}
                                            color="#777"
                                            className={`${classes.buttonText} popFont`}
                                        >
                                            확인하기
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <div style={{height: 350, backgroundColor: "pink"}}>
                                    <ImageBox height={350} src={event.homeImageUrl} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Stack>
        </Container>
    )
}
