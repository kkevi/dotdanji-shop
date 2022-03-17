export interface GoodsItemProps {
    goodsId: string
    categoryId: string
    thumnails: string[]
    option?: string[]
    name: string
    price: number
    sale: number
    isFavor: boolean
    isCart: boolean
}

export interface GoodsCategoryProps {
    categoryId: string
    title: string
}
