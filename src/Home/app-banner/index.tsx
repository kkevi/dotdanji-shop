import React from "react"
import {useRouter} from "next/router"

import {Container, Stack} from "@mui/material"
import ImageBox from "src/Components/image-box/ImageBox"

type AppBannerProps = {
    isMobile: boolean
}

export default function AppBanner({isMobile}: AppBannerProps) {
    const route = useRouter()

    return (
        <Container
            maxWidth={isMobile ? "sm" : "lg"}
            sx={{
                position: "relative",
            }}
        >
            {!isMobile && (
                <ImageBox
                    height="400px"
                    src="/images/banner3.png"
                    style={{
                        borderRadius: 20,
                        marginTop: 100,
                        marginBottom: -80,
                    }}
                />
            )}
            <Stack
                position="absolute"
                justifyContent="center"
                alignItems="center"
                alignSelf="flex-end"
                width={"280px"}
                top={50}
                right={80}
            >
                <ImageBox
                    height="110px"
                    src={"/images/banner3-google.png"}
                    style={{marginBottom: 80, cursor: "pointer"}}
                    onClick={() => route.push("https://play.google.com/store/apps/details?id=com.illuni.Storyself")}
                />

                <ImageBox
                    height="110px"
                    src={"/images/banner3-apple.png"}
                    style={{cursor: "pointer"}}
                    onClick={() =>
                        route.push(
                            "https://apps.apple.com/kr/app/%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%85%80%ED%94%84/id1567032153",
                        )
                    }
                />
            </Stack>
        </Container>
    )
}
