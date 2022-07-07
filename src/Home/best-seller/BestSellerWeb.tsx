import React, {useState} from "react"
import {useRouter} from "next/router"

import {Container, Grid, Stack, Typography, useTheme} from "@mui/material"
import useStyles from "./styles"

import ImageBox from "components/image-box/ImageBox"
import CustomedButton from "components/customed-button/CustomedButton"

import {GoodsItemType} from "types/goods-type"

type Props = {
    bestSellerList: GoodsItemType[]
}

export default function BestSellerWeb(props: Props) {
    const {bestSellerList} = props
    const theme = useTheme()
    const route = useRouter()
    const classes = useStyles()
    const [hover, setHover] = useState(-1)

    return (
        <Container maxWidth="lg" sx={{my: 30}}>
            <Stack height={570} direction="row" bgcolor="#fff" borderRadius="20px" sx={{position: "relative"}}>
                <Stack width="30%" px={4} justifyContent="center">
                    <div className={classes.bombomImage}>
                        <ImageBox src="/images/bombom1.png" height={125} width={185} />
                    </div>
                    <Typography
                        className="pointFont"
                        color={theme.palette.secondary.dark}
                        fontSize={22}
                        fontWeight={800}
                        mt={2}
                        mb={1}
                    >
                        #이 달의 인기 상품
                    </Typography>
                    <Typography color="#bbb" fontSize={15} fontWeight={800}>
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
                                    onClick={() => route.push({pathname: `/goods/detail`, query: goods.goodsId})}
                                >
                                    <div className={classes.stack} style={{display: hovering ? "flex" : "none"}}>
                                        <Typography className={classes.title}>{goods.name}</Typography>
                                        <Typography mt={1} mb={2} className={classes.price}>
                                            {goods.price.toLocaleString("ko")}원
                                        </Typography>
                                        <CustomedButton
                                            src="/icons/buttonLayout-white.png"
                                            width={115}
                                            buttonHeight={45}
                                            text="자세히 보기"
                                            textColor="white"
                                            textSize={12}
                                            onClick={() => {}}
                                        />
                                    </div>
                                    <ImageBox height="100%" src={goods.thumbnails.images[0]} />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
                <ImageBox
                    src="/images/starfish2.png"
                    height={110}
                    width={120}
                    style={{transform: "rotate(0deg)", position: "absolute", bottom: -160, right: 150}}
                />
            </Stack>
        </Container>
    )
}
