import {Stack, Typography} from "@mui/material"
import ImageBox from "components/image-box/ImageBox"
import useStyles from "../../CartListPageWeb/style"

type Props = {
    deliveryPrice: number
    totalPrice: number
}

export default function TotalPrice(props: Props) {
    const classes = useStyles()
    const {deliveryPrice, totalPrice} = props

    return (
        <Stack mt={6} mb={4} px={4} className={classes.rootStack}>
            <Stack className={classes.columnStack}>
                <Typography fontSize={12} mb={0.5}>
                    총 주문금액
                </Typography>
                <Typography fontSize={18} fontWeight={700}>
                    {totalPrice.toLocaleString()} 원
                </Typography>
            </Stack>

            <ImageBox width={20} height={20} src="/icons/icon-add.png" />

            <Stack className={classes.columnStack}>
                <Typography fontSize={12} mb={0.5}>
                    배송비
                </Typography>
                <Typography fontSize={18} fontWeight={700}>
                    {deliveryPrice.toLocaleString()} 원
                </Typography>
            </Stack>

            <ImageBox width={20} height={20} src="/icons/icon-equal.png" />

            <Stack className={classes.columnStack}>
                <Typography fontSize={12} mb={0.5}>
                    총 결제금액
                </Typography>
                <Typography fontSize={18} fontWeight={700}>
                    {totalPrice === 0 ? 0 : (totalPrice + deliveryPrice).toLocaleString()} 원
                </Typography>
            </Stack>
        </Stack>
    )
}
