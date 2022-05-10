import React, {useState} from "react"
import {Stack, TableCell, Typography, Button} from "@mui/material"

import useStyles from "../style"
import ImageBox from "Component/image-box/ImageBox"
import OrderReturnModal from "./OrderReturnModal"

type OredrListTableItemProps = {
    goodsId: string
    count: number
    price: number
    optionId: string
    optionName: string
    optionValue: string
    orderDate: string
    shippingState: string
}

export default function OredrListTableItem() {
    const classes = useStyles()

    const [visibleModal, setVisibleModal] = useState(false)

    return (
        <>
            <OrderReturnModal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
            <TableCell width="45%" align="center">
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
                <Stack direction="column">
                    <Typography fontSize={15} fontWeight={600} color="#333">
                        300,000 원
                    </Typography>
                    <Typography fontSize={13} color="#777777">
                        1 개
                    </Typography>
                </Stack>
            </TableCell>

            <TableCell align="center">
                <Typography fontSize={15} fontWeight={600} color="#333">
                    2021-04-14
                </Typography>
            </TableCell>

            <TableCell align="center">
                <Typography fontSize={15} fontWeight={600} color="#333">
                    20220414001001
                </Typography>
            </TableCell>

            <TableCell align="center">
                <Typography fontSize={15} fontWeight={600} color="#333">
                    배송중
                </Typography>
            </TableCell>

            <TableCell align="center">
                <Stack direction="column" spacing={1}>
                    <Button className={classes.smallButton} variant="outlined" onClick={() => setVisibleModal(true)}>
                        환불/반품
                    </Button>
                    <Button className={classes.smallButton} variant="outlined" onClick={() => {}}>
                        재구매
                    </Button>
                </Stack>
            </TableCell>
        </>
    )
}
