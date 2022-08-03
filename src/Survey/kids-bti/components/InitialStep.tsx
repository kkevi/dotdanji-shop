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
            <ImageBox height={"80%"} style={{borderRadius: 20}} src="/images/illust/dottdanji-illust2.png" />
            <Typography mt={5} className={`${classes.title} pointFont`}>
                우리 아이는 어떤 위인으로 클까?
            </Typography>
            <Typography mt={2} className={`${classes.contents}`}>
                현재 우리 아이가 미래에 어떤 모습으로 클까요?
            </Typography>
            <Typography className={`${classes.contents}`}>
                어떠한 교육방향으로 나아가야할지, 간단한 설문을 통해 알아보세요.
            </Typography>
            <Typography mb={5} className={`${classes.contents}`}>
                돛단지가 유명한 위인을 토대로 재미있게 알려드릴게요!
            </Typography>

            <Button className={classes.containedButton} onClick={() => setStep(prev => prev + 1)}>
                검사하기
            </Button>
            <Typography mt={1} variant="caption" align="center">
                본 검사는 검사 외의 다른 용도로 이용되지 않으며 결과를 저장하지 않습니다.
            </Typography>
        </>
    )
}
