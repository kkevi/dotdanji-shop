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

type Options = {
    optionId: string
    text: string
    value: number
}
