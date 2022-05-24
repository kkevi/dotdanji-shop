import React, {useState} from "react"
import {Stack, TableCell, Typography, Button} from "@mui/material"

import useStyles from "../style"
import ImageBox from "components/image-box/ImageBox"
// import OrderReturnModal from "./OrderReturnModal"

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

export default function OrderListItem() {
    const classes = useStyles()

    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <>
            {/* <OrderReturnModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} /> */}

            <Stack direction={"row"}>
                {/* 상품 이미지 */}
                <ImageBox width={80} height={80} src={"/"} />

                <Stack ml={1} direction="column" alignItems="flex-start" justifyContent="flex-start">
                    {/* 상품명 */}
                    <Typography fontWeight={700} mb={0.2}>
                        이름
                    </Typography>

                    {/* 옵션정보 */}
                    <Stack direction="row" alignItems="center" sx={{color: "#999"}} mb={1.5}>
                        <Typography color="#999" fontSize={12} mr={1}>
                            옵션정보
                        </Typography>
                    </Stack>
                    {/* {cartItem.optionValue > 0 && (
                            <Typography fontSize={14} color="#999">
                                +{cartItem.optionValue.toLocaleString("ko")}원
                            </Typography>
                        )} */}
                    <Stack direction="row" alignItems="center">
                        <Typography fontSize={14} color="#333" mr={1}>
                            1개
                        </Typography>
                        <Typography fontSize={14} fontWeight={600} color="#333">
                            300,000 원
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Typography fontSize={14} fontWeight={600} color="#333">
                2021-04-14
            </Typography>

            <Typography fontSize={14} fontWeight={600} color="#333">
                20220414001001
            </Typography>

            <Typography fontSize={14} fontWeight={600} color="#333">
                배송중
            </Typography>

            <Stack direction="column" spacing={1}>
                <Button className={classes.smallButton} variant="outlined" onClick={() => setVisibleModal(true)}>
                    환불/반품
                </Button>
                <Button className={classes.smallButton} variant="outlined" onClick={() => {}}>
                    재구매
                </Button>
            </Stack>
        </>
    )
}
