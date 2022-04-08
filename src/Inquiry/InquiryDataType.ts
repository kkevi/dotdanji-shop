import {nanoid} from "nanoid"

export type InquiryFormProps = {
    // 문의자 정보
    id: string
    category: CategoryList //카테고리*
    name: string // 이름*
    email: string // 이메일*
    phoneNumber: string // 휴대전화번호*
    // 제휴/제안 내용
    title: string // 제목*
    content: string // 내용*
    imageFile: ImageFile | null // 이미지 파일
    agree: boolean
}

export const inquiryFormDefaultData: InquiryFormProps = {
    // 담당자 및 회사 정보
    id: nanoid(),
    category: {
        key: 0,
        label: "",
    },
    name: "",
    email: "",
    phoneNumber: "",
    // 제휴/제안 내용
    title: "",
    content: "",
    imageFile: null,
    agree: false,
}

type CategoryList = {
    key: number
    label: string
}

type ImageFile = {
    fileSize: number
    fileName: string
    downloadUrl: string | ArrayBuffer | null
}

export type CategoryTypeKey = "info" | "pay" | "goods" | "book" | "order" | "etc"

export const categoryList: Record<CategoryTypeKey, string> = {
    info: "회원정보",
    pay: "결제",
    goods: "기기",
    book: "교재",
    order: "배송",
    etc: "기타",
}
