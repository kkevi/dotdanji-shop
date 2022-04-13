import React, {useState} from "react"
import {Table, TableHead, TableBody, TableRow, TableCell, FormControlLabel, Checkbox} from "@mui/material"

import WishListTableItem from "./WishListTableItem"

type WishListTableType = {
    wishItemList: any
    setWishItemList: React.Dispatch<React.SetStateAction<any>>
    //check
    checkList: Record<string, boolean>
    setCheckList: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
    checkAll: boolean
    onCheckAll: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function WishListTable(props: WishListTableType) {
    const {wishItemList, setWishItemList, checkList, setCheckList, checkAll, onCheckAll} = props
    const tableTitle = ["제품정보", "수량", "주문금액"]

    //체크박스 선택된 제품만
    const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckList({
            ...checkList,
            [event.target.name]: event.target.checked,
        })
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <FormControlLabel
                            label=""
                            color="primary"
                            control={<Checkbox checked={checkAll} onChange={onCheckAll} />}
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
                    <WishListTableItem
                        // idx={idx}
                        // cartItem={cartItem}
                        wishItemList={wishItemList}
                        setWishItemList={setWishItemList}
                        checkList={checkList}
                        onChangeCheckbox={onChangeCheckbox}
                    />
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
