import {Stack, Typography} from "@mui/material"
import ImageBox from "Component/image-box/ImageBox"
import useStyles from "../style"

type Props = {
    deliveryPrice: number
    totalPrice: number
}

export default function TotalPrice(props: Props) {
    const classes = useStyles()
    const {deliveryPrice, totalPrice} = props

    return (
        <Stack my={4} py={3} px={38} className={classes.rootStack}>
            <Stack className={classes.columnStack}>
                <Typography mb={0.5}>총 주문금액</Typography>
                <Typography fontSize={26} fontWeight={700}>
                    {totalPrice.toLocaleString()} 원
                </Typography>
            </Stack>

            <ImageBox width={24} height={24} src="/icons/icon-add.png" />

            <Stack className={classes.columnStack}>
                <Typography mb={0.5}>배송비</Typography>
                <Typography fontSize={26} fontWeight={700}>
                    {deliveryPrice.toLocaleString()} 원
                </Typography>
            </Stack>

            <ImageBox width={24} height={24} src="/icons/icon-equal.png" />

            <Stack className={classes.columnStack}>
                <Typography mb={0.5}>총 결제금액</Typography>
                <Typography fontSize={26} fontWeight={700}>
                    {totalPrice === 0 ? 0 : (totalPrice + deliveryPrice).toLocaleString()} 원
                </Typography>
            </Stack>
        </Stack>
    )
}
