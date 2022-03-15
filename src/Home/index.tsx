import React from "react"
import {Container} from "@mui/material"

import HomeSlider from "./home-slider/HomeSlider"

export default function Home() {
    return (
        <div>
            <Container maxWidth="lg" sx={{py: 4}} />
            <HomeSlider />
            {/* <div style={{background: "#bbb", width: "100%", height: "80vh"}} /> */}
        </div>
    )
}
