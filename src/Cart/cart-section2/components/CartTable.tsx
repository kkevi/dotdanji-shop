import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"

import {CartOptionsType} from "types/cart-type"
import CartTableItem from "./CartTableItem"
import React from "react"

type Props = {
    cartItemList: CartOptionsType[]
    totalPrice: number
    deliveryPrice: 0 | 3000
}

export default function CartTable(props: Props) {
    const {cartItemList, totalPrice, deliveryPrice} = props

    const tableTitle = ["제품정보", "수량", "주문금액", "배송비"]

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {tableTitle.map((title, index) => (
                        <TableCell key={"tableTitle" + index} sx={{fontSize: ".9rem", padding: 2}} align="center">
                            {title}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>

            <TableBody>
                {cartItemList?.map((cartItem, index) => {
                    return (
                        <TableRow key={"tableRow" + index} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                            <CartTableItem index={index} cartItem={cartItem} />
                            {index === 0 && (
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
                })}
            </TableBody>
        </Table>
    )
}
