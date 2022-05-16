/*
 * 상품 카테고리
 *
 */
export interface GoodsCategoryProps {
    categoryId: string
    title: string
}

/*
 * 상품 정보
 *
 */
export interface GoodsItemProps {
    goodsId: string //필수
    categoryId: string //필수
    thumbnails: Thumbnail //필수
    options: OptionsType[]
    name: string //필수
    tags: string[]
    infoText: string //필수
    infoHtml: string
    price: number
    sale: number
}

export type Thumbnail = {
    images: string[]
    bgColor: string
}

export type OptionsType = {
    optionId: string
    name: string
    addPlace: number
}
