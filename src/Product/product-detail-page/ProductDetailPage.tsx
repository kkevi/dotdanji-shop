import React, {CSSProperties, useEffect, useState} from "react"
import SyncLoader from "react-spinners/ClipLoader"

import {SelectChangeEvent, Stack, useMediaQuery, useTheme} from "@mui/material"
//components
import {ProductItemDefaultData, ProductItemType} from "types/product-type"

import {OptionCart} from "types/cart-type"

import ProductDetailPageWeb from "./ProductDetailPageWeb"
import ProductDetailPageMobile from "./ProductDetailPageMobile"
import axios from "axios"

type Props = {
    productId: string
}

export default function ProductDetailPage(props: Props) {
    const {productId} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    //데이터
    const [productItemData, setProductItemData] = useState<ProductItemType>(ProductItemDefaultData)
    const {discount, price, options} = productItemData
    //할인 계산식
    const [resultPrice, setResultPrice] = useState(0)
    useEffect(() => {
        if (discount !== undefined && discount !== 0) setResultPrice(price - price * (discount / 100))
        else setResultPrice(price)
    }, [price, discount])

    //옵션 선택 박스
    const defaultOption = "옵션 선택"
    const [selectValue, setSelectValue] = useState(defaultOption)
    const [selectValueList, setSelectValueList] = useState<OptionCart[]>([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(true)

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: theme.palette.primary.main,
    }

    useEffect(() => {
        onLoadData()
    }, [productId])

    const onLoadData = async () => {
        if (productId === "") return
        axios.defaults.withCredentials = true

        const stage = process.env.NEXT_PUBLIC_AWS_API_DOTDANJI_STAGE
        const id = process.env.NEXT_PUBLIC_DB_DOTDANJI_GOODS_ID // goods table 가져옴
        try {
            await axios({
                url: `/api/${stage}/${id}`,
                method: "GET",
                withCredentials: true, // 쿠키 cors 통신 설정 허용
                headers: {
                    "Access-Control-Allow-Origin": "https://dotdanji.com",
                    "Content-Type": "application/json",
                },
                params: {
                    productId: productId,
                },
            })
                .then(response => {
                    const data = response.data.message[0]
                    setProductItemData({
                        productId: data.productId,
                        categoryId: data.categoryId,
                        listThumbnail: data.listThumbnail,
                        detailThumbnails: JSON.parse(data.detailThumbnails) || [],
                        mainColor: data.mainColor,
                        options: JSON.parse(data.options) || [],
                        name: data.name,
                        tags: [],
                        infoText: data.infoText,
                        infoImage: data.infoHtml,
                        price: data.price,
                        discount: data.discount,
                    })
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log("axios error:", error)
                })
        } catch (error) {
            //응답 실패
            console.error("try error:", error)
        }
    }

    useEffect(() => {
        //전체 금액 표시
        setTotalPrice(
            selectValueList.reduce((acc, cur) => {
                const surcharge = options.filter(it => it.optionId === cur.optionId)[0].surcharge
                // acc += (선택 된 옵션 가격 + 할인 계산된 실제 가격) * 수량
                acc += (surcharge + resultPrice) * cur.count
                return acc
            }, 0),
        )
    }, [selectValueList, selectValue])

    // 옵션 선택
    const onSelectOption = (event: SelectChangeEvent) => {
        const {value} = event.target
        onAddOptionList(value)
        setSelectValue(value)
    }

    //선택 옵션 배열 추가
    const onAddOptionList = (id: string) => {
        if (id === defaultOption) return
        const search = selectValueList.findIndex(it => it.optionId === id)
        if (search === -1) {
            selectValueList.push({
                optionId: id,
                count: 1,
            })
        } else {
            alert("이미 선택 되어있는 옵션입니다. 수량변경을 통해 개수를 조절 해주세요.")
        }
    }

    // 옵션 배열 삭제
    const onDeleteOption = (optionId: string) => {
        setSelectValueList(prev => prev.filter(it => it.optionId !== optionId))
        setSelectValue(defaultOption)
    }

    return (
        <>
            {loading ? (
                <Stack height={mobile ? "50vh" : "70vh"} justifyContent="center" alignItems="center">
                    <SyncLoader loading={loading} cssOverride={override} size={100} />
                </Stack>
            ) : mobile ? (
                <ProductDetailPageMobile
                    productItem={productItemData}
                    selectValueList={selectValueList}
                    setSelectValueList={setSelectValueList}
                    onSelectOption={onSelectOption}
                    onDeleteOption={onDeleteOption}
                    totalPrice={totalPrice}
                />
            ) : (
                <ProductDetailPageWeb
                    productItem={productItemData}
                    selectValue={selectValue}
                    selectValueList={selectValueList}
                    setSelectValueList={setSelectValueList}
                    resultPrice={resultPrice}
                    totalPrice={totalPrice}
                    defaultOption={defaultOption}
                    onSelectOption={onSelectOption}
                    onDeleteOption={onDeleteOption}
                />
            )}
        </>
    )
}
