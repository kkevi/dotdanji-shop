import React, {useState} from "react"

import {Container, Link, Stack, Typography, useTheme, Zoom} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"
import {GoodsItemType} from "types/goods-type"

type Props = {
    newArrivalList: GoodsItemType[]
}

export default function NewArrivalWeb(props: Props) {
    const {newArrivalList} = props
    const theme = useTheme()
    const [hover, setHover] = useState(0)

    return (
        <Container maxWidth="xl">
            <Stack direction="row" justifyContent="space-between" alignItems="center" height={600} mb={20}>
                {/* 왼쪽 이미지 */}
                <Stack width={1000} height={600} position="relative">
                    <Stack
                        position="absolute"
                        top={-24}
                        left={40}
                        zIndex={2}
                        bgcolor={"#fff"}
                        px={4}
                        py={1}
                        borderRadius={10}
                    >
                        <Typography fontSize={22} color={theme.palette.secondary.dark} className="pointFont">
                            #최근 출시한 신작소개
                        </Typography>
                    </Stack>
                    <ImageBox
                        width="100%"
                        height="100%"
                        src={newArrivalList[hover].thumbnails.images[0]}
                        style={{
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}
                    />
                </Stack>

                {/* 오른쪽 목록 */}
                <Stack
                    width={450}
                    height={600}
                    justifyContent="center"
                    padding="0 50px"
                    bgcolor="#fff"
                    sx={{borderTopRightRadius: 20, borderBottomRightRadius: 20}}
                >
                    {newArrivalList.slice(0, 6).map((goods, index) => {
                        const hovering = hover === index
                        return (
                            <Stack width={350} pt={2} onMouseEnter={e => setHover(index)} key={goods.goodsId}>
                                <Stack
                                    borderTop={hovering ? `3px solid ${theme.palette.primary.main}` : `1px solid #bbb`}
                                    mb={2}
                                    style={{opacity: hovering ? 1 : 0.5}}
                                />
                                <Typography
                                    variant="h6"
                                    fontWeight={800}
                                    fontSize={18}
                                    className="pointFont"
                                    color={hovering ? theme.palette.primary.main : "#ddd"}
                                >
                                    {`0${index + 1} `}
                                </Typography>
                                <Typography fontWeight={800} fontSize={18} color={hovering ? "#222" : "#999"}>
                                    {goods.name}
                                </Typography>
                                {hovering ? (
                                    <Zoom in={hovering}>
                                        <Link
                                            mt={1}
                                            variant="caption"
                                            href="#"
                                            underline="none"
                                            fontWeight={800}
                                            color={theme.palette.primary.main}
                                        >
                                            자세히 보기
                                        </Link>
                                    </Zoom>
                                ) : undefined}
                            </Stack>
                        )
                    })}
                </Stack>
            </Stack>
        </Container>
    )
}
