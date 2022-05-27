import {useState} from "react"
import Slider from "react-slick"
import {FAKE_SLIDER_LIST} from "src/Components/fake-data/fake-home"
import {MainSlideType} from "types/event-type"
import {sliderSetOption} from "../slider-set-option"
import HomeSliderItem from "./HomeSliderItem"

export default function HomeSlider() {
    const [mainSliderList, setMainSliderList] = useState<MainSlideType[]>(FAKE_SLIDER_LIST)

    return (
        <Slider {...sliderSetOption}>
            {mainSliderList.map((itm, index) => (
                <HomeSliderItem
                    key={itm.slideId}
                    title={itm.title}
                    subTitle={itm.subTitle}
                    image={itm.image}
                    url={itm.url}
                />
            ))}
        </Slider>
    )
}
