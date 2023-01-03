import {Button, Stack, Typography} from "@mui/material"
import React, {useState} from "react"

import ImageBox from "components/image-box/ImageBox"
import OrderReturnModal from "../components-mobile/OrderReturnModal"
import useStyles from "../style"

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
            <OrderReturnModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />

            <Stack direction={"row"} py={2}>
                {/* 상품 이미지 */}
                <ImageBox width={100} height={100} src={"/"} />

                <Stack ml={1} direction="column" alignItems="flex-start" justifyContent="flex-start">
                    <Stack direction="row" alignItems="center" mb={0.5}>
                        <Typography fontSize={12} fontWeight={600} color="#999" mr={0.5}>
                            2021-04-14 결제 /
                        </Typography>

                        <Typography fontSize={12} fontWeight={600} color="#999">
                            20220414001001
                        </Typography>
                    </Stack>

                    {/* 상품명 */}
                    <Typography fontWeight={700} mb={0.2} mr={1}>
                        이름
                    </Typography>

                    {/* 옵션정보 */}
                    <Stack direction="row" alignItems="center">
                        <Typography color="#999" fontSize={12} mr={0.5} sx={{color: "#999"}}>
                            옵션정보 :
                        </Typography>
                        <Typography fontSize={10} mr={1}>
                            옵션정보
                        </Typography>
                        {/* {cartItem.optionValue > 0 && (
                            <Typography fontSize={14} color="#999">
                                +{cartItem.optionValue.toLocaleString("ko")}원
                            </Typography>
                        )} */}
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <Typography fontSize={12} color="#333" mr={1}>
                            1개
                        </Typography>
                        <Typography fontSize={12} fontWeight={600} color="#333">
                            300,000 원
                        </Typography>
                    </Stack>

                    <Typography fontSize={12} color="#333" mb={2}>
                        배송현황 : 배송중
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" width="100%">
                        <Button
                            className={classes.smallButton}
                            fullWidth
                            variant="outlined"
                            onClick={() => setVisibleModal(true)}
                        >
                            환불/반품
                        </Button>
                        <Button className={classes.smallButton} fullWidth variant="outlined">
                            재구매
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
