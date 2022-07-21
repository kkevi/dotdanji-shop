import React from "react"

import {Container, Grid, Stack, Typography, useTheme} from "@mui/material"

import useStyles from "./styles"
import ImageBox from "components/image-box/ImageBox"
import {GoodsItemType} from "types/goods-type"
import {useRouter} from "next/router"

type Props = {
    bestSellerList: GoodsItemType[]
}

export default function BestSellerMobile(props: Props) {
    const {bestSellerList} = props
    const theme = useTheme()
    const classes = useStyles()
    const route = useRouter()

    return (
        <Container maxWidth="sm" sx={{mt: 4}}>
            <Stack bgcolor="#fff" borderRadius="20px" p={2} py={4}>
                <Typography className="pointFont" color={theme.palette.secondary.dark} fontSize={22} mt={2}>
                    #이 달의 인기 상품
                </Typography>
                <Typography color="#bbb" fontSize={14} fontWeight={300}>
                    가장 인기 있었던 최고의 상품을 만나보세요!
                </Typography>

                <Grid container alignItems="center" mt={2}>
                    {bestSellerList.map((goods, index) => {
                        return (
                            <Grid
                                item
                                xs={6}
                                key={`best-seller-grid${goods.productId}`}
                                sx={{
                                    mb: 1,
                                    alignItems: "center",
                                    textAlign: "center",
                                    border: "1px solid white",
                                }}
                                onClick={() => route.push({pathname: `/goods/detail`, query: goods.productId})}
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
                                        src={JSON.parse(goods.detailThumbnails).images[0]}
                                        style={{
                                            borderTopLeftRadius: index === 0 ? 20 : 0,
                                            borderTopRightRadius: index === 1 ? 20 : 0,
                                            borderBottomLeftRadius: index === 4 ? 20 : 0,
                                            borderBottomRightRadius: index === 5 ? 20 : 0,
                                        }}
                                    />
                                </div>
                                <Stack mt={1} px={1} direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography className={classes.titleMobile}>{goods.name}</Typography>
                                    <Typography className={classes.priceMobile}>
                                        {goods.price.toLocaleString("ko")}원
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
