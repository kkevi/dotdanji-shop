/*
 * 상품 카테고리
 *
 */
export interface ProductCategoryType {
    categoryId: string
    title: string
}

/*
 * 상품 정보
 *
 */
export interface ProductItemType {
    status?: boolean //필수
    productId: string //필수
    categoryId: string //필수
    listThumbnail: string //필수
    detailThumbnails: string[]
    mainColor: string //필수
    options: OptionsType[]
    name: string //필수
    tags: string[]
    infoText: string //필수
    infoImage: string
    price: number
    discount: number
}

export type OptionsType = {
    optionId: string
    optionName: string
    surcharge: number
}

export const ProductItemDefaultData: ProductItemType = {
    status: false,
    productId: "",
    categoryId: "",
    listThumbnail: "",
    detailThumbnails: [],
    mainColor: "#fff",
    options: [],
    name: "",
    tags: [""],
    infoText: "",
    infoImage: "",
    price: 0,
    discount: 0,
}
