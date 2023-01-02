import React, {useEffect, useState} from "react"
import {useMediaQuery, useTheme} from "@mui/material"

import AppBanner from "./app-banner"
import BestSeller from "./best-seller"
import EventSlider from "./event-slider"
import HomeSlider from "./home-slider"
import NewArrival from "./new-arrival"
import PartnerBenner from "./partner-benner"

export default function Home() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div style={{background: smDown ? "#fff" : "#fafafb", width: "100%"}}>
            {/* 메인 슬라이더 */}
            <HomeSlider isMobile={smDown} />

            {/* 이벤트 영역 (좌:영상, 우:슬라이드) */}
            <EventSlider isMobile={smDown} />

            {/* <AppBanner isMobile={smDown} /> */}

            {smDown ? (
                <>
                    {/* 베스트 셀러 */}
                    <BestSeller isMobile={smDown} />

                    {/* 신상품 */}
                    <NewArrival isMobile={smDown} />
                </>
            ) : (
                <div
                    style={{
                        backgroundImage: "url('/images/background.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                        maxWidth: 1920,
                        margin: "0 auto",
                    }}
                >
                    {/* 베스트 셀러 */}
                    <BestSeller isMobile={smDown} />

                    {/* 신상품 */}
                    <NewArrival isMobile={smDown} />
                </div>
            )}

            {/* 파트너사 */}
            {smDown ? undefined : <PartnerBenner />}
        </div>
    )
}
