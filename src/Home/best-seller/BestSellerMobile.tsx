import React, {useState} from "react"

import {Container, Grid, Stack, Typography} from "@mui/material"
import {useTheme} from "@mui/system"
import useStyles from "./styles"
import ImageBox from "components/image-box/ImageBox"

export default function BestSellerMobile() {
    const theme = useTheme()
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
        <Container maxWidth="sm" sx={{mt: 4, mb: 30}}>
            <Stack bgcolor="#fff" borderRadius="20px" p={2} py={4}>
                <Typography
                    className="pointFont"
                    color={theme.palette.primary.dark}
                    variant="h5"
                    fontWeight={800}
                    mt={2}
                >
                    #이 달의 인기 상품
                </Typography>
                <Typography color={theme.palette.primary.dark} variant="body1" fontWeight={300}>
                    가장 인기 있었던 최고의 상품을 만나보세요!
                </Typography>

                <Grid container alignItems="center" mt={2}>
                    {fakeBestSeller.map((itm, idx) => {
                        return (
                            <Grid
                                item
                                xs={6}
                                key={"grid" + idx}
                                sx={{
                                    mb: 1,
                                    alignItems: "center",
                                    textAlign: "center",
                                    border: "1px solid white",
                                }}
                                onClick={() => {}}
                            >
                                <div
                                    style={{
                                        height: "150px",
                                        position: "relative",
                                        borderRadius: 20,
                                    }}
                                >
                                    <ImageBox
                                        height="100%"
                                        src={itm.image}
                                        style={{
                                            borderTopLeftRadius: idx === 0 ? 20 : 0,
                                            borderTopRightRadius: idx === 1 ? 20 : 0,
                                            borderBottomLeftRadius: idx === 4 ? 20 : 0,
                                            borderBottomRightRadius: idx === 5 ? 20 : 0,
                                        }}
                                    />
                                </div>
                                <Stack mt={1} px={1} direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography className={classes.titleMobile}>{itm.title}</Typography>
                                    <Typography className={classes.priceMobile}>
                                        {itm.price.toLocaleString("ko")}원
                                    </Typography>
                                </Stack>
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
        </Container>
    )
}
