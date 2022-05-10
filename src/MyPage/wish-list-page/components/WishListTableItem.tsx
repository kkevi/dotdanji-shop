import React from "react"
import {Checkbox, FormControlLabel, Stack, TableCell, Typography} from "@mui/material"
import ImageBox from "Component/image-box/ImageBox"

type WishListTableItemProps = {
    idx: number
    // wishItem: CartOptionsType
    wishItemList: any[]
    setWishItemList: React.Dispatch<React.SetStateAction<any[]>>
    checkList: Record<string, boolean>
    onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function WishListTableItem(props: WishListTableItemProps) {
    const {wishItemList, setWishItemList, checkList, onChangeCheckbox} = props

    return (
        <>
            <TableCell padding="checkbox">
                <FormControlLabel
                    color="primary"
                    label=""
                    control={
                        <Checkbox
                            // checked={checkList[cartItem.optionId] || false}
                            onChange={onChangeCheckbox}
                            // name={cartItem.optionId}
                        />
                    }
                />
            </TableCell>

            <TableCell width="60%" align="center">
                <Stack direction={"row"}>
                    {/* 상품 이미지 */}
                    <ImageBox width={150} height={150} src={"/"} style={{marginLeft: 20}} />

                    <Stack ml={4} direction="column" alignItems="flex-start" justifyContent="center">
                        {/* 상품명 */}
                        <Typography fontSize={20} fontWeight={700} mb={1}>
                            이름
                        </Typography>

                        {/* 옵션정보 */}
                        <Stack direction="row" alignItems="center" justifyContent="center" mt={2}>
                            <Typography color="#999" fontSize={14}>
                                옵션정보
                            </Typography>
                            <Stack borderLeft="1px solid #ddd" height="100%" mx={1} />
                            <Typography fontSize={14} mr={1}>
                                옵션정보
                            </Typography>
                            {/* {cartItem.optionValue > 0 && (
                                <Typography fontSize={14} color="#999">
                                    +{cartItem.optionValue.toLocaleString("ko")}원
                                </Typography>
                            )} */}
                        </Stack>
                    </Stack>
                </Stack>
            </TableCell>

            <TableCell align="center">
                <Typography fontSize={15} fontWeight={800} color="#333">
                    1 개
                </Typography>
            </TableCell>

            <TableCell align="center">
                <Typography fontSize={15} fontWeight={800} color="#333">
                    1000 원
                </Typography>
            </TableCell>
        </>
    )
}
