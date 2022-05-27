import {useState} from "react"
import {GOODS_ITEMS_DATA} from "src/Components/fake-data/fake-goods"
import {GoodsItemType} from "types/goods-type"
import BestSellerMobile from "./BestSellerMobile"
import BestSellerWeb from "./BestSellerWeb"

type Props = {
    isMobile: boolean
}

export default function BestSeller(props: Props) {
    const {isMobile} = props
    const [bestSellerList, setBestSellerList] = useState<GoodsItemType[]>(GOODS_ITEMS_DATA)

    return (
        <>
            {isMobile ? (
                <BestSellerMobile bestSellerList={bestSellerList} />
            ) : (
                <BestSellerWeb bestSellerList={bestSellerList} />
            )}
        </>
    )
}
