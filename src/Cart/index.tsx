import React, {useState} from "react"
import {Stack, Container, Typography} from "@mui/material"

import CartSection1 from "./cart-section1/CartSection1"

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"

export default function Cart() {
    const [step, setStep] = useState(0)

    const title = ["01 장바구니", "02 주문하기", "03 주문서 확인"]

    return (
        <Container maxWidth="lg">
            <Stack sx={{mt: 28, mb: 4}} alignItems="center">
                <Stack
                    width="35%"
                    direction="row"
                    justifyContent="space-between"
                    alignSelf="center"
                    alignItems="center"
                    mb={8}
                >
                    {title.map((itm, idx) => (
                        <>
                            <Typography
                                fontSize={18}
                                fontWeight={700}
                                color={step === idx ? "black" : "rgba(0, 0, 0, 0.3)"}
                            >
                                {itm}
                            </Typography>
                            {title.length - 1 !== idx ? (
                                <ArrowForwardIosRoundedIcon fontSize="small" sx={{color: "rgba(0, 0, 0, 0.2)"}} />
                            ) : null}
                        </>
                    ))}
                </Stack>

                <CartSection1 setStep={setStep} />
            </Stack>
        </Container>
    )
}
