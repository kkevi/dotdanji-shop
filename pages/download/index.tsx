import React from "react"
import {Container, Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import ImageBox from "src/Components/image-box/ImageBox"
import {useRouter} from "next/router"

export default function Index() {
    const route = useRouter()

    return (
        <MainLayout>
            <Stack pt={13.5}>
                <Container maxWidth="sm" sx={{position: "relative"}}>
                    <ImageBox height={1000} src="/images/banner3-mobile-white.png" />
                    <Stack
                        position="absolute"
                        justifyContent="center"
                        alignItems="center"
                        alignSelf="flex-end"
                        width={"280px"}
                        top={"55%"}
                        right={170}
                    >
                        <ImageBox
                            height="110px"
                            src={"/images/banner3-google.png"}
                            style={{marginBottom: 80, cursor: "pointer"}}
                            onClick={() =>
                                route.push("https://play.google.com/store/apps/details?id=com.illuni.Storyself")
                            }
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
            </Stack>
        </MainLayout>
    )
}
