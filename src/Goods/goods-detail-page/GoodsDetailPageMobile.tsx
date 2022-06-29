import React, {useState} from "react"
import {useRouter} from "next/router"
import {Button, Divider, MenuItem, Select, SelectChangeEvent, Stack, Typography} from "@mui/material"
//components
import {GoodsItemType, OptionsType} from "types/goods-type"
import useStyles from "./style"
//slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {OptionCart} from "types/cart-type"
import GoodsOptions from "./GoodsOptions"
import ImageBox from "components/image-box/ImageBox"

import ExtraInformationModule from "./components/ExtraInformationModule"

type Props = {
    goodsId: string
    goodsItemData: GoodsItemType
    selectValueList: OptionCart[]
    setSelectValueList: React.Dispatch<React.SetStateAction<OptionCart[]>>
    onSelectOption: (event: SelectChangeEvent) => void
    onDeleteOption: (val: string) => void
    onCickCart: () => void
    onClickBuy: () => void
    totalPrice: number
}

export default function GoodsDetailPageMobile(props: Props) {
    const classes = useStyles()
    const route = useRouter()
    const {
        goodsId,
        goodsItemData,
        selectValueList,
        setSelectValueList,
        onSelectOption,
        onDeleteOption,
        onCickCart,
        onClickBuy,
        totalPrice,
    } = props

    //데이터
    const {name, sale, price, thumbnails, infoText, options = [], tags, categoryId, infoHtml} = goodsItemData
    //할인 계산식
    var resultPrice = sale > 0 ? price - price * (sale / 100) : price

    //옵션 선택 박스
    const defaultOption = "옵션 선택"
    const [selectValue, setSelectValue] = useState(defaultOption)

    return (
        <div>
            <Stack className={classes.rootMobile} bgcolor={thumbnails.bgColor}>
                <Slider {...sliderSettings}>
                    {thumbnails.images.map((image, index) => (
                        <Stack
                            key={"thumbnail" + index}
                            position="relative"
                            display="flex !important"
                            justifyContent="center"
                            alignItems="center"
                            height={450}
                        >
                            <ImageBox
                                src={image}
                                height={300}
                                width={"100%"}
                                style={{boxShadow: "0px 58px 49px -40px #00000030"}}
                            />
                        </Stack>
                    ))}
                </Slider>

                <Typography mt={2} fontSize={12}>
                    {tags.map((tag, index) => `#${tag} `)}
                </Typography>
                <Typography fontSize={20} fontWeight={800}>
                    {name}
                </Typography>
                <Typography variant="body2" mt={1} sx={{opacity: 0.5}}>
                    {sale > 0 && (
                        <>
                            <span>{sale}% </span>
                            <span style={{textDecoration: "line-through"}}> {price.toLocaleString()}원</span>
                        </>
                    )}
                </Typography>
                <Typography fontSize={24} fontWeight={800}>
                    {resultPrice.toLocaleString()}원
                </Typography>
                <Typography mt={2}>{infoText}</Typography>

                {options && (
                    <Select
                        value={selectValue}
                        label={defaultOption}
                        variant="standard"
                        onChange={onSelectOption}
                        fullWidth
                        sx={{mb: 3, mt: 2}}
                    >
                        <MenuItem value={defaultOption} sx={{opacity: 0.6}}>
                            <Typography fontSize={14}>{defaultOption}</Typography>
                        </MenuItem>
                        {options.map((option, index) => (
                            <MenuItem
                                key={option.optionId}
                                value={option.optionId}
                                style={{display: "flex", justifyContent: "space-between"}}
                            >
                                <Typography fontSize={16}>{option.name}</Typography>
                                <Typography fontSize={14} color="#888">
                                    {option.addPlace > 0 && `+${option.addPlace.toLocaleString()}원`}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Select>
                )}

                {/* 이름, 태그, 가격 */}
                {selectValueList.length > 0 && (
                    <Stack mb={3} width="100%">
                        {selectValueList.map((selected, index) => {
                            const optionData = options?.filter(
                                it => it.optionId === selected.optionId,
                            )[0] as OptionsType
                            return (
                                <GoodsOptions
                                    key={"option" + index}
                                    index={index}
                                    optionName={optionData?.name}
                                    optionId={selected.optionId}
                                    count={selected.count}
                                    optionPrice={optionData.addPlace + resultPrice || 0}
                                    selectValueList={selectValueList}
                                    onDeleteOption={onDeleteOption}
                                    setSelectValueList={setSelectValueList}
                                    mobile
                                />
                            )
                        })}
                    </Stack>
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
                <Stack mt={2} mb={4} className={classes.rootStack} justifyContent="flex-start !important">
                    <Typography fontSize={13} width={"20%"} fontWeight={700}>
                        배송예정일
                    </Typography>
                    <Typography fontSize={13} fontWeight={700} color="rgba(0, 0, 0, .4)">
                        2일 이내 출고
                    </Typography>
                </Stack>

                {/* 합계금액 */}
                <Divider orientation="horizontal" flexItem sx={{backgroundColor: "rgba(0, 0, 0, .4)"}} />
                <Stack mt={4} className={classes.rootStack}>
                    <Typography variant="h6" fontWeight={700}>
                        총 상품금액
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                        {totalPrice.toLocaleString()} 원
                    </Typography>
                </Stack>

                {/* 구매버튼 */}
                <Stack mt={3} mb={6} className={classes.rootStack}>
                    <Button className={classes.mobileButton} fullWidth onClick={onCickCart} disableElevation>
                        <Typography>장바구니 담기</Typography>
                    </Button>
                    <Button className={classes.mobileButton} fullWidth onClick={onClickBuy} disableElevation>
                        <Typography>바로 구매하기</Typography>
                    </Button>
                </Stack>
            </Stack>

            {categoryId === "ebook" && <ExtraInformationModule infoHtml={infoHtml} />}
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
    responsive: [
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}
