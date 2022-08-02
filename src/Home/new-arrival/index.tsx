import {useState} from "react"
import {NewsType} from "types/news-type"
import NewArrivalMobile from "./NewArrivalMobile"
import NewArrivalWeb from "./NewArrivalWeb"

type Props = {
    isMobile: boolean
}

export default function NewArrival(props: Props) {
    const {isMobile} = props
    const [newArrivalList, setNewArrivalList] = useState<NewsType[]>([
        {
            thumbnails: "",
            title: "돛단지의 캡틴, 고미! 드디어 인형으로 출시",
            url: "/",
        },
        {
            thumbnails: "",
            title: "돛단지를 구독하고 싶으시다구요?",
            url: "/",
        },
        {
            thumbnails: "/images/banner-webtoon.png",
            title: "귀여운 돛단지 해적단을 만화로 감상해요.",
            url: "https://instagram.com/__simkids?igshid=YmMyMTA2M2Y=",
        },
        {
            thumbnails: "/images/photo/simbaat-photo.png",
            // thumbnails: "",
            title: "아이들과 함께 하고 싶은 심바트",
            url: "https://simbaat.com/",
        },
    ])

    return (
        <>
            {isMobile ? (
                <NewArrivalMobile newArrivalList={newArrivalList} />
            ) : (
                <NewArrivalWeb newArrivalList={newArrivalList} />
            )}
        </>
    )
}
