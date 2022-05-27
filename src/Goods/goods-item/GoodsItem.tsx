import {useCallback, useState} from "react"
import {useRouter} from "next/router"
import useStyles from "./styles"
import {GoodsItemType} from "types/goods-type"
//component
import {IconButton, Typography, ButtonBase} from "@mui/material"
import ImageBox from "components/image-box/ImageBox"
//icon
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import ShareIcon from "@mui/icons-material/Share"
import useStore from "store/useStore"
import {toast} from "react-toastify"

type props = {
    data: GoodsItemType
    mobile: boolean
}

export default function GoodsItem(props: props) {
    const {goodsId, categoryId, thumbnails, name, price, sale} = props.data
    const {mobile} = props
    const classes = useStyles()
    const route = useRouter()
    const {userStore} = useStore()
    //state
    const [favorState, setFavorState] = useState(false)
    const [cartState, setCartState] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    //할인 계산식
    var resultPrice = price - price * (sale / 100)

    //상세페이지 이동
    const onClickRouter = () => {
        route.push({pathname: "/goods/detail", query: {goodsId: goodsId}})
    }

    //공유하기 버튼 클릭
    const onClickShare = () => {
        toast.info("상품 url주소가 복사되었습니다.")
    }

    //찜하기 버튼 클릭
    const onClickFavorBtn = () => {
        if (!userStore.isLoggedIn) {
            return alert("로그인 후 이용이 가능합니다.")
        }
        doFavor(goodsId, false)
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
                    <ImageBox src={thumbnails.images[0]} height={mobile ? "180px" : "400px"} />
                </ButtonBase>

                <div className={mobile ? classes.iconButtonListMobile : classes.iconButtonList}>
                    <IconButton onClick={onClickFavorBtn}>
                        {favorState ? (
                            <FavoriteRoundedIcon sx={{fontSize: mobile ? 16 : 24}} />
                        ) : (
                            <FavoriteBorderRoundedIcon sx={{fontSize: mobile ? 16 : 24}} />
                        )}
                    </IconButton>
                    <IconButton onClick={onClickShare}>
                        <ShareIcon sx={{fontSize: mobile ? 16 : 24}} />
                    </IconButton>
                </div>
            </div>

            <ButtonBase className={classes.titleArea} onClick={onClickRouter} disabled={disabled}>
                <Typography fontSize={mobile ? 12 : 14} variant="body2" mt={2}>
                    {sale > 0 && <span>{price} 원</span>}
                    {`${resultPrice.toLocaleString()} 원`}
                </Typography>
                <Typography fontSize={mobile ? 14 : 16}>{name}</Typography>
            </ButtonBase>
        </div>
    )
}
