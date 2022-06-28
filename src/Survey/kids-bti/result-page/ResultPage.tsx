import React from "react"
import {useRouter} from "next/router"
import useStyles from "../styles"

import {Container, Button, Stack, Typography} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"

type NameType =
    | "Gandhi"
    | "Nightingale"
    | "Fabre"
    | "Helen"
    | "Wright"
    | "Shakespeare"
    | "Lincoln"
    | "Curie"
    | "daVinci"

const nameList: Record<NameType, Record<string, string>> = {
    Gandhi: {
        name: "마하트마 간디",
        img: "/images/portrait/1_gandhi.png",
    },
    Nightingale: {
        name: "플로렌스 나이팅게일",
        img: "/images/portrait/2_nightingale.png",
    },
    Fabre: {
        name: "앙리 파브르",
        img: "/images/portrait/3_fabre.png",
    },
    Helen: {
        name: "헬런 애덤스 켈러",
        img: "/images/portrait/4_helen.png",
    },
    Wright: {
        name: "라이트 형제",
        img: "/images/portrait/5_wright.png",
    },
    Shakespeare: {
        name: "윌리엄 셰익스피어",
        img: "/images/portrait/6_shakespeare.png",
    },
    Lincoln: {
        name: "아브라함 링컨",
        img: "/images/portrait/7_lincoln.png",
    },
    Curie: {
        name: "마리 퀴리",
        img: "/images/portrait/8_curie.png",
    },
    daVinci: {
        name: "레오나르도 다빈치",
        img: "/images/portrait/9_davinci.png",
    },
}

type ResultPageProps = {
    result: string
}

export default function ResultPage({result}: ResultPageProps) {
    const route = useRouter()
    const classes = useStyles()

    const onShowName = (result: string) => {
        // const nameData: string[] = Object.entries(nameList).filter((it: string[]) => it[0] === result)[0]
        const nameData: [string, Record<string, string>] = Object.entries(nameList).filter(it => it[0] === result)[0]

        if (nameData) return nameData[1]
    }

    const onCopyClipBoard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            alert("게시물 주소가 복사되었습니다.")
        } catch (error) {
            alert("복사 기능에 문제가 생겼습니다. 빠르게 복구하도록 할게요!")
        }
    }

    return (
        <Container maxWidth="sm">
            <Stack className={classes.resultContainer} mt={6} mb={6}>
                <Typography className={`${classes.title} pointFont`} mb={1}>
                    언어발달 검사결과
                </Typography>
                <ImageBox width={250} height={250} src={onShowName(result)?.img} />
                <Typography my={1} className={`${classes.score} pointFont`}>
                    {onShowName(result)?.name}
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
                    <Button
                        className={classes.shareButton}
                        onClick={() =>
                            onCopyClipBoard(`https://shop.simbaat.com/survey/kids-bti/result?result=${result}`)
                        }
                    >
                        공유하기
                    </Button>
                    <Button className={classes.shareButton} onClick={() => route.push("/survey/kids-bti")}>
                        다시하기
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}
