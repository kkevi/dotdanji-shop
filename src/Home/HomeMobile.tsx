import React from "react"
import Slider from "react-slick"
import {Container, Typography, Stack} from "@mui/material"

import HomeSlider from "./home-slider/HomeSlider"
import HomeVideo from "./home-video/HomeVideo"
import VerticalSlider from "./vertical-slider/VerticalSlider"
import NewArrivalMobile from "./new-arrival/NewArrivalMobile"
import BestSellerMobile from "./best-seller/BestSellerMobile"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {sliderSettings} from "./sliderSetting"
import {useTheme} from "@mui/system"
import {fakeHomeSliderData, fakeVerticalData, fakeNewArrivalData} from "components/fake-data/fake-event"

export default function HomeMobile() {
    const theme = useTheme()

    return (
        <div>
            {/* 메인 슬라이더 */}
            <Slider {...sliderSettings}>
                {fakeHomeSliderData.map((itm, idx) => (
                    <HomeSlider
                        key={itm.id}
                        id={itm.id}
                        title={itm.title}
                        subTitle={itm.subTitle}
                        image={itm.image}
                        url={itm.url}
                        mobile
                    />
                ))}
            </Slider>

            {/* 상단메인 */}
            {/* 우측 세로 슬라이더 (이벤트) */}
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
                        <Slider {...sliderSettings}>
                            {fakeVerticalData.map((itm, idx) => (
                                <VerticalSlider
                                    key={itm.eventId}
                                    eventId={itm.eventId}
                                    title={itm.title}
                                    startDate={itm.startDate}
                                    endDate={itm.endDate}
                                    caption={itm.caption}
                                    image={itm.image}
                                    url={itm.url}
                                    mobile
                                />
                            ))}
                        </Slider>
                    </div>
                </Stack>
            </Stack>

            {/* 베스트 셀러 */}
            <BestSellerMobile />

            {/* 신상품 */}
            <Typography
                color={theme.palette.primary.dark}
                className="pointFont"
                variant="h5"
                sx={{
                    mt: 4,
                    mb: 2,
                    ml: 4,
                    alignSelf: "flex-start",
                }}
            >
                #최근 출시한 신작소개
            </Typography>
            <Slider {...sliderSettings}>
                {fakeNewArrivalData.map((itm, idx) => {
                    return <NewArrivalMobile idx={idx} id={itm.id} title={itm.title} image={itm.image} />
                })}
            </Slider>
        </div>
    )
}
