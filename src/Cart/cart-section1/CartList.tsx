import React from "react"
import {TableCell, Checkbox, Typography, Stack} from "@mui/material"

import ImageBox from "Components/image-box/ImageBox"
import CountController from "Components/count-controller/CountController"

type CartListProps = {
    idx: number
    count: number
    price: number
    option: any
}

export default function CartList(props: CartListProps) {
    const {idx, count, price, option} = props

    return (
        <>
            <TableCell padding="checkbox">
                <Checkbox color="primary" />
            </TableCell>
            <TableCell width="60%" align="center">
                <Stack direction={"row"}>
                    <ImageBox width={150} height={150} src="/images/fake/sun-moon.png" style={{marginLeft: 20}} />
                    <Stack ml={4} direction="column" alignItems="flex-start" justifyContent="center">
                        <Typography fontSize={20} fontWeight={700} mb={1}>
                            {option.title}
                        </Typography>
                        <Typography fontSize={14} mb={1}>
                            {option.value.toLocaleString("ko")} 원
                        </Typography>
                        <Stack direction="row" alignItems="center" justifyContent="center">
                            {option.option.map((itm, idx) => (
                                <Typography fontSize={14} mb={1} mr={1}>
                                    {itm}
                                    {idx === option.option.length - 1 ? "" : ", "}
                                </Typography>
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </TableCell>
            <TableCell width={120} align="center">
                <CountController
                    idx={idx}
                    option={option}
                    count={count}
                    price={price}
                    selectValueList={[]}
                    setSelectValueList={() => {}}
                />
            </TableCell>
            <TableCell align="center">{(option.value * count).toLocaleString("ko")} 원</TableCell>
        </>
    )
}
