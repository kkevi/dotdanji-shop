import React from "react"
import Slider from "react-slick"
import {Container, Typography, Stack} from "@mui/material"

import ImageBox from "Components/ImageBox"
import HomeSlider from "./home-slider/HomeSlider"
import HomeVideo from "./home-video/HomeVideo"
import VerticalSlider from "./vertical-slider/VerticalSlider"
import NewArrival from "./new-arrival/NewArrival"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {sliderSettings} from "./sliderSetting"

export default function Home() {
    const fakeVerticalData = [
        {
            id: "vertical0",
            title: "어린 왕자",
            author: "원작 생텍쥐페리⎟글 조가비⎟그림 안지현",
            content: "엇쩌고저쩌고 블라블라",
            image: "/images/fake/little-prince.png",
            url: "",
        },

        {
            id: "vertical1",
            title: "피노키오",
            author: "원작 카를로 콜로디⎟글 박병화⎟그림 송현정",
            content: "엇쩌고저쩌고 블라블라",
            image: "/images/fake/pinokio.png",
            url: "",
        },

        {
            id: "vertical2",
            title: "해님 달님",
            author: "전래동화⎟글・그림 조가비",
            content: "엇쩌고저쩌고 블라블라",
            image: "/images/fake/sun-moon.png",
            url: "",
        },
        {
            id: "vertical3",
            title: "골디락스와 세 마리 곰",
            author: "영국 민담⎟글・그림 조가비",
            content: "엇쩌고저쩌고 블라블라",
            image: "/images/fake/three-bears.png",
            url: "",
        },
        {
            id: "vertical4",
            title: "호두까끼 인형",
            author: "원작 E.T.A호프만 글 조가비⎟그림 안지현",
            content: "엇쩌고저쩌고 블라블라",
            image: "/images/fake/walnut.png",
            url: "",
        },
    ]

    const fakeHomeSliderData = [
        {
            id: "homeslider1",
            title: "우리 아이 얼굴이 나오는 동화책",
            subTitle: "최첨단 얼굴인식 AI로 흥미롭고 재미있게!",
            image: "/images/fake/home-slider1.jpeg",
            url: "",
        },
        {
            id: "homeslider2",
            title: "언어 발달을 도와주는 혁신적인 아이콘!",
            subTitle: "전문가와 함께 하는 검증된 교육",
            image: "/images/fake/home-slider2.png",
            url: "",
        },
        {
            id: "homeslider3",
            title: "스토리셀프 구독 시 첫 달 무료",
            subTitle: "1년 구독시 99,000원에 파격 세일",
            image: "/images/fake/home-slider3.jpeg",
            url: "",
        },
    ]

    return (
        <div>
            {/* 메인 슬라이더 */}
            <Slider {...sliderSettings}>
                {fakeHomeSliderData.map((itm, idx) => {
                    return (
                        <HomeSlider
                            id={itm.id}
                            title={itm.title}
                            subTitle={itm.subTitle}
                            image={itm.image}
                            url={itm.url}
                        />
                    )
                })}
            </Slider>

            {/* 상단메인 */}
            <Container maxWidth="lg">
                <Typography variant="h4" mt={10} fontWeight={800}>
                    # 우리 아이가 좋아하는 이야기
                </Typography>
                <Stack mt={2} mb={6} direction="row" justifyContent="space-between" position="relative">
                    {/* 메인 비디오 재생 */}
                    <div style={{width: 850, height: 450}}>
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
                        }}
                    >
                        <Slider {...sliderSettings}>
                            {fakeVerticalData.map((itm, idx) => {
                                return (
                                    <VerticalSlider
                                        id={itm.id}
                                        title={itm.title}
                                        author={itm.author}
                                        content={itm.content}
                                        image={itm.image}
                                        url={itm.url}
                                    />
                                )
                            })}
                        </Slider>
                    </div>
                </Stack>
            </Container>

            {/* 신상품 */}
            <NewArrival />

            {/* 베스트 셀러 */}
            <Container maxWidth="lg">
                <Typography variant="h4" mt={20} fontWeight={800}>
                    이 달의 베스트 셀러
                </Typography>
                {/* <Stack mt={2} mb={6} direction="row" justifyContent="space-between" position="relative">

                </Stack> */}
            </Container>

            {/* <Container maxWidth="xl">
                <Stack style={{backgroundColor: "tomato", height: 560}} justifyContent="space-between" direction="row">
                    <div style={{flex: 1.2}}>
                        <ImageBox height={560} src="/images/fake/home-slider1.jpeg" />
                    </div>
                    <Stack style={{backgroundColor: "blue", flex: 0.8, height: 560}}>
                        <div style={{backgroundColor: "red", height: 220}} />
                    </Stack>
                </Stack>
            </Container> */}
        </div>
    )
}
