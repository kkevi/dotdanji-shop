import {Stack, Typography} from "@mui/material"
import {CartOptionsType} from "types/cart-type"
import {GOODS_ITEMS_DATA} from "components/fake-data/fake-goods"
import ImageBox from "components/image-box/ImageBox"
import React, {useEffect, useState} from "react"

type CartListProps = {
    idx: number
    cartItem: CartOptionsType
}

export default function CartTableItem(props: CartListProps) {
    const {idx, cartItem} = props
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
        <Stack
            key={"cart-table" + idx}
            width="100%"
            direction="row"
            justifyContent="space-between"
            py={3}
            sx={{borderBottom: "1px solid #D3D3D3"}}
        >
            <Stack direction="row" alignItems="flex-start">
                <Stack direction="column">
                    {/* 상품명 */}
                    <Typography fontWeight={700} mb={0.2}>
                        {goodsName}
                    </Typography>
                    {/* 옵션정보 */}
                    <Stack direction="row" alignItems="center" sx={{color: "#999"}} mb={1.5}>
                        <Typography fontSize={12} mr={1}>
                            {cartItem.optionName}
                        </Typography>
                        {cartItem.optionAddPlace > 0 && (
                            <Typography fontSize={12}>+{cartItem.optionAddPlace.toLocaleString("ko")}원</Typography>
                        )}
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <Typography fontSize={14} fontWeight={800} color="#333" mr={1}>
                            {cartItem.count}개
                        </Typography>
                        <Typography fontSize={14} fontWeight={800} color="#333">
                            {(cartItem.price * cartItem.count).toLocaleString("ko")} 원
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <ImageBox width={80} height={80} src={goodsThumbnail} />
        </Stack>
    )
}
