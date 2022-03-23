import React from "react"

import {TableRow, TableCell, Checkbox, Typography, Stack} from "@mui/material"

type CartListProps = {
    idx: number
    length: number
}

export default function CartList(props: CartListProps) {
    const {idx, length} = props

    return (
        <>
            <TableRow key={"tableRow" + idx} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                <Checkbox />
                <TableCell align="center">
                    {/* <Typography>사진</Typography> */}
                    <Stack direction="column">
                        <Typography>제목</Typography>
                        <Typography>원가</Typography>
                        <Stack direction="row">
                            <Typography>선택옵션</Typography>
                            <Typography>선택옵션</Typography>
                        </Stack>
                    </Stack>
                </TableCell>
                <TableCell align="center">수량조절 컴포넌트</TableCell>
                <TableCell align="center">10,000원</TableCell>
                <TableCell align="center">배송비...</TableCell>
            </TableRow>
        </>
    )
}
