import React from "react"
import Slider from "react-slick"
import {Container, Typography, Stack} from "@mui/material"

import HomeSlider from "./home-slider/HomeSlider"
import HomeVideo from "./home-video/HomeVideo"
import VerticalSlider from "./vertical-slider/VerticalSlider"
import NewArrival from "./new-arrival/NewArrival"
import BestSeller from "./best-seller/BestSeller"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {sliderSettings} from "./sliderSetting"
import {useTheme} from "@mui/system"
import ImageBox from "Component/image-box/ImageBox"
import {fakeHomeSliderData, fakeVerticalData} from "Component/fake-data/fake-event"

export default function Home() {
    const theme = useTheme()

    return (
        <div style={{background: "#F4F5F7"}}>
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
                    />
                ))}
            </Slider>

            {/* 상단메인 */}
            <Container maxWidth="lg">
                <Typography
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                    variant="h4"
                    mt={10}
                    fontWeight={800}
                >
                    # 우리 아이가 좋아하는 이야기
                </Typography>
                <Stack mt={2} mb={6} direction="row" justifyContent="space-between" position="relative">
                    {/* 메인 비디오 재생 */}
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
                                />
                            ))}
                        </Slider>
                    </div>
                </Stack>
            </Container>

            {/* 베스트 셀러 */}
            <BestSeller />

            {/* 신상품 */}
            <NewArrival />

            <div
                style={{
                    width: "100%",
                    maxHeight: 150,
                    backgroundColor: "#E6E7EB",
                    padding: "50px 0",
                }}
            >
                <Container maxWidth="lg">
                    <Stack direction="row" justifyContent="space-around" alignItems="center">
                        <ImageBox src="/images/logo2.png" height={40} width={150} />
                        <ImageBox src="/images/logo2.png" height={40} width={150} />
                        <ImageBox src="/images/logo2.png" height={40} width={150} />
                        <ImageBox src="/images/logo2.png" height={40} width={150} />
                        <ImageBox src="/images/logo2.png" height={40} width={150} />
                    </Stack>
                </Container>
            </div>
        </div>
    )
}
