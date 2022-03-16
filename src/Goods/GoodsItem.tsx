import {Typography} from "@mui/material"
import ImageBox from "Components/ImageBox"

type Props = {
    id: string
    imgUrl: string
    name: string
    price: string
}

export default function GoodsItem(props: Props) {
    const {id, imgUrl, name, price} = props
    return (
        <div>
            <ImageBox src={imgUrl} height="400px" />
            <div>
                <Typography>{price}</Typography>
            </div>
            <Typography>{name}</Typography>
        </div>
    )
}
