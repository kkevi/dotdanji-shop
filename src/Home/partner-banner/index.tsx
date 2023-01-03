import {Container, Stack} from "@mui/material"

import ImageBox from "src/Components/image-box/ImageBox"
import React from "react"

export default function PartnerBanner() {
    return (
        <div
            style={{
                width: "100%",
                maxHeight: 150,
                backgroundColor: "#E6E7EB",
                padding: "50px 0",
            }}
        >
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <ImageBox src="/images/logo2.png" height={40} width={150} />
                    <ImageBox src="/images/logo-illuni.png" height={70} width={150} contain />
                    <ImageBox src="/images/logo-imuz.png" height={25} width={150} contain />
                </Stack>
            </Container>
        </div>
    )
}
