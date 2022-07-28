import {Checkbox, FormControlLabel, Stack, TableCell, Typography} from "@mui/material"
import {CartOptionsType} from "types/cart-type"
import CountController from "components/count-controller/CountController"
import ImageBox from "components/image-box/ImageBox"
import React, {useEffect, useState} from "react"

type CartListProps = {
    index: number
    cartItem: CartOptionsType
    cartItemList: CartOptionsType[]
    checkList: Record<string, boolean>
    setCartItemList: React.Dispatch<React.SetStateAction<CartOptionsType[]>>
    onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CartTableItem(props: CartListProps) {
    const {index, cartItem, cartItemList, checkList, setCartItemList, onChangeCheckbox} = props
    const [listThumbnail, setListThumbnail] = useState<string>("")
    const [goodsName, setGoodsName] = useState("")

    useEffect(() => {
        loadGoodsData()
    }, [])

    const loadGoodsData = async () => {
        // if (productId === "") return
        // axios.defaults.withCredentials = true
        // const stage = process.env.NEXT_PUBLIC_AWS_API_DOTDANJI_STAGE
        // const id = process.env.NEXT_PUBLIC_DB_DOTDANJI_GOODS_ID // goods table 가져옴
        // try {
        //     await axios({
        //         url: `/api/${stage}/${id}`,
        //         method: "GET",
        //         withCredentials: true, // 쿠키 cors 통신 설정 허용
        //         headers: {
        //             "Access-Control-Allow-Origin": "https://dotdanji.com",
        //             "Content-Type": "application/json",
        //         },
        //         params: {
        //             productId: productId,
        //         },
        //     })
        //         .then(response => {
        //             const data = response.data.message[0]
        //             setListThumbnail()
        //             setGoodsName()
        //         })
        //         .catch(function (error) {
        //             console.log("axios error:", error)
        //         })
        // } catch (error) {
        //     //응답 실패
        //     console.error("try error:", error)
        // }
    }

    return (
        <Stack width="100%" direction="row" justifyContent="space-between" py={3} sx={{borderTop: "1px solid #D3D3D3"}}>
            <Stack direction="row" alignItems="flex-start">
                <FormControlLabel
                    color="primary"
                    label=""
                    control={
                        <Checkbox
                            checked={checkList[cartItem.optionId] || false}
                            onChange={onChangeCheckbox}
                            name={cartItem.optionId}
                            sx={{pt: 0}}
                        />
                    }
                />

                <Stack direction="column">
                    {/* 상품명 */}
                    <Typography fontWeight={700} mb={0.2}>
                        {goodsName}
                    </Typography>
                    {/* 옵션정보 */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        sx={{color: "#999"}}
                        mb={1.2}
                    >
                        <Typography fontSize={12} mr={1}>
                            {cartItem.optionName}
                        </Typography>
                        {cartItem.surcharge > 0 && (
                            <Typography fontSize={12}>+{cartItem.surcharge.toLocaleString("ko")}원</Typography>
                        )}
                    </Stack>

                    <Typography fontSize={17} fontWeight={800} color="#333" mb={2}>
                        {(cartItem.price * cartItem.count).toLocaleString("ko")} 원
                    </Typography>

                    <Stack width={110}>
                        <CountController
                            index={index}
                            optionId={cartItem.optionId}
                            count={cartItem.count}
                            valueList={cartItemList}
                            setValueList={setCartItemList}
                            mobile
                        />
                    </Stack>
                </Stack>
            </Stack>

            <ImageBox width={130} height={130} src={listThumbnail} />
        </Stack>
    )
}
