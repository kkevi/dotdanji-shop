import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material"
import {GoodsItemProps} from "Goods/goods-type"
import {useCallback, useState} from "react"
import {toast} from "react-toastify"

type Props = {
    open: boolean
    onClose: () => void
    data: GoodsItemProps
}

export default function GoodsCartDialog(props: Props) {
    const {open, onClose, data} = props
    const [loading, setLoading] = useState(false)

    // 장바구니 저장 - 서버 전송
    const doCart = useCallback(
        async (id: string) => {
            setLoading(true)
            try {
                // const {count} = await api
                toast("장바구니에 저장되었습니다.")
            } catch (err: any) {
                return console.log(err)
            } finally {
                setLoading(false)
            }
        },
        [], //api
    )

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                <Typography>간편 장바구니</Typography>
            </DialogTitle>
            <DialogContent dividers>
                <Typography>{data.name}</Typography>
                <Typography>옵션을 선택해주세요.</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>닫기</Button>
                <Button>장바구니 추가</Button>
            </DialogActions>
        </Dialog>
    )
}
