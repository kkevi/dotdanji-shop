import React, {useState} from "react"
import {useRouter} from "next/router"

import {Button, Container, Grid, Stack, Typography, useTheme} from "@mui/material"
import useStyles from "./styles"

import ImageBox from "components/image-box/ImageBox"
import CustomedButton from "components/customed-button/CustomedButton"

import {ProductItemType} from "types/product-type"

type Props = {
    bestSellerList: ProductItemType[]
}

export default function BestSellerWeb(props: Props) {
    const {bestSellerList} = props
    const theme = useTheme()
    const route = useRouter()
    const classes = useStyles()
    const [hover, setHover] = useState(-1)

    return (
        <Container maxWidth="lg" sx={{mt: 24, mb: 30}}>
            <Stack height={570} direction="row" bgcolor="#fff" borderRadius="20px" sx={{position: "relative"}}>
                <Stack width="30%" px={4} justifyContent="center">
                    <div className={classes.bombomImage}>
                        <ImageBox src="/images/sticker/bombom.png" height={125} width={185} />
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
                            <Grid
                                item
                                xs={4}
                                key={index}
                                height="50%"
                                sx={{
                                    borderTopRightRadius: index === 2 ? 20 : 0,
                                    borderBottomRightRadius: index === 5 ? 20 : 0,
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    className={classes.oneGoods}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(-1)}
                                    onClick={() => route.push({pathname: `/product/detail`, query: goods.productId})}
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
                                    <ImageBox height="100%" src={goods.listThumbnail} />
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>

                <div className={classes.starfishImage}>
                    <ImageBox src="/images/sticker/starfish.png" height={115} width={120} />
                </div>
            </Stack>
        </Container>
    )
}
