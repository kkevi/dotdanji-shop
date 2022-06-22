import React from "react"
import useStyles from "../styles"

import {Typography, Button, LinearProgress} from "@mui/material"

type StepsProps = {
    question: string
    questionLength: number
    answerSheet: string[]
    progress: number
    score: number[]
    setProgress: React.Dispatch<React.SetStateAction<number>>
    setStep: React.Dispatch<React.SetStateAction<number>>
    setScore: React.Dispatch<React.SetStateAction<number[]>>
}

export default function Steps(props: StepsProps) {
    const {question, questionLength, answerSheet, progress, score, setProgress, setStep, setScore} = props
    const classes = useStyles()

    const answerSheets = [
        {
            value: 1,
            answer: answerSheet[0],
        },
        {
            value: 2,
            answer: answerSheet[1],
        },
        {
            value: 3,
            answer: answerSheet[2],
        },
        {
            value: 4,
            answer: answerSheet[3],
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
                            setScore([...score, Number(target.value)])
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
