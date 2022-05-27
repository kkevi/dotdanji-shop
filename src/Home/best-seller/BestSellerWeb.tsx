import React, {useState} from "react"

import {Button, Container, Grid, Stack, Typography, useTheme} from "@mui/material"

import useStyles from "./styles"
import ImageBox from "components/image-box/ImageBox"
import {GoodsItemType} from "types/goods-type"

type Props = {
    bestSellerList: GoodsItemType[]
}

export default function BestSellerWeb(props: Props) {
    const {bestSellerList} = props
    const theme = useTheme()
    const [hover, setHover] = useState(-1)
    const classes = useStyles()

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
                    {bestSellerList.map((goods, index) => {
                        const hovering = hover === index

                        return (
                            <Grid item xs={4} key={index} height="50%">
                                <div
                                    style={{height: "100%", position: "relative"}}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(-1)}
                                    onClick={() => {}}
                                >
                                    <div className={classes.stack} style={{display: hovering ? "flex" : "none"}}>
                                        <Typography className={classes.title}>{goods.name}</Typography>
                                        <Typography mt={1} mb={2} className={classes.price}>
                                            {goods.price.toLocaleString("ko")}원
                                        </Typography>
                                        <Button variant="outlined" className={classes.button}>
                                            자세히 보기
                                        </Button>
                                    </div>
                                    <ImageBox height="100%" src={goods.thumbnails.images[0]} />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
        </Container>
    )
}
