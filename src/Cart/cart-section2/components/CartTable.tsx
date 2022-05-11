import {Table, TableHead, TableBody, TableRow, TableCell} from "@mui/material"
import {CartOptionsType} from "src/Cart/cart-type"
import CartTableItem from "./CartTableItem"

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
                    {tableTitle.map((title, idx) => (
                        <TableCell key={"tableTitle" + idx} sx={{fontSize: ".9rem", padding: 2}} align="center">
                            {title}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>

            <TableBody>
                {cartItemList?.map((cartItem, idx) => {
                    return (
                        <TableRow key={"tableRow" + idx} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                            <CartTableItem idx={idx} cartItem={cartItem} />
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
                })}
            </TableBody>
        </Table>
    )
}
