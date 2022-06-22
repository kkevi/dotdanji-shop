import React, {useState} from "react"

import useStyles from "./styles"

import {Container, Stack, useMediaQuery, useTheme} from "@mui/material"

import InitialStep from "./components/InitialStep"
import Steps from "./components/Steps"
import ReserachStep from "./components/ReserachStep"
import ResultStep from "./components/ResultStep"

export default function KidsBTI() {
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    const [step, setStep] = useState<number>(-1)
    const [progress, setProgress] = useState<number>(0)

    const testSheets = [
        "질문입니다. 당신의 평소 언어 습관을 고르세요!0",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!1",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!2",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!3",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!4",
    ]

    return (
        <Stack
            sx={{
                backgroundColor: step > testSheets.length ? "rgba(208, 235, 245, 0.5)" : "white",
            }}
        >
            {step < testSheets.length && (
                <Container maxWidth={mobile ? "xs" : "sm"} className={classes.container}>
                    {step === -1 && <InitialStep setStep={setStep} />}
                    {step > -1 && step < testSheets.length && (
                        <Steps
                            question={testSheets[step]}
                            questionLength={testSheets.length}
                            progress={progress}
                            setProgress={setProgress}
                            setStep={setStep}
                        />
                    )}
                    {step === testSheets.length && <ReserachStep mobile={mobile} setStep={setStep} />}
                </Container>
            )}

            {step > testSheets.length && <ResultStep mobile={mobile} />}
        </Stack>
    )
}
