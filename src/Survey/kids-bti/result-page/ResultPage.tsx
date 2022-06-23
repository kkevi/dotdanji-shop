import React from "react"
import {useRouter} from "next/router"
import useStyles from "../styles"

import {Container, Button, Stack, Typography, useMediaQuery, useTheme} from "@mui/material"

interface NameType {
    Gandhi: string
    Nightingale: string
    Fabre: string
    Helen: string
    Columbus: string
    Shakespeare: string
    Lincoln: string
    장영실: string
    daVinci: string
}

type ResultPageProps = {
    result: string
}

export default function ResultPage({result}: ResultPageProps) {
    const route = useRouter()
    const classes = useStyles()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    const name: NameType = {
        Gandhi: "마하트마 간디",
        Nightingale: "플로렌스 나이팅게일",
        Fabre: "앙리 파브르",
        Helen: "헬런 애덤스 켈러",
        Columbus: "크리스토퍼 콜럼버스",
        Shakespeare: "윌리엄 셰익스피어",
        Lincoln: "아브라함 링컨",
        장영실: "장영실",
        daVinci: "레오나르도 다빈치",
    }

    const getValue = (key: keyof NameType) => {
        return name[key]
    }

    return (
        <Container maxWidth="sm">
            <Stack className={classes.resultContainer} mt={mobile ? 6 : 10} mb={6}>
                <Typography className={`${classes.title} pointFont`}>언어발달 검사결과</Typography>
                <Typography my={1} className={`${classes.score} pointFont`}>
                    {name[result]}
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

            {/* <Stack className={classes.resultContainer}>
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
                    onClick={() => route.push("/goods/detail?goodsId=fake-goodsId-0")}
                >
                    스토리셀프 살펴보기
                </Button>
            </Stack> */}

            <Stack mt={4} mb={10} width="100%" alignItems="center">
                <Stack width="100%" justifyContent="center" alignItems="center" direction="row" mb={2}>
                    <div className={classes.divider} />
                    <Typography mx={1} className={classes.caption}>
                        공유하기
                    </Typography>
                    <div className={classes.divider} />
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" width="90%" spacing={2}>
                    <Button className={classes.shareButton} onClick={() => {}}>
                        공유하기
                    </Button>
                    <Button className={classes.shareButton} onClick={() => route.back()}>
                        다시하기
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}
