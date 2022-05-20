import {Checkbox, FormControlLabel, Stack, TableCell, Typography} from "@mui/material"
import {CartOptionsType} from "types/cart-type"
import CountController from "components/count-controller/CountController"
import {GOODS_ITEMS_DATA} from "components/fake-data/fake-goods"
import ImageBox from "components/image-box/ImageBox"
import React, {useEffect, useState} from "react"

type CartListProps = {
    idx: number
    cartItem: CartOptionsType
    cartItemList: CartOptionsType[]
    checkList: Record<string, boolean>
    setCartItemList: React.Dispatch<React.SetStateAction<CartOptionsType[]>>
    onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CartTableItem(props: CartListProps) {
    const {idx, cartItem, cartItemList, checkList, setCartItemList, onChangeCheckbox} = props
    const [goodsThumbnail, setGoodsThumbnail] = useState("")
    const [goodsName, setGoodsName] = useState("")

    useEffect(() => {
        loadGoodsData()
    }, [])

    const loadGoodsData = async () => {
        try {
            //제품정보 가져오기
            const goods = await GOODS_ITEMS_DATA.filter(it => it.goodsId === cartItem.goodsId)
            setGoodsThumbnail(goods[0].thumbnails.images[0])
            setGoodsName(goods[0].name)
        } catch (e) {
            console.log(e)
        }
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
                        {cartItem.optionAddPlace > 0 && (
                            <Typography fontSize={12}>+{cartItem.optionAddPlace.toLocaleString("ko")}원</Typography>
                        )}
                    </Stack>

                    <Typography fontSize={17} fontWeight={800} color="#333" mb={2}>
                        {(cartItem.price * cartItem.count).toLocaleString("ko")} 원
                    </Typography>

                    <Stack width={110}>
                        <CountController
                            idx={idx}
                            optionId={cartItem.optionId}
                            count={cartItem.count}
                            valueList={cartItemList}
                            setValueList={setCartItemList}
                            mobile
                        />
                    </Stack>
                </Stack>
            </Stack>

            <ImageBox width={130} height={130} src={goodsThumbnail} />
        </Stack>
    )
}
