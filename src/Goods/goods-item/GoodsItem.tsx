import {useCallback, useState} from "react"
import {useRouter} from "next/router"
import useStyles from "./styles"
import {GoodsItemProps} from "../goods-type"
//component
import {IconButton, Typography, ButtonBase} from "@mui/material"
import ImageBox from "components/image-box/ImageBox"
//icon
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import ShareIcon from "@mui/icons-material/Share"
import useStore from "store/useStore"

type props = {
    data: GoodsItemProps
}

export default function GoodsItem(props: props) {
    const {goodsId, categoryId, thumbnails, name, price, sale, isFavor, isCart} = props.data
    const classes = useStyles()
    const route = useRouter()
    const {userStore} = useStore()
    //state
    const [favorState, setFavorState] = useState(isFavor)
    const [cartState, setCartState] = useState(isCart)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    //할인 계산식
    var resultPrice = price - price * (sale / 100)

    //상세페이지 이동
    const onClickRouter = () => {
        route.push({pathname: "/goods/detail", query: {goodsId: goodsId}})
    }

    //찜하기 버튼 클릭
    const onClickFavorBtn = () => {
        if (!userStore.isLoggedIn) {
            return alert("로그인 후 이용이 가능합니다.")
        }
        doFavor(goodsId, isFavor)
        setFavorState(it => !it)
    }

    // 찜하기 저장 - 서버 전송
    const doFavor = useCallback(
        async (goodsId: string, newFavor: boolean) => {
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
        [goodsId],
    )

    return (
        <div className={classes.root}>
            <div className={classes.thumbnail}>
                <ButtonBase onClick={onClickRouter} disabled={disabled}>
                    <ImageBox src={thumbnails.images[0]} height="400px" />
                </ButtonBase>

                <div className={classes.iconButtonList}>
                    <IconButton size="small" onClick={onClickFavorBtn}>
                        {favorState ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
                    </IconButton>
                    <IconButton size="small">
                        <ShareIcon />
                    </IconButton>
                </div>
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
