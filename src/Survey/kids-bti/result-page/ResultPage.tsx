import React, {useEffect} from "react"
import {useRouter} from "next/router"
import useStyles from "../styles"

import {Container, Button, Stack, Typography} from "@mui/material"

import HeadMeta from "components/head/HeadMeta"
import ImageBox from "components/image-box/ImageBox"
import {WISE_MAN_LIST, NameType, WiseManListType} from "./result-list"

type ResultPageProps = {
    result: string
}

export default function ResultPage({result}: ResultPageProps) {
    const route = useRouter()
    const classes = useStyles()

    const setMetaTags = ({title = "기본 타이틀", description = "기본 설명", imageUrl = "기본 사이트 이미지 경로"}) => {
        //set title
        document.querySelector('meta[property="og:title"]')?.setAttribute("content", title)

        //set description
        document.querySelector('meta[property="og:description"]')?.setAttribute("content", description)

        //set images
        document.querySelector('meta[property="og:image"]')?.setAttribute("content", imageUrl)

        //set url
        document.querySelector('meta[property="og:url"]')?.setAttribute("content", window.location.href)
    }

    const onShowName = (result: string) => {
        const wisemanData: [string, WiseManListType] = Object.entries(WISE_MAN_LIST).filter(it => it[0] === result)[0]

        if (wisemanData) return wisemanData[1]
    }

    const onCopyClipBoard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            alert("게시물 주소가 복사되었습니다.")
        } catch (error) {
            alert("복사 기능에 문제가 생겼습니다. 빠르게 복구하도록 할게요!")
        }
    }

    // useEffect(() => {
    //     setMetaTags({
    //         title: "재미있는 키즈BTI!",
    //         description: "우리 아이의 미래는 어떤 모습일까?",
    //         imageUrl: `${onShowName(result)?.img}`,
    //     })
    // }, [])

    return (
        <>
            <HeadMeta
                title="재미있는 키즈BTI!"
                description="우리 아이의 미래는 어떤 모습일까?"
                image={onShowName(result)?.img}
            />
            <Container maxWidth="sm">
                <Stack className={classes.resultContainer} mt={6} mb={6}>
                    <Typography className={`${classes.title} pointFont`} mb={1}>
                        돛단지 위인 테스트 결과
                    </Typography>
                    <ImageBox width={250} height={250} src={onShowName(result)?.img} />
                    <Typography my={2} className={`${classes.score} pointFont`}>
                        {onShowName(result)?.name}
                    </Typography>
                    <Typography mb={1} className={`${classes.contents} pointFont`}>
                        "{onShowName(result)?.wise}"
                    </Typography>

                    <Typography className={`${classes.contents2}`}>▪ {onShowName(result)?.desc[0]}</Typography>
                    <Typography className={`${classes.contents2}`}>▪ {onShowName(result)?.desc[1]}</Typography>
                    <Typography className={`${classes.contents2}`}>▪ {onShowName(result)?.desc[2]}</Typography>
                    <Typography className={`${classes.contents2}`}>▪ {onShowName(result)?.desc[3]}</Typography>
                    <Typography className={`${classes.contents2}`}>▪ {onShowName(result)?.desc[4]}</Typography>
                </Stack>

                <Stack className={classes.resultContainer}>
                    <Typography mb={2} className={`${classes.contents} pointFont`}>
                        추천 동화
                    </Typography>
                    <ImageBox
                        width={250}
                        height={150}
                        style={{borderRadius: 20}}
                        src={onShowName(result)?.fairytale.image}
                    />
                    <Typography mt={2} sx={{fontSize: "24px !important"}} className={`${classes.score} pointFont`}>
                        {onShowName(result)?.fairytale.title}
                    </Typography>

                    <Typography mt={3} className={`${classes.contents2}`}>
                        {onShowName(result)?.fairytale.desc}
                    </Typography>
                    {/* <Button className={classes.resultButton} onClick={() => route.push("/signup")} sx={{mb: 1}}>
                        회원가입하기
                    </Button>
                    <Button
                        className={classes.resultButton}
                        onClick={() => route.push("/product/detail?goodsId=fake-goodsId-0")}
                    >
                        스토리셀프 살펴보기
                    </Button> */}
                </Stack>

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
                            onClick={() => onCopyClipBoard(`https://shop.simbaat.com/kids-bti/result?result=${result}`)}
                        >
                            공유하기
                        </Button>
                        <Button className={classes.shareButton} onClick={() => route.push("/kids-bti")}>
                            다시하기
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}
