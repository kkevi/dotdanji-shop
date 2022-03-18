import React, {useState} from "react"
import {Container, Typography, Stack, Link} from "@mui/material"
import {useTheme} from "@mui/system"

import ImageBox from "Components/image-box/ImageBox"

export default function NewArrival() {
    const theme = useTheme()

    const [hover, setHover] = useState(0)

    const fakeNewArrivalData = [
        {
            id: "newArrival1",
            title: "스위스 전래 동화를 읽으며 배우는 배려심",
            image: "/images/fake/little-prince.png",
        },
        {
            id: "newArrival2",
            title: "거짓말을 많이 하면 코가 길어진다고?!",
            image: "/images/fake/pinokio.png",
        },
        {
            id: "newArrival3",
            title: "해님과 달님, 그리고 나",
            image: "/images/fake/sun-moon.png",
        },
        {
            id: "newArrival4",
            title: "호두까끼 인형의 저주",
            image: "/images/fake/walnut.png",
        },
    ]

    return (
        <Container maxWidth="xl" style={{backgroundColor: "white"}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" height={600} mt={20}>
                <ImageBox width={1000} height={600} src={fakeNewArrivalData[hover].image} />
                <Stack
                    width={450}
                    height={600}
                    justifyContent="center"
                    padding="0 50px"
                    style={{border: `2px solid ${theme.palette.primary.light}`}}
                >
                    <Stack height={400} justifyContent="space-between">
                        {fakeNewArrivalData.map((itm, idx) => {
                            const hovering = hover === idx
                            return (
                                <div onMouseEnter={e => setHover(idx)} key={itm.id}>
                                    <Stack
                                        width={350}
                                        style={{borderTop: `2px solid ${theme.palette.primary.light}`, paddingTop: 16}}
                                    >
                                        <Typography variant="h6" fontWeight={800} fontSize={18}>
                                            {`0${idx + 1}. `}
                                            {itm.title}
                                        </Typography>
                                        {hovering ? (
                                            <Link
                                                mt={1}
                                                variant="caption"
                                                href="#"
                                                underline="none"
                                                fontWeight={800}
                                                color={theme.palette.primary.light}
                                            >
                                                읽으러 가기
                                            </Link>
                                        ) : undefined}
                                    </Stack>
                                </div>
                            )
                        })}
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}
