import React, {useState} from "react"

import {Button, Container, Grid, Stack, Typography, useTheme} from "@mui/material"

import useStyles from "./styles"
import ImageBox from "components/image-box/ImageBox"

export default function BestSeller() {
    const theme = useTheme()
    const [hover, setHover] = useState(-1)
    const classes = useStyles()

    const fakeBestSeller = [
        {
            id: "bestSeller1",
            title: "베스트셀러1",
            price: 10000,
            image: "/images/fake/demo-goods-1.png",
        },
        {
            id: "bestSeller2",
            title: "베스트셀러2",
            price: 15000,
            image: "/images/fake/demo-goods-2.png",
        },
        {
            id: "bestSeller3",
            title: "베스트셀러3",
            price: 12000,
            image: "/images/fake/demo-goods-3.png",
        },
        {
            id: "bestSeller4",
            title: "베스트셀러4",
            price: 20000,
            image: "/images/fake/demo-goods-4.png",
        },
        {
            id: "bestSeller5",
            title: "베스트셀러5",
            price: 12000,
            image: "/images/fake/demo-goods-5.png",
        },
        {
            id: "bestSeller6",
            title: "베스트셀러6",
            price: 11000,
            image: "/images/fake/demo-goods-6.png",
        },
    ]

    return (
        <Container maxWidth="lg" sx={{my: 30}}>
            <Stack height={570} direction="row" bgcolor="#fff" borderRadius="20px" overflow="hidden">
                <Stack bgcolor="#fff" width="30%" p={2} justifyContent="center">
                    <ImageBox src="/images/bombom2.png" height={57} width={80} />
                    <Typography
                        className="pointFont"
                        color={theme.palette.primary.dark}
                        fontSize={30}
                        fontWeight={800}
                        my={2}
                    >
                        #이 달의 인기 상품
                    </Typography>
                    <Typography color={theme.palette.primary.dark} variant="body1" fontWeight={300}>
                        가장 인기 있었던 최고의 상품을 만나보세요!
                    </Typography>
                </Stack>

                <Grid container alignItems="center" width="70%">
                    {fakeBestSeller.map((itm, idx) => {
                        const hovering = hover === idx

                        return (
                            <Grid item xs={4} key={idx} height="50%">
                                <div
                                    style={{height: "100%", position: "relative"}}
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
                                    <ImageBox height="100%" src={itm.image} />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
        </Container>
    )
}
