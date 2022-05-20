import React, {useEffect, useState} from "react"
import {Stack, Container, Typography} from "@mui/material"
import {useRouter} from "next/router"
import {useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import CartSection1 from "./cart-section1"
import CartSection2 from "./cart-section2"
import CartSection3 from "./cart-section3"

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"

export default function Cart() {
    const route = useRouter()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [step, setStep] = useState(0)

    const title = ["장바구니", "주문하기", "주문서 확인"]

    const onChangeNextStep = (index: number) => {
        setStep(index)
    }

    useEffect(() => {
        if (route.query.sectionNum === "1") {
            setStep(1)
        }
    }, [])

    return (
        <Container maxWidth={mobile ? "sm" : "lg"}>
            <Stack sx={{mt: mobile ? 16 : 28, mb: 4}} alignItems="center">
                {mobile ? (
                    <></>
                ) : (
                    <Stack direction="row" justifyContent="space-between" alignSelf="center" alignItems="center" mb={8}>
                        {title.map((itm, idx) => (
                            <Stack key={idx} direction="row" alignItems="center">
                                <Typography
                                    key={idx}
                                    fontSize={18}
                                    fontWeight={700}
                                    color={step === idx ? "black" : "rgba(0, 0, 0, 0.3)"}
                                >
                                    {`0${idx + 1} ${itm}`}
                                </Typography>
                                {title.length - 1 !== idx ? (
                                    <ArrowForwardIosRoundedIcon
                                        fontSize="small"
                                        sx={{color: "rgba(0, 0, 0, 0.2)", mx: 2}}
                                    />
                                ) : null}
                            </Stack>
                        ))}
                    </Stack>
                )}

                {step === 0 && <CartSection1 onChangeNextStep={onChangeNextStep} />}
                {step === 1 && <CartSection2 onChangeNextStep={onChangeNextStep} />}
                {step === 2 && <CartSection3 />}
            </Stack>
        </Container>
    )
}
