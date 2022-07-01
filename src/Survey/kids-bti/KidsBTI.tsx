import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"

import useStyles from "./styles"
import {Container, Stack} from "@mui/material"

import InitialStep from "./components/InitialStep"
import Steps from "./components/Steps"

export default function KidsBTI() {
    const route = useRouter()
    const classes = useStyles()

    const [step, setStep] = useState<number>(-1)
    const [progress, setProgress] = useState<number>(0)
    const [score, setScore] = useState<number[]>([])

    const testSheets = [
        {
            title: "아이가 어른이나 친구를 만나면 먼저 나서서 인사하는 성격인가요?",
            answerSheet: [
                "전혀 그렇지 않음",
                "친구에게만 인사함",
                "친한 사이의 어른/친구에게만 인사함",
                "항상 누구에게나 먼저 인사함",
            ],
        },
        {
            title: "아이가 처음보는 물건에 대해서 호기심이 많은가요?",
            answerSheet: ["무관심함", "경계하거나 신중하게 탐색함", "짧게 호기심을 가짐", "호기심을 가지고 탐구함"],
        },
        {
            title: "아이가 타인의 감정에 잘 공감하나요?",
            answerSheet: [
                "잘 모르는 것 같음",
                "눈치를 봄",
                "감정에 대해서 자주 물어봄",
                "감정에 대해서 함게 느끼는 것으로 보임",
            ],
        },
        {
            title: "우리 아이가 똑똑한 것, 혹은 착한 것 어떻게 성장하길 바라는지?",
            answerSheet: ["매우 착하길 원함", "적당히 착하길 원함", "적당히 똑똑하길 원함", "매우 똑똑하길 원함"],
        },
        {
            title: "학교나 유치원에서 예체능에 대한 칭찬을 받은 적이 있나요?",
            answerSheet: [
                "없거나 기억나지 않음",
                "1회 경험이 있음",
                "매년 경험이 있었음",
                "자주 듣고, 예체능 교육 또한 하고 있음",
            ],
        },
        {
            title: "아이가 친구들과 노는 것을 좋아하나요?",
            answerSheet: [
                "좋아하지 않음",
                "단짝 친구와 가끔 놀러나감",
                "단짝 친구와 자주 놀러나감",
                "여러 친구들과 자주 놀러나감",
            ],
        },
        {
            title: "아이가 다른사람의 칭찬에 크게 반응하나요?",
            answerSheet: ["잘 모르겠음", "선생님의 칭찬에 잘 따름", "부모님 칭찬에 잘 따름", "모두 잘 따름"],
        },
        {
            title: "아이가 어떤 장르의 책을 좋아하나요?",
            answerSheet: ["동화", "신화", "위인전", "공룡 및 과학"],
        },
    ]

    let totalScore: number = 0
    const calScore = async () => {
        score.forEach(itm => {
            totalScore += itm
        })

        switch (totalScore) {
            case 8:
            case 9:
            case 10:
                push("Gandhi")
                break
            case 11:
            case 12:
            case 13:
                push("Nightingale")
                break
            case 14:
            case 15:
            case 16:
                push("Fabre")
                break
            case 17:
            case 18:
            case 19:
                push("Helen")
                break
            case 20:
            case 21:
            case 22:
                push("Wright")
                break
            case 23:
            case 24:
            case 25:
                push("Shakespeare")
                break
            case 26:
            case 27:
            case 28:
                push("Lincoln")
                break
            case 29:
            case 30:
            case 31:
                push("Curie")
                break
            case 32:
                push("daVinci")
                break
            default:
                alert("어떤 값인지 파악이 되지 않습니다.")
        }
    }

    const push = (name: string) => {
        route.push({pathname: "/kids-bti/result", query: {result: name}})
    }

    useEffect(() => {
        if (step >= testSheets.length) {
            calScore()
        }
    }, [step])

    return (
        <Stack sx={{backgroundColor: "white"}}>
            {step < testSheets.length && (
                <Container maxWidth="sm" className={classes.container}>
                    {step === -1 && <InitialStep setStep={setStep} />}
                    {step > -1 && step < testSheets.length && (
                        <Steps
                            question={testSheets[step].title}
                            questionLength={testSheets.length}
                            answerSheet={testSheets[step].answerSheet}
                            progress={progress}
                            score={score}
                            setProgress={setProgress}
                            setStep={setStep}
                            setScore={setScore}
                        />
                    )}
                    {/* {step === testSheets.length && <ReserachStep mobile={mobile} setStep={setStep} />} */}
                </Container>
            )}

            {/* {step >= testSheets.length && <ResultStep mobile />} */}
        </Stack>
    )
}
