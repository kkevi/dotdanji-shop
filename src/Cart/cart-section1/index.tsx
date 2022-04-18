import React, {useEffect, useState} from "react"
import {Typography, Divider, Button, Stack} from "@mui/material"
import {toast} from "react-toastify"
import useStyles from "./style"
import {useTheme} from "@mui/system"

import TotalPrice from "./components/TotalPrice"
import CartTable from "./components/CartTable"
import {CART_ITEMS_DATA} from "Components/fake-data/fake-cart"
import {GOODS_ITEMS_DATA} from "Components/fake-data/fake-goods"
import {CartOptionsType} from "Cart/cart-type"

type Props = {
    onChangeNextStep: (index: number) => void
}

export default function CartSection1(props: Props) {
    const classes = useStyles()
    const theme = useTheme()
    const {onChangeNextStep} = props
    //장바구니 데이터 표시
    const [cartItemList, setCartItemList] = useState<CartOptionsType[]>([])
    /*
    실제 구매 데이터 생성
    {optionId:선택여부}
    */
    const [checkList, setCheckList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [checkAll, setCheckAll] = useState(true)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    //배송비 - 50,000원이상 무료
    const deliveryPrice = totalPrice >= 50000 ? 0 : 2500

    /*
     * 총 금액 계산
     */
    useEffect(() => {
        _handleDisplayPrice()
    }, [cartItemList, checkList, checkAll])

    const _handleDisplayPrice = () => {
        setTotalPrice(
            Object.entries(checkList).reduce((acc, cur) => {
                const data = cartItemList.filter(it => it.optionId === cur[0])[0]
                if (cur[1]) {
                    acc += data.price * data.count
                } else if (!cur[1]) {
                    setCheckAll(false)
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

    useEffect(() => {
        console.log("checkList", checkList)
        console.log("cartItemList", cartItemList)
    }, [checkList])

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

            list.map(({optionId}) => (checkList[optionId] = true))
        } catch (e) {
            console.log(e)
        } finally {
            console.log(cartItemList)
        }
    }

    /*
     * 체크기능
     */
    useEffect(() => {
        setCheckList(checkList)
    }, [checkList])

    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckAll(event.target.checked)
        for (const [key, value] of Object.entries(checkList)) {
            checkList[key] = event.target.checked
        }
    }

    //주문하기 버튼 클릭
    const onClickOrder = () => {
        if (totalPrice === 0) return toast.info("상품을 선택해주세요.")
        onChangeNextStep(1)
    }

    const onDeleteCartItem = () => {
        confirm("선택 상품을 모두 삭제하시겠습니까?")
    }

    return (
        <>
            <Stack className={classes.rootStack}>
                <Typography variant="h5" mb={1} className="pointFont" color={theme.palette.secondary.dark}>
                    # 제품
                </Typography>
                <Button sx={{color: "black"}} onClick={onDeleteCartItem}>
                    선택상품 삭제
                </Button>
            </Stack>
            <Divider className={classes.divider} flexItem />

            {/* 장바구니 목록 */}
            <CartTable
                cartItemList={cartItemList}
                setCartItemList={setCartItemList}
                totalPrice={totalPrice}
                deliveryPrice={deliveryPrice}
                //check
                checkList={checkList}
                setCheckList={setCheckList}
                checkAll={checkAll}
                onCheckAll={onCheckAll}
            />

            <Divider className={classes.divider} flexItem />

            {/* 총 결제 금액 계산 */}
            <TotalPrice deliveryPrice={deliveryPrice} totalPrice={totalPrice} />

            {/* 주문결제버튼 */}
            <Stack className={classes.rootStack} width={"50% !important"} mb={16}>
                <Button variant="outlined" fullWidth onClick={() => {}}>
                    <Typography variant="h6">쇼핑 계속하기</Typography>
                </Button>
                <Button variant="contained" fullWidth onClick={onClickOrder} disableElevation>
                    <Typography variant="h6">주문하기</Typography>
                </Button>
            </Stack>
        </>
    )
}
