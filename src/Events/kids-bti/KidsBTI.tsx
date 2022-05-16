import React, {useState} from "react"
import {useTheme} from "@mui/system"
import useStyles from "./styles"

import {Container} from "@mui/material"

import InitialStep from "./components/initialStep"
import Steps from "./components/Steps"
import ResultStep from "./components/ResultStep"

export default function KidsBTI() {
    const theme = useTheme()
    const classes = useStyles()

    const [step, setStep] = useState<number>(-1)
    const [progress, setProgress] = useState<number>(0)
    const initial = step === -1

    const testSheets = [
        "질문입니다. 당신의 평소 언어 습관을 고르세요!0",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!1",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!2",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!3",
        "질문입니다. 당신의 평소 언어 습관을 고르세요!4",
    ]

    return (
        <Container maxWidth="sm" className={classes.container}>
            {initial && <InitialStep setStep={setStep} />}
            {step > -1 && step < testSheets.length && (
                <Steps
                    question={testSheets[step]}
                    questionLength={testSheets.length}
                    progress={progress}
                    setProgress={setProgress}
                    setStep={setStep}
                />
            )}
            {step === testSheets.length && <ResultStep />}
        </Container>
    )
}
