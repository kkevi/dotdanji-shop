import React, {useState} from "react"

import {Button, Grid, Stack, Typography} from "@mui/material"
import useStyles from "./styles"

import ImageBox from "Components/image-box/ImageBox"

export default function BestSeller() {
    const [hover, setHover] = useState(-1)
    const classes = useStyles()

    const fakeBestSeller = [
        {
            id: "bestSeller1",
            title: "베스트셀러1",
            price: 10000,
            image: "/images/fake/book-cover1.webp",
        },
        {
            id: "bestSeller2",
            title: "베스트셀러2",
            price: 15000,
            image: "/images/fake/book-cover1.webp",
        },
        {
            id: "bestSeller3",
            title: "베스트셀러3",
            price: 12000,
            image: "/images/fake/book-cover1.webp",
        },
        {
            id: "bestSeller4",
            title: "베스트셀러4",
            price: 20000,
            image: "/images/fake/book-cover1.webp",
        },
        {
            id: "bestSeller5",
            title: "베스트셀러5",
            price: 12000,
            image: "/images/fake/book-cover1.webp",
        },
        {
            id: "bestSeller6",
            title: "베스트셀러6",
            price: 11000,
            image: "/images/fake/book-cover1.webp",
        },
    ]

    return (
        <Stack direction="row" style={{backgroundColor: "white"}}>
            <ImageBox width={430} height={570} src="/images/fake/three-bears.png" />
            <Grid container spacing={2} paddingLeft={2} alignItems="center">
                {fakeBestSeller.map((itm, idx) => {
                    const hovering = hover === idx

                    return (
                        <Grid item xs={4} key={idx}>
                            <div
                                style={{height: 275, position: "relative"}}
                                onMouseEnter={() => setHover(idx)}
                                onMouseLeave={() => setHover(-1)}
                                onClick={() => {}}
                            >
                                <div className={classes.stack} style={{display: hovering ? "flex" : "none"}}>
                                    <Typography className={classes.title}>{itm.title}</Typography>
                                    <Typography mt={1} mb={2} className={classes.price}>
                                        {itm.price.toLocaleString("ko")}원
                                    </Typography>
                                    <Button variant="outlined" className={classes.button}>
                                        자세히 보기
                                    </Button>
                                </div>
                                <div style={{padding: 32}}>
                                    <ImageBox height={210} src={itm.image} />
                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </Stack>
    )
}
