import React from "react"
import {Table, TableHead, TableBody, TableRow, TableCell, FormControlLabel, Checkbox} from "@mui/material"

import WishListTableItem from "./WishListTableItem"

export default function WishListTable() {
    const tableTitle = ["제품정보", "수량", "주문금액"]

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <FormControlLabel
                            label=""
                            color="primary"
                            control={<Checkbox />}
                            // checked={checkAll} onChange={onCheckAll}
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
                {/* {cartItemList?.map((cartItem, idx) => {
                return (
                    <TableRow key={"tableRow" + idx} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                        <CartTableItem
                            idx={idx}
                            cartItem={cartItem}
                            cartItemList={cartItemList}
                            checkList={checkList}
                            setCartItemList={setCartItemList}
                            onChangeCheckbox={onChangeCheckbox}
                        />
                        {idx === 0 && (
                            <TableCell
                                rowSpan={cartItemList.length + 1}
                                align="center"
                                sx={{borderLeft: "1px solid #eee"}}
                            >
                                {totalPrice >= 50000 ? "5만원이상 무료" : `${deliveryPrice.toLocaleString()}원`}
                            </TableCell>
                        )}
                    </TableRow>
                )
            })} */}

                <TableRow key={"tableRow"} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                    <WishListTableItem />
                    {/* {idx === 0 && (
                            <TableCell
                                rowSpan={cartItemList.length + 1}
                                align="center"
                                sx={{borderLeft: "1px solid #eee"}}
                            >
                                {totalPrice >= 50000 ? "5만원이상 무료" : `${deliveryPrice.toLocaleString()}원`}
                            </TableCell>
                        )} */}
                </TableRow>
            </TableBody>
        </Table>
    )
}
