import React, {useState} from "react"
import {useTheme} from "@mui/system"
import useStyles from "./styles"

import {Container, Stack} from "@mui/material"

import InitialStep from "./components/InitialStep"
import Steps from "./components/Steps"
import ReserachStep from "./components/ReserachStep"
import ResultStep from "./components/ResultStep"

export default function KidsBTI() {
    const theme = useTheme()
    const classes = useStyles()

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
            <Container maxWidth="sm" className={classes.container}>
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
                {step === testSheets.length && <ReserachStep setStep={setStep} />}
                {step > testSheets.length && <ResultStep />}
            </Container>
        </Stack>
    )
}
