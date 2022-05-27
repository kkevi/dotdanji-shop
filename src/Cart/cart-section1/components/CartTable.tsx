import {Table, TableHead, TableBody, TableRow, TableCell, FormControlLabel, Checkbox} from "@mui/material"
import {CartOptionsType} from "types/cart-type"
import CartTableItem from "./CartTableItem"

type Props = {
    cartItemList: CartOptionsType[]
    setCartItemList: React.Dispatch<React.SetStateAction<CartOptionsType[]>>
    totalPrice: number
    deliveryPrice: 0 | 3000
    //check
    checkList: Record<string, boolean>
    setCheckList: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
    checkAll: boolean
    onCheckAll: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CartTable(props: Props) {
    const {cartItemList, checkAll, onCheckAll, setCartItemList, totalPrice, deliveryPrice, checkList, setCheckList} =
        props

    const tableTitle = ["제품정보", "수량", "주문금액", "배송비"]

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
                            <CartTableItem
                                index={index}
                                cartItem={cartItem}
                                cartItemList={cartItemList}
                                checkList={checkList}
                                setCartItemList={setCartItemList}
                                onChangeCheckbox={onChangeCheckbox}
                            />
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
