import React from "react"
import {useRouter} from "next/router"

import {Stack, Typography} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"
import CustomedButton from "components/customed-button/CustomedButton"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {EventType} from "types/event-type"
import Slider from "react-slick"
import {sliderSetOption} from "../slider-set-option"

type Props = {
    eventList: EventType[]
}

//현재 진행중인 이벤트만 표시 필요
export default function EventSliderMobile(props: Props) {
    const {eventList} = props
    const route = useRouter()

    return (
        <Stack maxWidth="sm" position="relative" height={400}>
            <Stack position="absolute" style={{top: -50, left: "10%"}}>
                <div
                    style={{
                        width: 320,
                        height: 450,
                        borderRadius: 20,
                        overflow: "hidden",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <Slider {...sliderSetOption}>
                        {eventList.map((eventData, index) => (
                            <>
                                <Stack
                                    sx={{
                                        height: 260,
                                        backgroundColor: "#fff",
                                        padding: 3,
                                    }}
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                    key={"eventList" + index}
                                >
                                    <Stack>
                                        <Typography className="pointFont" mt={2} fontWeight={800} fontSize={18}>
                                            {eventData.title}
                                        </Typography>
                                        <Typography mt={1} fontWeight={800} fontSize={12} color="#bbb">
                                            {eventData.startDate} - {eventData.endDate}
                                        </Typography>
                                        <Typography mt={2} fontWeight={300} fontSize={14} color="#777">
                                            {eventData.homeCaption}
                                        </Typography>
                                    </Stack>

                                    <CustomedButton
                                        src="/icons/buttonLayout-grey.png"
                                        width={120}
                                        buttonHeight={40}
                                        buttonStyle={{marginTop: 4}}
                                        text="확인하기"
                                        textColor="#777"
                                        textSize={14}
                                        onClick={() =>
                                            route.push({
                                                pathname: "/service/detail/event",
                                                query: {eventId: eventData.eventId},
                                            })
                                        }
                                    />
                                </Stack>
                                <div style={{height: 200, backgroundColor: "pink"}}>
                                    <ImageBox height={200} src={eventData.homeImageUrl} />
                                </div>
                            </>
                        ))}
                    </Slider>
                </div>
            </Stack>
        </Stack>
    )
}
