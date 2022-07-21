import {useState} from "react"
import {GoodsItemDefaultData, GoodsItemType} from "types/goods-type"
import BestSellerMobile from "./BestSellerMobile"
import BestSellerWeb from "./BestSellerWeb"

type Props = {
    isMobile: boolean
}

export default function BestSeller(props: Props) {
    const {isMobile} = props
    const [bestSellerList, setBestSellerList] = useState<GoodsItemType[]>([GoodsItemDefaultData])

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
