import {Checkbox, FormControlLabel, Stack, TableCell, Typography} from "@mui/material"
import {CartOptionsType} from "types/cart-type"
import CountController from "components/count-controller/CountController"
import ImageBox from "components/image-box/ImageBox"
import React, {useEffect, useState} from "react"
import {ProductItemDefaultData} from "types/product-type"

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
    const [goodsThumbnail, setGoodsThumbnail] = useState<string>(ProductItemDefaultData.listThumbnail)
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
                            {cartItem.surcharge > 0 && (
                                <Typography fontSize={14} color="#999">
                                    +{cartItem.surcharge.toLocaleString("ko")}원
                                </Typography>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </TableCell>

            <TableCell width={120} align="center">
                <CountController
                    index={index}
                    optionId={cartItem.optionId}
                    count={cartItem.count}
                    valueList={cartItemList}
                    setValueList={setCartItemList}
                />
            </TableCell>

            <TableCell align="center">
                <Typography fontSize={15} fontWeight={800} color="#333" mr={2}>
                    {(cartItem.price * cartItem.count).toLocaleString("ko")} 원
                </Typography>
            </TableCell>
        </>
    )
}
