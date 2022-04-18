export type CartFormProps = {
    // 문의자 정보
    name: string //이름*
    postCode: string //우편번호*
    address: string //기본주소*
    addressDetailed: string //상세주소
    phoneNumber: string // 휴대전화번호*
    phoneNumber2: string // 휴대전화번호*
    memo: string //배송요청사항
}

export const CartFormDefaultData: CartFormProps = {
    name: "",
    postCode: "우편번호",
    address: "기본주소",
    addressDetailed: "",
    phoneNumber: "",
    phoneNumber2: "",
    memo: "",
}
