import {useCallback, useState} from "react"
import {useRouter} from "next/router"
import useStyles from "./styles"
import {toast} from "react-toastify"
import {GoodsItemProps} from "../GoodsType"
//component
import {IconButton, Stack, Typography, ButtonBase} from "@mui/material"
import ImageBox from "Components/ImageBox"
//icon
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined"

type props = {
    data: GoodsItemProps
}

//임시 로그인확인 변수
const isLoggedIn = false

export default function GoodsItem(props: props) {
    const {id, imgUrl, name, price, sale, isFavor, isCart} = props.data
    const classes = useStyles()
    const route = useRouter()
    //state
    const [favorState, setFavorState] = useState(isFavor)
    const [cartState, setCartState] = useState(isCart)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    //할인 계산식
    var resultPrice = price - price * (sale / 100)

    //상세페이지 이동
    const onClickRouter = () => {
        route.push(`/goods/${id}`)
    }

    //찜하기 버튼 클릭
    const onClickFavorBtn = () => {
        if (!isLoggedIn) {
            return alert("로그인 후 이용이 가능합니다.")
        }
        setFavorState(it => !it)
        doFavor(id, isFavor)
    }

    // 찜하기 저장 - 서버 전송
    const doFavor = useCallback(
        async (id: string, newFavor: boolean) => {
            setLoading(true)
            try {
                let newFavorCount = 0
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
        [id], //api
    )

    //장바구니 버튼 클릭
    const onClickCartBtn = () => {
        if (cartState) {
            return alert("이미 장바구니에 있는 상품입니다.")
        }
        doCart(id)
    }

    // 장바구니 저장 - 서버 전송
    const doCart = useCallback(
        async (id: string) => {
            setLoading(true)
            try {
                // const {count} = await api
            } catch (err: any) {
                return console.log(err)
            } finally {
                setCartState(true)
                toast("장바구니에 저장되었습니다.")
                setLoading(false)
            }
        },
        [id], //api
    )

    return (
        <div className={classes.root}>
            <div className={classes.thumnail}>
                <ButtonBase onClick={onClickRouter} disabled={disabled}>
                    <ImageBox src={imgUrl} height="400px" />
                </ButtonBase>

                <Stack direction="row" position="absolute" bottom={0} right="1rem" zIndex={5} bgcolor="#fff">
                    <IconButton size="small" onClick={onClickCartBtn}>
                        <LocalGroceryStoreOutlinedIcon />
                    </IconButton>
                    <IconButton size="small" onClick={onClickFavorBtn}>
                        {favorState ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
                    </IconButton>
                </Stack>
            </div>

            <ButtonBase className={classes.titleArea} onClick={onClickRouter} disabled={disabled}>
                <Typography variant="body2" mt={2}>
                    {sale > 0 && <span>{price} ₩</span>}
                    {`${resultPrice.toLocaleString()} ₩`}
                </Typography>
                <Typography>{name}</Typography>
            </ButtonBase>
        </div>
    )
}
