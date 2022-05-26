import React, {useState} from "react"
import {keyframes} from "styled-components"

import {Container, Link, Stack, Typography, useTheme, Zoom} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"
import {fakeNewArrivalData} from "components/fake-data/fake-event"

const fadeIn = keyframes`
    0% {
        transform: translateX(50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    `

export default function NewArrival() {
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
                        bgcolor="#fff"
                        px={4}
                        py={1}
                        borderRadius={10}
                    >
                        <Typography fontSize={20} color={theme.palette.primary.dark} className="pointFont">
                            #최근 출시한 신작소개
                        </Typography>
                    </Stack>
                    <ImageBox
                        width="100%"
                        height="100%"
                        src={fakeNewArrivalData[hover].image}
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
                    {fakeNewArrivalData.map((itm, idx) => {
                        const hovering = hover === idx
                        return (
                            <Stack width={350} pt={2} onMouseEnter={e => setHover(idx)} key={itm.id}>
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
                                    {`0${idx + 1} `}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    fontWeight={800}
                                    fontSize={18}
                                    color={hovering ? "#222" : "#999"}
                                >
                                    {itm.title}
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
