import React, {useEffect, useState} from "react"
import {Button, Divider, MenuItem, Select, SelectChangeEvent, Stack, Typography} from "@mui/material"
//components
import {GOODS_ITEMS_DATA} from "Components/fake-data/fake-goods"
import {GoodsItemProps} from "Goods/goods-type"
import useStyles from "./style"
//slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {useRouter} from "next/router"
import useStore from "Components/store/useStore"
import {CartItemProps, OptionCart} from "Cart/cart-type"
import ImageBox from "Components/image-box/ImageBox"

type Props = {
    goodsId: string
}

export default function GoodsDetailPage(props: Props) {
    const classes = useStyles()
    const route = useRouter()
    const {userStore, goodsStore} = useStore()
    const {goodsId} = props

    //데이터
    const [goodsItemData, setGoodsItemData] = useState<GoodsItemProps>(GOODS_ITEMS_DATA[0])
    const {name, thumbnails, infoText, options = [], tags} = goodsItemData

    //옵션 선택 박스
    const defaultOption = "옵션 선택"
    const [selectValue, setSelectValue] = useState(defaultOption)
    const [selectValueList, setSelectValueList] = useState<OptionCart[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        //전체 금액 표시
        setTotalPrice(
            selectValueList.reduce((acc, cur) => {
                if (!goodsItemData.options) return acc
                const optionValue = goodsItemData.options.filter(it => it.optionId === "fake-goodsId-0_opt1")[0].value
                acc += (optionValue + goodsItemData.price) * cur.count
                return acc
            }, 0),
        )
    }, [selectValueList, selectValue])

    // 옵션 선택
    const onSelectOption = (event: SelectChangeEvent) => {
        const {value} = event.target
        // onAddOptionList(value)
        setSelectValue(value)
    }

    // 옵션 배열 검사
    // const onAddOptionList = (id: string) => {
    //     const search = selectValueList.findIndex(it => it.option.optionId === id)
    //     if (search === -1) {
    //         // 옵션 선택하여 추가
    //         const arr = options
    //         const newItm = arr.filter(it => it.optionId === id)[0]
    //         selectValueList.push({option: newItm, price: Number(newItm.value), count: 1})
    //     } else {
    //         // 이미 추가되어있는 옵션 추가 선택
    //         alert("이미 선택 되어있는 옵션입니다. 수량변경을 통해 개수를 조절 해주세요.")
    //     }
    // }

    // 옵션 배열 삭제
    const onDeleteOption = (optionId: string) => {
        setSelectValueList(prev => prev.filter(it => it.optionId !== optionId))
        setSelectValue("옵션 선택")
    }

    const onCickCart = () => {
        if (selectValueList.length < 1) return alert("옵션을 선택 해주세요.")

        const newArray: CartItemProps = {
            goodsId: goodsId,
            options: selectValueList,
        }
        if (userStore.isLoggedIn) {
            //TODO: 서버 장바구니에 저장 기능 추가
        } else {
            goodsStore.cartItemList.push(newArray)
        }
        if (confirm("장바구니를 확인하시겠습니까?")) {
            route.push("/cart")
        }
    }

    return (
        <div className={classes.root}>
            <Stack direction="row" width="100%" bgcolor={thumbnails.bgColor}>
                {/* left box */}
                <div style={{width: "60%", paddingTop: "2rem"}}>
                    <Slider {...sliderSettings}>
                        {thumbnails.images.map((image, idx) => (
                            <Stack
                                mt={10}
                                key={"thumbnail" + idx}
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
                    {/* 이름,태그, 가격 */}
                    <Typography variant="subtitle2">{tags.map((tag, idx) => `#${tag} `)}</Typography>
                    <Typography fontSize={28} fontWeight={800}>
                        {name}
                    </Typography>
                    <Typography fontSize={24} fontWeight={800} mt={2}>
                        {goodsItemData.price.toLocaleString()}원
                    </Typography>
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
                                <MenuItem
                                    key={option.optionId}
                                    value={option.optionId}
                                    style={{display: "flex", justifyContent: "space-between"}}
                                >
                                    <Typography fontSize={20}>{option.text}</Typography>
                                    <Typography fontSize={16} color="#888">
                                        {option.value > 0 && `+${option.value.toLocaleString()}원`}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    )}

                    {/* option list */}
                    {selectValueList.length > 0 && (
                        <>
                            <Stack mb={3} width="100%">
                                {/* {selectValueList.map(({option, count, price}, idx) => (
                                    <GoodsOptions
                                        key={"option" + idx}
                                        idx={idx}
                                        option={option}
                                        count={count}
                                        defaultPrice={goodsItemData.price}
                                        optionDefaultPrice={price}
                                        selectValueList={selectValueList}
                                        onDeleteOption={onDeleteOption}
                                        setSelectValueList={setSelectValueList}
                                    />
                                ))} */}
                            </Stack>
                            <Divider orientation="horizontal" flexItem sx={{backgroundColor: "rgba(0, 0, 0, .4)"}} />
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
                    <Divider orientation="horizontal" flexItem sx={{backgroundColor: "rgba(0, 0, 0, .4)"}} />
                    <Stack mt={4} className={classes.rootStack}>
                        <Typography variant="h6" fontWeight={700}>
                            총 상품금액
                        </Typography>
                        <Typography variant="h6" fontWeight={700}>
                            {totalPrice.toLocaleString()}원
                        </Typography>
                    </Stack>

                    {/* 구매버튼 */}
                    <Stack className={classes.rootStack}>
                        <Button variant="contained" sx={{height: 55}} fullWidth onClick={onCickCart}>
                            <Typography variant="h6">장바구니 담기</Typography>
                        </Button>
                        <Button variant="contained" sx={{height: 55}} fullWidth onClick={() => {}}>
                            <Typography variant="h6">바로 구매하기</Typography>
                        </Button>
                    </Stack>
                </div>
            </Stack>
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
