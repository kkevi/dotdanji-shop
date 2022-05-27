import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"
import OredrListTableItem from "./OredrListTableItem"

export default function OredrListTable() {
    const tableTitle = ["제품정보", "결제금액", "주문일", "주문번호", "주문상태", "기타"]

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
                <TableRow key={"tableRow"}>
                    <OredrListTableItem />
                </TableRow>
            </TableBody>
        </Table>
    )
}
