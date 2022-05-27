import React, {useState} from "react"
import useStyles from "../styles"

import {Typography, Button, LinearProgress} from "@mui/material"

type StepsProps = {
    question: string
    questionLength: number
    progress: number
    setProgress: React.Dispatch<React.SetStateAction<number>>
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Steps(props: StepsProps) {
    const {question, questionLength, progress, setProgress, setStep} = props
    const classes = useStyles()
    const [answers, setAnswers] = useState<number[]>([])

    const answerSheets = [
        {
            value: 0,
            answer: "매우 못함",
        },
        {
            value: 1,
            answer: "못함",
        },
        {
            value: 2,
            answer: "잘함",
        },
        {
            value: 3,
            answer: "잘함",
        },
    ]

    return (
        <>
            <LinearProgress className={classes.progress} variant="determinate" value={progress} />

            <Typography my={5} className={`${classes.title} pointFont`}>
                {question}
            </Typography>

            {answerSheets.map((itm, index) => {
                return (
                    <Button
                        key={`answersheets-${index}`}
                        variant="outlined"
                        className={classes.answerButton}
                        value={itm.value}
                        onClick={e => {
                            const target = e.target as HTMLTextAreaElement
                            setAnswers([...answers, Number(target.value)])
                            setStep(prev => prev + 1)
                            const percentage = 100 / questionLength
                            setProgress(prev => prev + percentage)
                        }}
                    >
                        {itm.answer}
                    </Button>
                )
            })}
        </>
    )
}
