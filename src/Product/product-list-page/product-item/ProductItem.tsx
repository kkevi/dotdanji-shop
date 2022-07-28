import {useCallback, useEffect, useState} from "react"
import {useRouter} from "next/router"
import useStyles from "./styles"
import {ProductItemType} from "types/product-type"
//component
import {IconButton, Typography, ButtonBase} from "@mui/material"
import ImageBox from "components/image-box/ImageBox"
//icon
import {toast} from "react-toastify"

type props = {
    data: ProductItemType
    mobile: boolean
}

export default function ProductItem(props: props) {
    const {productId, categoryId, listThumbnail, name, price, discount} = props.data
    const {mobile} = props
    const classes = useStyles()
    const route = useRouter()
    //state
    const [favorState, setFavorState] = useState(false)
    const [cartState, setCartState] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultPrice, setResultPrice] = useState(0)

    const isLoggedIn = false

    useEffect(() => {
        if (discount !== undefined && discount !== 0) setResultPrice(price - price * (discount / 100))
        else setResultPrice(price)
    }, [price, discount, resultPrice])

    //할인 계산식

    //상세페이지 이동
    const onClickRouter = () => {
        route.push({pathname: "/product/detail", query: {productId: productId}})
    }

    //공유하기 버튼 클릭
    const onClickShare = () => {
        toast.info("상품 url주소가 복사되었습니다.")
    }

    //찜하기 버튼 클릭
    const onClickFavorBtn = () => {
        if (!isLoggedIn) {
            return alert("로그인 후 이용이 가능합니다.")
        }
        doFavor(productId, false)
        setFavorState(it => !it)
    }

    // 찜하기 저장 - 서버 전송
    const doFavor = useCallback(
        async (productId: string, newFavor: boolean) => {
            setLoading(true)
            try {
                if (newFavor) {
                    // const {count} = await api
                    // newFavorCount = count
                } else {
                    // const {count} = await api
                    // newFavorCount = count
                }
            } catch (err: any) {
                return console.log(err)
            } finally {
                setLoading(false)
            }
        },
        [productId],
    )

    return (
        <div className={classes.root}>
            <div className={classes.thumbnail}>
                <ButtonBase onClick={onClickRouter} disabled={disabled}>
                    {listThumbnail && <ImageBox src={listThumbnail} height={mobile ? "180px" : "400px"} />}
                </ButtonBase>

                <div className={mobile ? classes.iconButtonListMobile : classes.iconButtonList}>
                    <IconButton onClick={onClickFavorBtn}>
                        {favorState ? (
                            <ImageBox width={mobile ? 23 : 30} height={mobile ? 23 : 30} src="/icons/icon-heart.png" />
                        ) : (
                            <ImageBox width={mobile ? 23 : 30} height={mobile ? 23 : 30} src="/icons/icon-heart2.png" />
                        )}
                    </IconButton>
                    <IconButton onClick={onClickShare}>
                        <ImageBox width={mobile ? 28 : 32} height={mobile ? 28 : 32} src="/icons/icon-share.png" />
                    </IconButton>
                </div>
            </div>

            <ButtonBase className={classes.titleArea} onClick={onClickRouter} disabled={disabled}>
                <Typography fontSize={mobile ? 12 : 14} variant="body2" mt={2}>
                    {discount > 0 && <span>{price} 원</span>}
                    {`${resultPrice.toLocaleString()} 원`}
                </Typography>
                <Typography fontSize={mobile ? 14 : 16}>{name}</Typography>
            </ButtonBase>
        </div>
    )
}
