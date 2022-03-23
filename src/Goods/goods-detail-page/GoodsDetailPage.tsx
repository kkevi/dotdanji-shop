import React, {useEffect, useState} from "react"
import {Button, Divider, IconButton, MenuItem, Select, SelectChangeEvent, Stack, Typography} from "@mui/material"
//components
import {GOODS_ITEMS_DATA} from "Components/fake-data"
import {GoodsItemProps, Options} from "Goods/goods-type"
import ImageBox from "Components/image-box/ImageBox"
import GoodsOptions from "./GoodsOptions"
import useStyles from "./style"
//slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type Props = {
    goodsId: string | string[] | undefined
}

type OptionCart = {
    option: Options
    count: number
}

export default function GoodsDetailPage(props: Props) {
    const classes = useStyles()
    const {goodsId} = props
    const [goodsItemData, setGoodsItemData] = useState<GoodsItemProps>(GOODS_ITEMS_DATA[0])
    const {name, thumnails, infoText, options = [], price} = goodsItemData

    //옵션 선택 박스
    const defaultOption = "옵션 선택"
    const [selectValue, setSelectValue] = useState(defaultOption)
    const [selectValueList, setSelectValueList] = useState<OptionCart[]>([])
    let coast

    // 옵션 선택
    const onSelectOption = (event: SelectChangeEvent) => {
        const {value} = event.target
        setSelectValue(value)
        if (value === defaultOption) return
        onAddOptionList(value)
        // console.log("value", value)
        // console.log("selectValueList", selectValueList[selectValueList.length - 1]?.count)
    }

    // 옵션 배열 검사
    const onAddOptionList = (id: string) => {
        const search = selectValueList.findIndex(it => it.option.optionId === id)
        if (search === -1) {
            // 옵션 선택하여 추가
            const arr = options
            const newItm = arr.filter(it => it.optionId === id)[0]
            selectValueList.push({option: newItm, count: 1})
        } else {
            // 이미 추가되어있는 옵션 추가 선택
            console.log("추가 되어있는데 또 누른 곳")
        }
    }

    // 옵션 배열 삭제
    const onDeleteOption = (optionId: string) => {
        setSelectValueList(prev => prev.filter(it => it.option.optionId !== optionId))
        setSelectValue("옵션 선택")
    }

    useEffect(() => {
        console.log("changed")
    }, [selectValueList])

    return (
        <div className={classes.root}>
            <Stack direction="row" width="100%" bgcolor={thumnails.bgColor}>
                {/* left box */}
                <div style={{width: "60%", paddingTop: "2rem"}}>
                    <Slider {...sliderSettings}>
                        {thumnails.images.map((image, idx) => (
                            <Stack
                                mt={10}
                                key={"thumnail" + idx}
                                width="100%"
                                className={classes.slideBox}
                                height={1000}
                                justifyContent="center"
                                alignItems="center"
                                display="flex !important"
                            >
                                <ImageBox
                                    src={image}
                                    height={700}
                                    width={500}
                                    style={{boxShadow: "0px 58px 49px -40px #00000030"}}
                                />
                            </Stack>
                        ))}
                    </Slider>
                </div>

                {/* right box */}
                <div className={classes.infoBox}>
                    <Typography fontSize={28} fontWeight={800}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle2">#태그태그 #태그태그</Typography>
                    <Typography fontSize={20} mt={3} mb={8}>
                        {infoText}
                    </Typography>

                    {/* option select box */}
                    {options && (
                        <Select
                            value={selectValue}
                            label={defaultOption}
                            variant="standard"
                            onChange={onSelectOption}
                            fullWidth
                            sx={{marginBottom: 3}}
                        >
                            <MenuItem value={defaultOption} sx={{opacity: 0.6}}>
                                <Typography fontSize={20}>{defaultOption}</Typography>
                            </MenuItem>
                            {options.map((option, idx) => (
                                <MenuItem key={option.optionId} value={option.optionId}>
                                    <Typography fontSize={20}>{option.text}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    )}

                    {/* option list */}
                    {selectValueList.length > 0 && (
                        <>
                            <Stack mb={3} width="100%">
                                {selectValueList.map(({option, count}, idx) => (
                                    <GoodsOptions
                                        idx={idx}
                                        option={option}
                                        count={count}
                                        selectValueList={selectValueList}
                                        setSelectValueList={setSelectValueList}
                                        onDeleteOption={onDeleteOption}
                                    />
                                ))}
                            </Stack>
                            <Divider orientation="horizontal" flexItem sx={{backgroundColor: "#726C60"}} />
                        </>
                    )}

                    {/* 배송정보 */}
                    <Stack mt={2} className={classes.rootStack} justifyContent="flex-start !important">
                        <Typography fontSize={13} width={"20%"} fontWeight={700}>
                            배송비
                        </Typography>
                        <Typography fontSize={13} fontWeight={700} color="rgba(0, 0, 0, .4)">
                            50,000원 이상 구매 시, 무료배송 (미만 시 3,000원 발생)
                        </Typography>
                    </Stack>
                    <Stack my={2} className={classes.rootStack} justifyContent="flex-start !important">
                        <Typography fontSize={13} width={"20%"} fontWeight={700}>
                            배송예정일
                        </Typography>
                        <Typography fontSize={13} fontWeight={700} color="rgba(0, 0, 0, .4)">
                            1일 이내 출고
                        </Typography>
                    </Stack>

                    {/* 합계금액 */}
                    <Divider orientation="horizontal" flexItem sx={{backgroundColor: "#726C60"}} />
                    <Stack mt={4} className={classes.rootStack}>
                        <Typography variant="h6" fontWeight={700}>
                            총 상품금액
                        </Typography>
                        <Typography variant="h6" fontWeight={700}>
                            123원
                        </Typography>
                    </Stack>

                    {/* 구매버튼 */}
                    <Stack className={classes.rootStack}>
                        <Button variant="contained" sx={{height: 55}} fullWidth>
                            <Typography variant="h6">장바구니 담기</Typography>
                        </Button>
                        <Button variant="contained" sx={{height: 55}} fullWidth>
                            <Typography variant="h6">바로 구매하기</Typography>
                        </Button>
                    </Stack>
                </div>
            </Stack>

            {/* <Container maxWidth="lg">
                <Stack py={40}>
                    <Container maxWidth="lg" sx={{my: 24}}></Container>
                </Stack>
            </Container> */}
        </div>
    )
}

const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
    infinite: true,
    speed: 1000,
    draggable: true,
    vertical: false,
}
