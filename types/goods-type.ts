/*
 * 상품 카테고리
 *
 */
export interface GoodsCategoryType {
    categoryId: string
    title: string
}

/*
 * 상품 정보
 *
 */
export interface GoodsItemType {
    productId: string //필수
    categoryId: string //필수
    listThumbnail: string //필수
    detailThumbnails: string[]
    mainColor: string
    options: OptionsType[]
    name: string //필수
    tags: string[]
    infoText: string //필수
    infoImage: string
    price: number
    sale: number
}

export type OptionsType = {
    optionId: string
    name: string
    addPlace: number
}

export const GoodsItemDefaultData: GoodsItemType = {
    productId: "",
    categoryId: "",
    listThumbnail: "",
    detailThumbnails: [],
    mainColor: "#fff",
    options: [{optionId: "", name: "test", addPlace: 1000}],
    name: "",
    tags: [""],
    infoText: "",
    infoImage: "",
    price: 1000000000000,
    sale: 0,
}
