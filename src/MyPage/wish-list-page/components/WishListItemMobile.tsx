import React, {useState} from "react"
import {Checkbox, FormControlLabel, Stack, Typography} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"

type OrderListItemProps = {
    goodsId: string
    count: number
    price: number
    optionId: string
    optionName: string
    optionValue: string
    orderDate: string
    shippingState: string
}

export default function WishListItemMobile() {
    return (
        <>
            <Stack direction={"row"} py={2}>
                <FormControlLabel
                    sx={{alignSelf: "flex-start"}}
                    color="primary"
                    label=""
                    control={
                        <Checkbox
                            sx={{pt: 0}}
                            //  checked={checkList[cartItem.optionId] || false}
                            //  onChange={onChangeCheckbox}
                            //  name={cartItem.optionId}
                            //  sx={{pt: 0}}
                        />
                    }
                />
                {/* 상품 이미지 */}
                <ImageBox width={100} height={100} src={"/"} />

                <Stack ml={2} direction="column" alignItems="flex-start" justifyContent="flex-start">
                    {/* 상품명 */}
                    <Typography fontSize={18} fontWeight={700} mb={0.2}>
                        상품명
                    </Typography>

                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        sx={{color: "#999"}}
                        mb={1.2}
                    >
                        <Typography fontSize={12} mr={1}>
                            옵션정보
                        </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <Typography fontSize={15} fontWeight={800} color="#333" mr={1}>
                            1개
                        </Typography>

                        <Typography fontSize={15} fontWeight={800} color="#333">
                            30,000 원
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
