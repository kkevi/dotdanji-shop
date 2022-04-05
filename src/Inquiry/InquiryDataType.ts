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

export const categoryList = {0: "회원정보", 1: "결제", 2: "기기", 3: "교재", 4: "배송", 5: "기타"}

type CategoryList = {
    key: number
    label: string
}

type ImageFile = {
    fileSize: number
    fileName: string
    downloadUrl: string | ArrayBuffer | null
}
