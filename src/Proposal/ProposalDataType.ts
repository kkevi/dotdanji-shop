import {nanoid} from "nanoid"

export type ProposalFormProps = {
    // 담당자 및 회사 정보
    id: string
    agree: boolean
    operation: string // 회사명*
    name: string // 담당자명*
    phoneNumber: string // 휴대전화번호*
    email: string // 이메일*
    homepage: string | null // 홈페이지*
    operationFile: File | null // 회사소개서 파일*
    // 제휴/제안 내용
    title: string // 제목*
    content: string // 내용*
    proposalFile: File | null // 제안서 파일
}

export const proposalFormDefaultData: ProposalFormProps = {
    // 담당자 및 회사 정보
    id: nanoid(),
    agree: false,
    operation: "",
    name: "",
    phoneNumber: "",
    email: "",
    homepage: "",
    operationFile: null,
    // 제휴/제안 내용
    title: "",
    content: "",
    proposalFile: null,
}

type File = {
    fileSize: number
    fileName: string
    downloadUrl: string | ArrayBuffer | null
}
