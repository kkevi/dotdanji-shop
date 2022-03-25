import React from "react"

import {
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Checkbox,
    Typography,
    Divider,
    Button,
    Stack,
} from "@mui/material"
import useStyles from "./style"

import CartList from "./CartList"
import ImageBox from "Components/image-box/ImageBox"

type CartSection1Props = {
    setStep: (val: number) => void
}

export default function CartSection1(prop: CartSection1Props) {
    const classes = useStyles()
    const {setStep} = prop

    const tableTitle = ["제품정보", "수량", "주문금액", "배송비"]

    const fakeGoodsList = [
        {
            count: 1,
            price: 10000,
            options: {
                id: "goodsNo.1",
                title: "교재세트",
                value: 10000,
                option: ["교재 10권 + e-book 세트", "교재 7권 + e-book 세트"],
            },
        },
        {
            count: 1,
            price: 100000,
            options: {
                id: "goodsNo.2",
                title: "스마트 교구",
                value: 100000,
                option: ["기본"],
            },
        },
        {
            count: 3,
            price: 30000,
            options: {
                id: "goodsNo.3",
                title: "스티커북",
                value: 10000,
                option: ["분홍 10매", "노랑 10매"],
            },
        },
    ]

    return (
        <>
            <Stack className={classes.rootStack}>
                <Typography variant="h5" mb={1} ml={1} fontWeight={700} alignSelf="flex-start">
                    제품
                </Typography>
                <Button sx={{color: "black"}}>선택상품 삭제</Button>
            </Stack>
            <Divider className={classes.divider} flexItem />

            {/* 장바구니 목록 */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                // indeterminate={numSelected > 0 && numSelected < rowCount} //전체체크 여부 만들어주는 거
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
                    {fakeGoodsList.map(({count, options, price}, idx) => {
                        return (
                            <TableRow key={"tableRow" + idx} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                <CartList idx={idx} count={count} price={price} option={options} />
                                {idx === 0 && (
                                    <TableCell rowSpan={fakeGoodsList.length + 1} align="center">
                                        배송비
                                    </TableCell>
                                )}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

            <Divider className={classes.divider} flexItem />

            {/* 총 결제 금액 계산 */}
            <Stack my={4} py={3} px={38} className={classes.rootStack}>
                <Stack className={classes.columnStack}>
                    <Typography mb={0.5}>총 주문금액</Typography>
                    <Typography fontSize={26} fontWeight={700}>
                        230,000 원
                    </Typography>
                </Stack>
                <ImageBox width={24} height={24} src="/icons/icon-add.png" />
                <Stack className={classes.columnStack}>
                    <Typography mb={0.5}>배송비</Typography>
                    <Typography fontSize={26} fontWeight={700}>
                        2,500 원
                    </Typography>
                </Stack>
                <ImageBox width={24} height={24} src="/icons/icon-equal.png" />
                <Stack className={classes.columnStack}>
                    <Typography mb={0.5}>총 결제금액</Typography>
                    <Typography fontSize={26} fontWeight={700}>
                        232,500 원
                    </Typography>
                </Stack>
            </Stack>

            {/* 주문결제버튼 */}
            <Stack className={classes.rootStack} width={"50% !important"} mb={16}>
                <Button variant="contained" fullWidth onClick={() => {}}>
                    <Typography variant="h6">쇼핑 계속하기</Typography>
                </Button>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                        // setStep(1)
                    }}
                >
                    <Typography variant="h6">주문하기</Typography>
                </Button>
            </Stack>
        </>
    )
}
