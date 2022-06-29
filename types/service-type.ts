/*
 * Top  Tab
 *
 */

export type ServiceBannerType = {
    tabId: ServiceTabKey
    phrase: string
    title: string
    color: string
    image: string
}

export type ServiceTabKey = "notice" | "faq" | "event" | "inquiry"

/*
 * 공지사항
 *
 */

export interface NoticeType {
    noticeId: string
    title: string
    content: string
    date: string
}

export const noticeDefaultData: NoticeType = {
    title: "",
    noticeId: "",
    content: "",
    date: "",
}

/*
 * 문의하기 form type
 *
 */

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
    id: "default-data-0",
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

/*
 * FAQ types
 *
 */

export type FaqDataType = {
    category: CategoryTypeKey
    title: string
    content: string
}

type CategoryList = {
    key: number
    label: string
}

export type CategoryTypeKey = "info" | "pay" | "goods" | "order" | "etc"

export const categoryList: Record<CategoryTypeKey, string> = {
    info: "회원정보",
    pay: "결제",
    goods: "상품",
    order: "배송",
    etc: "기타",
}

/*
 * input image file type
 *
 */

type ImageFile = {
    fileSize: number
    fileName: string
    downloadUrl: string | ArrayBuffer | null
}
