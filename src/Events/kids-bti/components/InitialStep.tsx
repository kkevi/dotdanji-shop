import React from "react"
import useStyles from "../styles"

import {Typography, Button} from "@mui/material"
import ImageBox from "src/Components/image-box/ImageBox"

type InitialStepProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function InitialStep({setStep}: InitialStepProps) {
    const classes = useStyles()

    return (
        <>
            <ImageBox
                height={"80%"}
                style={{
                    borderRadius: 20,
                }}
                src="/images/illust/dottdanji-illust1.png"
            />
            <Typography mt={5} className={`${classes.title} pointFont`}>
                우리 아이의 언어 발달은 어느정도?
            </Typography>
            <Typography mt={2} className={`${classes.contents}`}>
                한글 공부를 하고 싶은데 어떻게 하지?
            </Typography>
            <Typography className={`${classes.contents}`}>정확히 알아야 정확히 공부한다!</Typography>
            <Typography mb={5} className={`${classes.contents}`}>
                돛단지와 함께 언어 능력을 검사 해보아요.
            </Typography>

            <Button className={classes.containedButton} onClick={() => setStep(prev => prev + 1)}>
                검사하기
            </Button>
            <Typography mt={1} variant="caption">
                본 검사는 검사 외의 다른 용도로 이용되지 않으며 결과를 저장하지 않습니다.
            </Typography>
        </>
    )
}
