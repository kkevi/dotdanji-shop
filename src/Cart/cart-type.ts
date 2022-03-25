export type Options = {
    optionId: string
    text: string
    value: number
}

export type OptionCart = {
    option: Options
    price: number
    count: number
}

export interface CartItemProps {
    goodsId: string
    name: string
    thumbnail: string
    options: OptionCart[]
}
