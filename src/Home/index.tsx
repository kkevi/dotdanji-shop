import React from "react"
import {useTheme, useMediaQuery} from "@mui/material"

import HomeSlider from "./home-slider"
import EventSlider from "./event-slider"
import NewArrival from "./new-arrival"
import BestSeller from "./best-seller"
import PartnerBenner from "./partner-benner"

export default function Home() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div style={{background: "#F4F5F7", width: "100%"}}>
            {/* 메인 슬라이더 */}
            <HomeSlider />

            {/* 이벤트 영역 (좌:영상, 우:슬라이드) */}
            <EventSlider isMobile={smDown} />

            {/* 베스트 셀러 */}
            <BestSeller isMobile={smDown} />

            {/* 신상품 */}
            <NewArrival isMobile={smDown} />

            {/* 파트너사 */}
            <PartnerBenner />
        </div>
    )
}
