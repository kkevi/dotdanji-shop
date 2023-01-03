import {Container, Grid, Stack, Typography, useTheme} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"
import {ProductItemType} from "types/product-type"
import React from "react"
import {useRouter} from "next/router"
import useStyles from "./styles"

type Props = {
    bestSellerList: ProductItemType[]
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
                        let str = goods.name
                        if (goods.name.length > 12) {
                            str = str.substring(0, 12 - 2) + "..."
                        }

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
                                onClick={() =>
                                    route.push({pathname: "/product/detail", query: {productId: goods.productId}})
                                }
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
                                        src={goods.listThumbnail}
                                        style={{
                                            borderTopLeftRadius: index === 0 ? 20 : 0,
                                            borderTopRightRadius: index === 1 ? 20 : 0,
                                            borderBottomLeftRadius: index === 4 ? 20 : 0,
                                            borderBottomRightRadius: index === 5 ? 20 : 0,
                                        }}
                                    />
                                </div>
                                <Stack mt={1} px={1} justifyContent="space-between" alignItems="flex-start">
                                    <Typography className={classes.titleMobile}>{str}</Typography>
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
