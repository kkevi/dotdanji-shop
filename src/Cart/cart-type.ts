export type OptionCart = {
    optionId: string
    count: number
}

export interface CartItemProps {
    goodsId: string
    options: OptionCart[]
}
