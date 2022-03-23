import React from "react"

import {Table, TableHead, TableRow, TableBody, TableCell, Checkbox, Typography, Divider} from "@mui/material"

import CartList from "./CartList"

export default function CartSection1() {
    const tableTitle = ["제품정보", "수량", "주문금액", "배송비"]

    const test = [0, 1, 2]

    return (
        <>
            <Typography variant="h5" mb={1} ml={1} fontWeight={700} alignSelf="flex-start">
                제품
            </Typography>
            <Divider sx={{backgroundColor: "black", height: 1}} flexItem />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                // indeterminate={numSelected > 0 && numSelected < rowCount}
                                // checked={rowCount > 0 && numSelected === rowCount}
                                // onChange={onSelectAllClick}
                            />
                        </TableCell>
                        {tableTitle.map((title, idx) => (
                            <TableCell key={"tableTitle" + idx} sx={{fontSize: ".9rem", padding: 2}} align="center">
                                {title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {test.map((itm, idx) => {
                        return <CartList idx={idx} length={test.length} />
                    })}
                    {/* {list !== undefined &&
                                list.length > 0 &&
                                list.map((data, idx) => (
                                    <TableListItem key={data.id} data={data} idx={idx} onClickDelete={onClickDelete} />
                                ))} */}
                </TableBody>
            </Table>
        </>
    )
}
