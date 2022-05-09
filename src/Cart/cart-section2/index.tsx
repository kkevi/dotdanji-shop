import React, {useEffect, useState} from "react"
import {Typography, Divider, Button, Stack} from "@mui/material"
import useStyles from "./style"
import {useTheme} from "@mui/system"

import {CART_ITEMS_DATA} from "Components/fake-data/fake-cart"
import {GOODS_ITEMS_DATA} from "Components/fake-data/fake-goods"
import {CartOptionsType} from "Cart/cart-type"
import CartTable from "./components/CartTable"
import CartForm from "./components/CartForm"
import CartPayment from "./components/CartPayment"

type Props = {
    onChangeNextStep: (index: number) => void
}

export default function CartSection2(props: Props) {
    const theme = useTheme()
    const classes = useStyles()
    const {onChangeNextStep} = props

    //장바구니 데이터 표시
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    /*
    실제 구매 데이터 생성
    {optionId:선택여부}
    */
    const [checkList, setCheckList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    //배송비 - 50,000원이상 무료
    const deliveryPrice = totalPrice >= 50000 ? 0 : 2500

    const onClickOrder = () => {
        onChangeNextStep(2)
    }

    /*
     * 총 금액 계산
     */
    useEffect(() => {
        console.log("checkList", checkList)
        console.log("cartItemList", cartItemList)
        _handleDisplayPrice()
    }, [cartItemList])

    const _handleDisplayPrice = () => {
        setTotalPrice(
            Object.entries(checkList).reduce((acc, cur) => {
                const data = cartItemList.filter(it => it.optionId === cur[0])[0]
                if (cur[1]) {
                    acc += data.price * data.count
                }
                return acc
            }, 0),
        )
    }

    /*
     * 장바구니 데이터 가져오기
     */
    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        try {
            const list: CartOptionsType[] = []
            //카트 정보 = goodsId,optionId,count
            const result = await CART_ITEMS_DATA

            result.map((itm, idx) => {
                //해당 id의 상품 정보를 가져온다.
                const goodsId = itm.goodsId
                const goodsData = GOODS_ITEMS_DATA.filter(it => it.goodsId === goodsId)[0]
                const optionData = goodsData.options || []

                //새로운 장바구니 리스트 생성
                list.push(
                    ...itm.options.reduce((acc, cur) => {
                        //상품의 옵셥정보를 optionId로 맵핑
                        const data = optionData.filter(it => it.optionId === cur.optionId)[0]
                        acc.push({
                            goodsId: goodsId,
                            count: cur.count,
                            price: goodsData.price + data.value,
                            optionId: cur.optionId,
                            optionName: data.text,
                            optionValue: data.value,
                        })
                        return acc
                    }, [] as CartOptionsType[]),
                )
            })

            setCartItemList(list)

            // list.map(({optionId}) => (checkList[optionId] = true))
        } catch (e) {
            console.log(e)
        } finally {
            console.log(cartItemList)
        }
    }

    return (
        <>
            <Stack sx={{width: "100%"}}>
                <Typography
                    variant="h5"
                    mb={1}
                    sx={{alignSelf: "flex-start"}}
                    className="pointFont"
                    color={theme.palette.secondary.dark}
                >
                    # 상품정보
                </Typography>
            </Stack>
            <Divider className={classes.divider} flexItem />

            {/* 장바구니 목록 */}
            <CartTable cartItemList={cartItemList} totalPrice={totalPrice} deliveryPrice={deliveryPrice} />

            <Divider className={classes.divider} flexItem />

            <CartForm />

            <CartPayment />

            {/* <Stack className={classes.rootStack} mb={16}>
                <Button variant="contained" onClick={onClickOrder} disableElevation>
                    <Typography variant="h6">결제하기</Typography>
                </Button>
            </Stack> */}
        </>
    )
}
