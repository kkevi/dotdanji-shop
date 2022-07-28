import {Typography, Button} from "@mui/material"
import {useRouter} from "next/router"
import {useLocalStorage} from "react-use"
import {CartItemProps, CartOptionsType, OptionCart} from "types/cart-type"
import {OptionsType} from "types/product-type"
import useStyles from "./style"

type Props = {
    selectValueList: OptionCart[]
    options: OptionsType[]
    productId: string
    price: number
    mobile?: boolean
}

export default function AddCartButton(props: Props) {
    const route = useRouter()
    const classes = useStyles()
    const {selectValueList, options, productId, price, mobile = false} = props
    const [cartData, setCartData] = useLocalStorage<CartItemProps[]>("cartData", [])

    //장바구니 담기 클릭
    const onCickCart = async () => {
        if (selectValueList.length < 1) return alert("옵션을 선택 해주세요.")

        try {
            //TODO: 서버 장바구니에 저장 기능 추가
            const data = selectValueList.reduce((acc: CartItemProps[], cur: OptionCart) => {
                acc.push({
                    productId: productId,
                    options: {
                        optionId: cur.optionId,
                        count: cur.count,
                    },
                })
                return acc
            }, [])

            if (!cartData) {
                // 기존 장바구니가 비어있을 경우
                await setCartData(data)
                if (confirm("장바구니를 확인하시겠습니까?")) await route.push("/cart")
            } else {
                // 장바구니에 하나라도 값이 있을 경우
                const parseCartData = cartData

                const data_OptionIds = data.map(itm => {
                    return itm.options.optionId
                })
                const cartData_OptionIds = parseCartData.map(itm => {
                    return itm.options.optionId
                })
                const comparing = data_OptionIds.filter(it => cartData_OptionIds.includes(it))
                if (comparing.length === 0) {
                    // 없을 경우
                    const newCartData = [...data, ...parseCartData]
                    await setCartData(newCartData)
                    if (confirm("장바구니를 확인하시겠습니까?")) await route.push("/cart")
                } else {
                    // 동일한 옵션이 있을 경우
                    if (confirm("장바구니에 동일한 상품이 존재합니다. 장바구니로 이동하시겠습니까?")) {
                        return route.push("/cart")
                    }
                }
            }
        } catch (e) {
            console.log("e:", e)
        }
    }

    return (
        <>
            {mobile ? (
                <Button className={classes.mobileButton} fullWidth onClick={onCickCart} disableElevation>
                    <Typography>장바구니 담기</Typography>
                </Button>
            ) : (
                <Button variant="contained" sx={{height: 55}} fullWidth onClick={onCickCart} disableElevation>
                    <Typography variant="h6">장바구니 담기</Typography>
                </Button>
            )}
        </>
    )
}
