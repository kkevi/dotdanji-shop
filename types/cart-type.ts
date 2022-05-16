/*
 * 장바구니 저장되어 있는 데이터
 *
 */
export interface CartItemProps {
    goodsId: string
    options: OptionCart[]
}

export type OptionCart = {
    optionId: string
    count: number
}

/*
 * 장바구니 표시하는 데이터
 *
 */
export type CartOptionsType = {
    goodsId: string
    optionId: string
    count: number
    price: number
    optionName: string
    optionAddPlace: number
}

/*
 * 주문 form type
 *
 */

export type CartFormProps = {
    name: string //이름*
    postCode: string //우편번호*
    address: string //기본주소*
    addressDetailed: string //상세주소
    phoneNumber: string // 휴대전화번호*
    phoneNumber2: string // 휴대전화번호*
    memo: string //배송요청사항
    payment: string //결제방법*
    agree: boolean //약관동의*
}

export const CartFormDefaultData: CartFormProps = {
    name: "",
    postCode: "우편번호",
    address: "기본주소",
    addressDetailed: "",
    phoneNumber: "",
    phoneNumber2: "",
    memo: "",
    payment: "",
    agree: false,
}
