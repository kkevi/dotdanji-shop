export interface CartItemProps {
    goodsId: string
    options: OptionCart[]
}

export type OptionCart = {
    optionId: string
    count: number
}

export type CartOptionsType = {
    goodsId: string
    count: number
    price: number
    optionId: string
    optionName: string
    optionValue: number
}
