import React, {useEffect, useState} from "react"
import {TableCell, Checkbox, Typography, Stack, IconButton, Divider, FormControlLabel} from "@mui/material"

import {OptionCart} from "Cart/cart-type"
import ImageBox from "Components/image-box/ImageBox"
import CountController from "Components/count-controller/CountController"
import {GOODS_ITEMS_DATA} from "Components/fake-data/fake-goods"

//icon
import {CartOptionsType} from "./CartSection1"

type CartListProps = {
    idx: number
    cartItem: CartOptionsType
    cartItemList: CartOptionsType[]
    checkList: Record<string, boolean>
    setCartItemList: React.Dispatch<React.SetStateAction<CartOptionsType[]>>
    onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CartList(props: CartListProps) {
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
        <>
            <TableCell padding="checkbox">
                <FormControlLabel
                    color="primary"
                    label=""
                    control={
                        <Checkbox
                            checked={checkList[cartItem.optionId] || false}
                            onChange={onChangeCheckbox}
                            name={cartItem.optionId}
                        />
                    }
                />
            </TableCell>

            <TableCell width="60%" align="center">
                <Stack direction={"row"}>
                    <ImageBox width={150} height={150} src={goodsThumbnail} style={{marginLeft: 20}} />
                    <Stack ml={4} direction="column" alignItems="flex-start" justifyContent="center">
                        <Typography fontSize={20} fontWeight={700} mb={1}>
                            {goodsName}
                        </Typography>
                        <Typography fontSize={14} mb={1}>
                            {cartItem.optionValue.toLocaleString("ko")} 원
                        </Typography>
                        <Stack direction="row" alignItems="center" justifyContent="center">
                            {cartItem.optionName}
                        </Stack>
                    </Stack>
                </Stack>
            </TableCell>

            <TableCell width={120} align="center">
                <CountController
                    idx={idx}
                    optionId={cartItem.optionId}
                    count={cartItem.count}
                    defaultPrice={cartItem.price}
                    price={cartItem.optionValue}
                    selectValueList={cartItemList}
                    setSelectValueList={setCartItemList}
                />
            </TableCell>

            <TableCell align="center">{(cartItem.optionValue * cartItem.count).toLocaleString("ko")} 원</TableCell>
        </>
    )
}
