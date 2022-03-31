//상품 카테고리
export interface GoodsCategoryProps {
    categoryId: string
    title: string
}

//상품 데이터
export interface GoodsItemProps {
    goodsId: string
    categoryId: string
    thumbnails: Thumbnail
    options?: Options[]
    name: string
    infoText: string
    tags: string[]
    price: number
    sale: number
    isFavor: boolean
    isCart: boolean
}

export type Thumbnail = {
    images: string[]
    bgColor: string
}

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

//상품 장바구니 데이터
export interface CartItemProps {
    goodsId: string
    name: string
    thumbnail: string
    options: OptionCart[]
}
