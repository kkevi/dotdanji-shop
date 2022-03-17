import React, {useState} from "react"

import ImageBox from "Components/image-box/ImageBox"
import {Grid, Stack} from "@mui/material"

export default function BestSeller() {
    const [hover, setHover] = useState(false)

    const TestDiv = () => {
        return (
            <div
                style={{
                    height: 275,
                    padding: 32,
                    // backgroundColor: hover ? "rgba(0,0,0,0.5)" : "none",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <ImageBox height={210} src="/images/fake/book-cover1.webp" />
            </div>
        )
    }

    return (
        <Stack direction="row" style={{backgroundColor: "white"}}>
            <ImageBox width={430} height={570} src="/images/fake/three-bears.png" />
            <Grid container spacing={2} paddingLeft={2} alignItems="center">
                <Grid item xs={4}>
                    <TestDiv />
                </Grid>
                <Grid item xs={4}>
                    <TestDiv />
                </Grid>
                <Grid item xs={4}>
                    <TestDiv />
                </Grid>
                <Grid item xs={4}>
                    <TestDiv />
                </Grid>
                <Grid item xs={4}>
                    <TestDiv />
                </Grid>
                <Grid item xs={4}>
                    <TestDiv />
                </Grid>
            </Grid>
        </Stack>
    )
}
