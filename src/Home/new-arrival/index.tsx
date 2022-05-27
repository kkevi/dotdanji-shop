import {useMediaQuery, useTheme} from "@mui/material"
import {useState} from "react"
import {GOODS_ITEMS_DATA} from "src/Components/fake-data/fake-goods"
import {GoodsItemType} from "types/goods-type"
import NewArrivalMobile from "./NewArrivalMobile"
import NewArrivalWeb from "./NewArrivalWeb"

type Props = {
    isMobile: boolean
}

export default function NewArrival(props: Props) {
    const {isMobile} = props
    const [newArrivalList, setNewArrivalList] = useState<GoodsItemType[]>(GOODS_ITEMS_DATA)

    return (
        <>
            {isMobile ? (
                <NewArrivalMobile newArrivalList={newArrivalList} />
            ) : (
                <NewArrivalWeb newArrivalList={newArrivalList} />
            )}
        </>
    )
}
