//상품 카테고리
export interface GoodsCategoryProps {
    categoryId: string
    title: string
}

//상품 데이터
export interface GoodsItemProps {
    goodsId: string //필수
    categoryId: string //필수
    thumbnails: Thumbnail //필수
    options?: OptionsType[]
    name: string //필수
    tags: string[]
    infoText: string //필수
    infoHtml: string
    price: number
    sale: number
    isFavor: boolean
    isCart: boolean
}

export type Thumbnail = {
    images: string[]
    bgColor: string
}

export type OptionsType = {
    optionId: string
    text: string
    value: number
}
