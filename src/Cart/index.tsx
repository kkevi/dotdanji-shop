import React from "react"

import {Stack, Container, Typography} from "@mui/material"

import CartSection1 from "./cart-section1/CartSection1"

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"

export default function Cart() {
    return (
        <Container maxWidth="lg" sx={{backgroundColor: "aliceblue"}}>
            <Stack sx={{mt: 28, mb: 4}} alignItems="center">
                <Typography mb={4} variant="h4" fontWeight={700}>
                    장바구니
                </Typography>
                <Stack
                    width="40%"
                    direction="row"
                    justifyContent="space-between"
                    alignSelf="center"
                    alignItems="center"
                    mb={8}
                >
                    <Typography variant="h6" fontWeight={700}>
                        01 내 장바구니
                    </Typography>
                    <ArrowForwardIosRoundedIcon />
                    <Typography variant="h6" fontWeight={700}>
                        02 주문하기
                    </Typography>
                    <ArrowForwardIosRoundedIcon />
                    <Typography variant="h6" fontWeight={700}>
                        03 주문서 확인
                    </Typography>
                </Stack>

                <CartSection1 />
            </Stack>
        </Container>
    )
}
