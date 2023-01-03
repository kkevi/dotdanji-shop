import {FAKE_SLIDER_LIST} from "src/Components/fake-data/fake-home"
import HomeSliderItem from "./HomeSliderItem"
import {MainSlideType} from "types/event-type"
import React from "react"
import Slider from "react-slick"
import {sliderSetOption} from "../slider-set-option"
import {useState} from "react"

type HomeSliderProps = {
    isMobile: boolean
}

export default function HomeSlider({isMobile}: HomeSliderProps) {
    const [mainSliderList, setMainSliderList] = useState<MainSlideType[]>(FAKE_SLIDER_LIST)

    return (
        <Slider {...sliderSetOption}>
            {mainSliderList.map((itm, index) => (
                <HomeSliderItem
                    key={itm.slideId}
                    title={itm.title}
                    subTitle={itm.subTitle}
                    image={itm.image}
                    imageMobile={itm.imageMobile}
                    backgroundColor={itm.imageBackgroundColor}
                    url={itm.url}
                    mobile={isMobile}
                />
            ))}
        </Slider>
    )
}
