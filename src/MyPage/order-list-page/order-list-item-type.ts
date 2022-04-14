export type OrderListType = {
    goodsId: string
    count: number
    price: number
    optionId: string
    optionName: string
    optionValue: number
    orderDate: string
    shippingState: string
}

type CategoryList = {
    key: number
    label: string
}

export type CategoryTypeKey =
    | "cancel"
    | "optionChange"
    | "unsatisfactoryGoods"
    | "soldoutGoods"
    | "deliveryDelayed"
    | "deliveryMissing"
    | "misDelivery"
    | "etc"

export const categoryList: Record<CategoryTypeKey, string> = {
    cancel: "구매의사 취소",
    optionChange: "옵션 변경",
    unsatisfactoryGoods: "상품 불만족",
    soldoutGoods: "상품 품절",
    deliveryDelayed: "배송 지연",
    deliveryMissing: "배송 누락",
    misDelivery: "오배송",
    etc: "기타",
}
