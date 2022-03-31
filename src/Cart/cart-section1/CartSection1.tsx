import React, {useCallback, useEffect, useState} from "react"

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
    FormControlLabel,
} from "@mui/material"
import useStyles from "./style"

import CartList from "./CartList"
import ImageBox from "Components/image-box/ImageBox"

import {CartItemProps, OptionCart} from "Cart/cart-type"
import {CART_ITEMS_DATA} from "Components/fake-data/fake-cart"

type CartSection1Props = {
    onChangeNextStep: (index: number) => void
}

export type CartOptionsType = {
    goodsId: string
    count: number
    price: number
    optionId: string
    optionName: string
    optionValue: number
}

export default function CartSection1(props: CartSection1Props) {
    const classes = useStyles()
    const {onChangeNextStep} = props
    //장바구니 데이터 표시
    const tableTitle = ["제품정보", "수량", "주문금액", "배송비"]
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    //실제 구매 데이터 생성
    const [choiceList, setChoiceList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [checkAll, setCheckAll] = useState(true)
    const [potalPrice, setPotalPrice] = useState<number>(0)
    const deliveryPrice = 2500

    useEffect(() => {
        loadData()
    }, [])

    useEffect(() => {
        setChoiceList(choiceList)
    }, [cartItemList, choiceList])

    //장바구니 데이터 가져오기
    const loadData = async () => {
        try {
            const result = await CART_ITEMS_DATA
            const list: CartOptionsType[] = []
            result.map((itm, idx) =>
                list.push(
                    ...itm.options.reduce((acc, cur) => {
                        acc.push({
                            goodsId: itm.goodsId,
                            count: cur.count,
                            price: cur.price,
                            optionId: cur.option.optionId,
                            optionName: cur.option.text,
                            optionValue: cur.option.value,
                        })
                        return acc
                    }, [] as CartOptionsType[]),
                ),
            )
            setCartItemList(list)
            list.map(({optionId}) => (choiceList[optionId] = true))
        } catch (e) {
            console.log(e)
        } finally {
        }
    }

    //체크박스 선택된 제품만
    const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChoiceList({
            ...choiceList,
            [event.target.name]: event.target.checked,
        })
    }
    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckAll(event.target.checked)
        for (const [key, value] of Object.entries(choiceList)) {
            choiceList[key] = event.target.checked
        }
    }

    //주문하기 버튼 클릭
    const onClickOrder = () => {
        onChangeNextStep(1)
    }

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
                            <FormControlLabel
                                label=""
                                color="primary"
                                control={
                                    <Checkbox
                                        checked={checkAll}
                                        // indeterminate={}
                                        onChange={onCheckAll}
                                    />
                                }
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
                    {cartItemList?.map((cartItem, idx) => {
                        return (
                            <TableRow key={"tableRow" + idx} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                <CartList
                                    idx={idx}
                                    cartItem={cartItem}
                                    cartItemList={cartItemList}
                                    checkList={choiceList}
                                    setCartItemList={setCartItemList}
                                    onChangeCheckbox={onChangeCheckbox}
                                />
                                {idx === 0 && (
                                    <TableCell rowSpan={cartItemList.length + 1} align="center">
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
                        {potalPrice.toLocaleString()} 원
                    </Typography>
                </Stack>

                <ImageBox width={24} height={24} src="/icons/icon-add.png" />

                <Stack className={classes.columnStack}>
                    <Typography mb={0.5}>배송비</Typography>
                    <Typography fontSize={26} fontWeight={700}>
                        {potalPrice >= 50000 || potalPrice === 0 ? 0 : deliveryPrice.toLocaleString()} 원
                    </Typography>
                </Stack>

                <ImageBox width={24} height={24} src="/icons/icon-equal.png" />

                <Stack className={classes.columnStack}>
                    <Typography mb={0.5}>총 결제금액</Typography>
                    <Typography fontSize={26} fontWeight={700}>
                        {potalPrice === 0 ? 0 : (potalPrice + deliveryPrice).toLocaleString()} 원
                    </Typography>
                </Stack>
            </Stack>

            {/* 주문결제버튼 */}
            <Stack className={classes.rootStack} width={"50% !important"} mb={16}>
                <Button variant="contained" fullWidth onClick={() => {}}>
                    <Typography variant="h6">쇼핑 계속하기</Typography>
                </Button>
                <Button variant="contained" fullWidth onClick={onClickOrder}>
                    <Typography variant="h6">주문하기</Typography>
                </Button>
            </Stack>
        </>
    )
}
