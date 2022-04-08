import {nanoid} from "nanoid"

export type MyPageModifyFormProps = {
    // 문의자 정보
    email: string //이메일
    name: string //이름*
    phoneNumber: string // 휴대전화번호*
    birth: string //생년월일
    postCode: string //우편번호
    address: string //기본주소
    addressDetailed: string //상세주소
}

export const MyPageModifyFormDefaultData: MyPageModifyFormProps = {
    email: "",
    name: "",
    phoneNumber: "",
    birth: "1990-01-01",
    postCode: "우편번호",
    address: "기본주소",
    addressDetailed: "",
}
