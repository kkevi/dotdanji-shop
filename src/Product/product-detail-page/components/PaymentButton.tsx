import {Button, Typography} from "@mui/material"
import {useRouter} from "next/router"
import {CartOptionsType, OptionCart} from "types/cart-type"
import {OptionsType} from "types/product-type"
import useStyles from "./style"

type Props = {
    selectValueList: OptionCart[]
    options: OptionsType[]
    productId: string
    price: number
    mobile?: boolean
}

export default function PaymentButton(props: Props) {
    const route = useRouter()
    const classes = useStyles()
    const {selectValueList, options, productId, price, mobile = false} = props
    const logoutTest = true

    //바로 구매하기 클릭
    const onClickBuy = async () => {
        if (logoutTest) {
            return alert("로그인 후 이용이 가능합니다.")
        }
        if (selectValueList.length < 1) return alert("옵션을 선택 해주세요.")

        try {
            const data = selectValueList.reduce((acc: CartOptionsType[], cur: OptionCart, index) => {
                const goodsOptionData = options.filter(it => it.optionId === cur.optionId)[0]
                acc.push({
                    productId: productId,
                    count: cur.count,
                    price: (goodsOptionData.surcharge + price) * cur.count,
                    optionId: cur.optionId,
                    optionName: goodsOptionData.optionName,
                    surcharge: goodsOptionData.surcharge,
                })
                return acc
            }, [])
            route.push({pathname: "/cart", query: {sectionNum: "1"}})
        } catch (e) {
            console.log("e:", e)
        }
    }

    return (
        <>
            {mobile ? (
                <Button className={classes.mobileButton} fullWidth onClick={onClickBuy} disableElevation>
                    <Typography>바로 구매하기</Typography>
                </Button>
            ) : (
                <Button variant="contained" sx={{height: 55}} fullWidth onClick={onClickBuy} disableElevation>
                    <Typography variant="h6">바로 구매하기</Typography>
                </Button>
            )}
        </>
    )
}
