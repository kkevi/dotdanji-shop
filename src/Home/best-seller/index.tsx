import {useState} from "react"
import {ProductItemDefaultData, ProductItemType} from "types/product-type"
import BestSellerMobile from "./BestSellerMobile"
import BestSellerWeb from "./BestSellerWeb"

type Props = {
    isMobile: boolean
}

export default function BestSeller(props: Props) {
    const {isMobile} = props
    const [bestSellerList, setBestSellerList] = useState<ProductItemType[]>([ProductItemDefaultData])

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
