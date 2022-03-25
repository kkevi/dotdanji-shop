//상품 카테고리
export interface GoodsCategoryProps {
    categoryId: string
    title: string
}

//상품 데이터
export interface GoodsItemProps {
    goodsId: string
    categoryId: string
    thumnails: Thumnail
    options?: Options[]
    name: string
    infoText: string
    price: number
    sale: number
    isFavor: boolean
    isCart: boolean
}

export type Thumnail = {
    images: string[]
    bgColor: string
}

export type Options = {
    optionId: string
    text: string
    value: string
}

export type OptionCart = {
    option: Options
    price: number
    count: number
}

//상품 장바구니 데이터
export interface CartItemProps {
    goodsId: string
    selectOption: Options[]
}
