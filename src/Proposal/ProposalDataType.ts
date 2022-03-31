import {nanoid} from "nanoid"

export type ProposalFormProps = {
    // 담당자 및 회사 정보
    id: string
    operation: string // 회사명*
    name: string // 담당자명*
    phoneNumber: number // 휴대전화번호*
    email: string // 이메일*
    homepage: string | null // 홈페이지*
    operationFile: string | null // 회사소개서 파일*
    // 제휴/제안 내용
    title: string // 제목*
    content: string // 내용*
    proposalFile: string | null // 제안서 파일
}

export const proposalFormDefaultData: ProposalFormProps = {
    // 담당자 및 회사 정보
    id: nanoid(),
    operation: "",
    name: "",
    phoneNumber: 0,
    email: "",
    homepage: "",
    operationFile: null,
    // 제휴/제안 내용
    title: "",
    content: "",
    proposalFile: null,
}

type Imgfile = {
    fileSize: number
    fileName: string
    downloadUrl: string | ArrayBuffer | null
}
