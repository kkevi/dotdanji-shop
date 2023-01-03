import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

import {Divider, MenuItem, Select, SelectChangeEvent, Stack, Typography} from "@mui/material"
//components
import {OptionsType, ProductItemType} from "types/product-type"

import AddCartButton from "./components/AddCartButton"
import ExtraInformationModule from "./components/ExtraInformationModule"
import ImageBox from "components/image-box/ImageBox"
import {OptionCart} from "types/cart-type"
import PaymentButton from "./components/PaymentButton"
import React from "react"
import SelectOptionBox from "./components/SelectOptionBox"
//slick
import Slider from "react-slick"
import useStyles from "./style"

type Props = {
    productItem: ProductItemType
    selectValue: string
    selectValueList: OptionCart[]
    setSelectValueList: React.Dispatch<React.SetStateAction<OptionCart[]>>
    resultPrice: number
    totalPrice: number
    defaultOption: string
    onSelectOption: (event: SelectChangeEvent) => void
    onDeleteOption: (val: string) => void
}

export default function ProductDetailPageWeb(props: Props) {
    const classes = useStyles()
    const {
        productItem,
        selectValue,
        selectValueList,
        setSelectValueList,
        resultPrice,
        totalPrice,
        defaultOption,
        onSelectOption,
        onDeleteOption,
    } = props

    //제품 정보 데이터 _ ProductItemType
    const {
        productId,
        detailThumbnails,
        mainColor,
        tags,
        options,
        name,
        discount,
        price,
        infoText,
        categoryId,
        infoImage,
    } = productItem

    return (
        <div className={classes.root}>
            <Stack direction="row" width="100%" bgcolor={mainColor}>
                {/* left box */}
                <div style={{width: "60%", paddingTop: "2rem"}}>
                    <Slider {...sliderSettings}>
                        {detailThumbnails &&
                            detailThumbnails.map((image, index) => (
                                <Stack
                                    mt={10}
                                    key={"detailThumbnails" + index}
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
                    {/* 이름, 태그, 가격 */}
                    <Typography variant="subtitle2">{tags.map((tag, index) => `#${tag} `)}</Typography>
                    <Typography fontSize={28} fontWeight={800}>
                        {name}
                    </Typography>
                    <Typography variant="body2" mt={2} sx={{opacity: 0.5}}>
                        {discount > 0 && (
                            <>
                                <span>{discount}% </span>
                                <span style={{textDecoration: "line-through"}}> {price.toLocaleString()}원</span>
                            </>
                        )}
                    </Typography>
                    <Typography fontSize={24} fontWeight={800} mt={0}>
                        {resultPrice.toLocaleString()}원
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
                            {options.map((option, index) => (
                                <MenuItem
                                    key={option.optionId}
                                    value={option.optionId}
                                    style={{display: "flex", justifyContent: "space-between"}}
                                >
                                    <Typography fontSize={20}>{option.optionName}</Typography>
                                    <Typography fontSize={16} color="#888">
                                        {option.surcharge > 0 && `+${option.surcharge.toLocaleString()}원`}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    )}

                    {/* option list */}
                    {selectValueList.length > 0 && (
                        <>
                            <Stack mb={3} width="100%">
                                {selectValueList.map((selected, index) => {
                                    const optionData = options?.filter(
                                        it => it.optionId === selected.optionId,
                                    )[0] as OptionsType
                                    return (
                                        <SelectOptionBox
                                            key={"option" + index}
                                            index={index}
                                            optionName={optionData?.optionName}
                                            optionId={selected.optionId}
                                            count={selected.count}
                                            optionPrice={optionData.surcharge + resultPrice || 0}
                                            selectValueList={selectValueList}
                                            onDeleteOption={onDeleteOption}
                                            setSelectValueList={setSelectValueList}
                                        />
                                    )
                                })}
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
                            {totalPrice.toLocaleString()}원
                        </Typography>
                    </Stack>

                    {/* 구매버튼 */}
                    <Stack className={classes.rootStack}>
                        <AddCartButton
                            selectValueList={selectValueList}
                            options={options}
                            productId={productId}
                            price={price}
                        />
                        <PaymentButton
                            selectValueList={selectValueList}
                            options={options}
                            productId={productId}
                            price={price}
                        />
                    </Stack>
                </div>
            </Stack>

            {categoryId === "ebook" && <ExtraInformationModule infoHtml={infoImage} />}
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
