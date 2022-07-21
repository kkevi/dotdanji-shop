import {Stack, Typography} from "@mui/material"
import {CartOptionsType} from "types/cart-type"
import ImageBox from "components/image-box/ImageBox"
import React, {useEffect, useState} from "react"
import {GoodsItemDefaultData} from "types/goods-type"

type CartListProps = {
    index: number
    cartItem: CartOptionsType
}

export default function CartTableItem(props: CartListProps) {
    const {index, cartItem} = props
    const [listThumbnail, setListThumbnail] = useState(GoodsItemDefaultData.listThumbnail)
    const [goodsName, setGoodsName] = useState("")

    useEffect(() => {
        loadGoodsData()
    }, [])

    const loadGoodsData = async () => {
        try {
            //TODO: 제품정보 가져오기
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Stack
            key={"cart-table" + index}
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
            <ImageBox width={80} height={80} src={listThumbnail} />
        </Stack>
    )
}
