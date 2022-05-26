/*
 * 공지사항
 *
 */

export interface NoticeDetailProps {
    noticeId: string
    title: string
    content: string
    date: string
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
 * 내정보 수정
 *
 */

export type MyPageModifyFormProps = {
    email: string //이메일
    name: string //이름*
    phoneNumber: string // 휴대전화번호*
    birth: string //생년월일
    postCode: string //우편번호*
    address: string //기본주소*
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

export type CategoryTypeKey = "info" | "pay" | "goods" | "book" | "order" | "etc"

export const categoryList: Record<CategoryTypeKey, string> = {
    info: "회원정보",
    pay: "결제",
    goods: "기기",
    book: "교재",
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

/*
 * 이벤트
 *
 */

export interface EventDetailProps {
    eventId: string
    title: string
    content: string
    startDate: string
    endDate: string
}
