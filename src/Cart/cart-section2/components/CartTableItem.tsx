import {Stack, TableCell, Typography} from "@mui/material"
import {CartOptionsType} from "types/cart-type"
import {GOODS_ITEMS_DATA} from "components/fake-data/fake-goods"
import ImageBox from "components/image-box/ImageBox"
import React, {useEffect, useState} from "react"

type CartListProps = {
    index: number
    cartItem: CartOptionsType
}

export default function CartTableItem(props: CartListProps) {
    const {index, cartItem} = props
    const [goodsThumbnail, setGoodsThumbnail] = useState("")
    const [goodsName, setGoodsName] = useState("")

    useEffect(() => {
        loadGoodsData()
    }, [])

    const loadGoodsData = async () => {
        try {
            //제품정보 가져오기
            const goods = await GOODS_ITEMS_DATA.filter(it => it.goodsId === cartItem.goodsId)
            setGoodsThumbnail(goods[0].thumbnails)
            setGoodsName(goods[0].name)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <TableCell width="60%" align="center">
                <Stack direction={"row"}>
                    {/* 상품 이미지 */}
                    <ImageBox width={150} height={150} src={goodsThumbnail} style={{marginLeft: 20}} />

                    <Stack ml={4} direction="column" alignItems="flex-start" justifyContent="center">
                        {/* 상품명 */}
                        <Typography fontSize={20} fontWeight={700} mb={1}>
                            {goodsName}
                        </Typography>

                        {/* 옵션정보 */}
                        <Stack direction="row" alignItems="center" justifyContent="center" mt={2}>
                            <Typography color="#999" fontSize={14}>
                                옵션정보
                            </Typography>
                            <Stack borderLeft="1px solid #ddd" height="100%" mx={1} />
                            <Typography fontSize={14} mr={1}>
                                {cartItem.optionName}
                            </Typography>
                            {cartItem.optionAddPlace > 0 && (
                                <Typography fontSize={14} color="#999">
                                    +{cartItem.optionAddPlace.toLocaleString("ko")}원
                                </Typography>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </TableCell>

            <TableCell width={120} align="center">
                <Typography fontSize={20} fontWeight={700} mb={1}>
                    {cartItem.count}
                </Typography>
            </TableCell>

            <TableCell align="center">
                <Typography fontSize={15} fontWeight={800} color="#333" mr={2}>
                    {(cartItem.price * cartItem.count).toLocaleString("ko")} 원
                </Typography>
            </TableCell>
        </>
    )
}
