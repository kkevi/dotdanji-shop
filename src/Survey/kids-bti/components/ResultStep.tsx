import {useRouter} from "next/router"
import useStyles from "../styles"
import React from "react"

import {Container, Button, Stack, Typography} from "@mui/material"

type ResultStepProps = {
    mobile: boolean
}

export default function ResultStep(props: ResultStepProps) {
    const {mobile} = props
    const classes = useStyles()
    const route = useRouter()

    return (
        <Container maxWidth={mobile ? "xs" : "sm"}>
            <Stack className={classes.resultContainer} mt={mobile ? 6 : 10} mb={6}>
                <Typography className={`${classes.title} pointFont`}>언어발달 검사결과</Typography>
                <Typography my={1} className={`${classes.score} pointFont`}>
                    30점
                </Typography>
                <Typography className={`${classes.contents} pointFont`}>
                    자녀분의 언어발달 정도는 현재 매우 뛰어납니다!
                </Typography>

                <Typography mt={4} className={`${classes.contents2}`}>
                    현재 아이의 언어발달 상태는 '매우 뛰어남'으로 또래 아이들보다 평균적으로 약 6개월 정도 앞섭니다.
                </Typography>
                <Typography className={`${classes.contents2}`}>
                    주기적으로 이렇게이렇게 교육을 시키며 저러쿵이러쿵 하신다면
                </Typography>
                <Typography className={`${classes.contents2}`}>
                    아이의 더 향상된 언어실력을 볼 수 있을 거예요!
                </Typography>
                <Typography className={`${classes.contents2}`}>지금 돛단지로 공부하는 방법을 알아보세요.</Typography>
            </Stack>

            <Stack className={classes.resultContainer}>
                <Typography sx={{fontSize: "18px !important"}} className={`${classes.score} pointFont`}>
                    "2세 여자 아이들"은
                </Typography>
                <Typography className={`${classes.contents} pointFont`}>
                    평균적으로 "이러이러한" 언어실력을 가지고 있습니다.
                </Typography>

                <Typography mt={3} mb={2} className={`${classes.contents2}`}>
                    지금 회원가입하면 스토리셀프 1주 무료체험권을 드려요!
                </Typography>
                <Button className={classes.resultButton} onClick={() => route.push("/signup")} sx={{mb: 1}}>
                    회원가입하기
                </Button>
                <Button
                    className={classes.resultButton}
                    onClick={() => route.push("/product/detail?goodsId=fake-goodsId-0")}
                >
                    스토리셀프 살펴보기
                </Button>
            </Stack>

            <Stack mt={4} mb={mobile ? 6 : 10} width="100%">
                <Stack justifyContent="center" alignItems="center" direction="row" mb={2}>
                    <div className={classes.divider} />
                    <Typography mx={1} className={`${classes.caption}`}>
                        공유하기
                    </Typography>
                    <div className={classes.divider} />
                </Stack>
                <div className={classes.socialLogin} style={{backgroundColor: "#FFE617", alignSelf: "center"}}>
                    <img className={classes.socialImage} src="/images/logo-kakao.png" onClick={() => {}} />
                </div>
            </Stack>
        </Container>
    )
}
