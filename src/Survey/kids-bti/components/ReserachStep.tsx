import React, {useState} from "react"

import useStyles from "../styles"
import {Button, Stack, Typography, useTheme} from "@mui/material"

type ReserachStepProps = {
    mobile: boolean
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function ReserachStep(props: ReserachStepProps) {
    const {mobile, setStep} = props
    const theme = useTheme()
    const classes = useStyles()

    const [gender, setGender] = useState<string>("")
    const [age, setAge] = useState<number>(-1)

    return (
        <>
            <Typography className={`${classes.title} pointFont`}>
                자세한 분석을 위해 아이의 정보를 입력 해주세요.
            </Typography>

            <Typography
                my={5}
                sx={{fontSize: mobile ? "16px !important" : "18px !important"}}
                className={`${classes.score} pointFont`}
            >
                성별
            </Typography>

            <Stack direction="row" width="100%" justifyContent="center" alignItems="center">
                <Button
                    className={classes.contentButton}
                    onClick={() => setGender("female")}
                    sx={{
                        mx: 1,
                        backgroundColor: gender === "female" ? theme.palette.primary.dark : "white",
                        color: gender === "female" ? "white" : theme.palette.primary.dark,
                    }}
                >
                    여자
                </Button>
                <Button
                    className={classes.contentButton}
                    onClick={() => setGender("male")}
                    sx={{
                        mx: 1,
                        backgroundColor: gender === "male" ? theme.palette.primary.dark : "white",
                        color: gender === "male" ? "white" : theme.palette.primary.dark,
                    }}
                >
                    남자
                </Button>
            </Stack>

            <Typography
                my={5}
                sx={{fontSize: mobile ? "16px !important" : "18px !important"}}
                className={`${classes.score} pointFont`}
            >
                나이
            </Typography>

            <Stack direction="row" width="100%" justifyContent="center" alignItems="center">
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(0)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 0 ? theme.palette.primary.dark : "white",
                        color: age === 0 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    0세
                </Button>
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(1)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 1 ? theme.palette.primary.dark : "white",
                        color: age === 1 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    1세
                </Button>
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(2)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 2 ? theme.palette.primary.dark : "white",
                        color: age === 2 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    2세
                </Button>
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(3)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 3 ? theme.palette.primary.dark : "white",
                        color: age === 3 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    3세
                </Button>
            </Stack>
            <Stack mt={2} mb={6} direction="row" width="100%" justifyContent="center" alignItems="center">
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(4)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 4 ? theme.palette.primary.dark : "white",
                        color: age === 4 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    4세
                </Button>
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(5)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 5 ? theme.palette.primary.dark : "white",
                        color: age === 5 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    5세
                </Button>
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(6)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 6 ? theme.palette.primary.dark : "white",
                        color: age === 6 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    6세
                </Button>
                <Button
                    className={classes.contentButton}
                    onClick={() => setAge(7)}
                    sx={{
                        mx: 1,
                        backgroundColor: age === 7 ? theme.palette.primary.dark : "white",
                        color: age === 7 ? "white" : theme.palette.primary.dark,
                    }}
                >
                    7세
                </Button>
            </Stack>

            <Button className={classes.containedButton} onClick={() => setStep(prev => prev + 1)}>
                검사하기
            </Button>
        </>
    )
}
