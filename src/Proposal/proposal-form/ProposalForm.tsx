import React, {useRef} from "react"
import {Typography, TextField, Stack, Button} from "@mui/material"
import useStyles from "../styles"
import {ProposalFormProps as formProps} from "../ProposalDataType"

import {CustomedTextField} from "components/customed-textfield/CustomedTextField"

type ProposalFormProps = {
    formData: formProps
    setFormData: React.Dispatch<React.SetStateAction<formProps>>
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeOperationFile: (val: React.ChangeEvent<HTMLInputElement>) => void
    onChangeProposalFile: (val: React.ChangeEvent<HTMLInputElement>) => void
    mobile: boolean
}

export default function ProposalForm(props: ProposalFormProps) {
    const {formData, setFormData, onChangeInput, onChangeOperationFile, onChangeProposalFile, mobile} = props
    const classes = useStyles()
    const operaionFileInputRef = useRef<HTMLInputElement>(null)
    const proposalFileInputRef = useRef<HTMLInputElement>(null)

    return (
        <Stack flexDirection="column" justifyContent="center">
            <Stack flexDirection={mobile ? "column" : "row"} my={2}>
                <Typography variant="subtitle1" fontWeight={700} width={200} mb={mobile ? 2 : 0}>
                    담당자 및 회사 정보
                </Typography>
                <Stack width={mobile ? "100%" : 700}>
                    <CustomedTextField
                        required
                        label="회사명"
                        name="operation"
                        value={formData.operation}
                        onChange={onChangeInput}
                    />
                    <CustomedTextField
                        required
                        label="담당자명"
                        name="name"
                        value={formData.name}
                        onChange={onChangeInput}
                    />
                    <CustomedTextField
                        required
                        type="number"
                        label="전화번호"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={onChangeInput}
                    />
                    <CustomedTextField
                        required
                        type="email"
                        label="메일주소"
                        name="email"
                        value={formData.email}
                        onChange={onChangeInput}
                    />
                    <CustomedTextField
                        label="홈페이지"
                        name="homepage"
                        value={formData.homepage}
                        onChange={onChangeInput}
                    />
                    <Stack flexDirection="row">
                        <CustomedTextField
                            className={classes.lastTextField}
                            disabled
                            defaultValue={"회사 소개서 첨부"}
                            value={formData.operationFile?.fileName}
                        />
                        <Button
                            className={classes.button2}
                            variant="outlined"
                            onClick={() => operaionFileInputRef.current && operaionFileInputRef.current.click()}
                        >
                            첨 부
                        </Button>
                        <input
                            ref={operaionFileInputRef}
                            type="file"
                            name="featuredImg"
                            style={{display: "none"}}
                            accept=".pdf, .doc, .docx, .ppt, .pptx, image/jpg, image/png"
                            multiple={false}
                            onChange={onChangeOperationFile}
                        />
                    </Stack>
                    <Typography variant="caption" mt={1} ml={1}>
                        파일은 10MB까지 첨부가능합니다. (PDF, DOC, DOCX, PPT, PPTX, PNG, JPG)
                    </Typography>
                    <Typography variant="caption" ml={1}></Typography>
                </Stack>
            </Stack>

            <Stack flexDirection={mobile ? "column" : "row"} mt={4} mb={mobile ? 2 : 8}>
                <Typography variant="subtitle1" fontWeight={700} width={200}>
                    제휴/제안 내용
                </Typography>
                <Stack width={mobile ? "100%" : 700}>
                    <CustomedTextField
                        required
                        label="제휴/제안 제목"
                        name="title"
                        value={formData.title}
                        onChange={onChangeInput}
                    />
                    <CustomedTextField
                        required
                        multiline
                        rows={10}
                        label="제휴/제안 내용"
                        name="content"
                        value={formData.content}
                        onChange={onChangeInput}
                    />
                    <Stack flexDirection="row">
                        <CustomedTextField
                            className={classes.lastTextField}
                            disabled
                            defaultValue="제휴/제안서 첨부"
                            value={formData.proposalFile?.fileName}
                        />
                        <Button
                            className={classes.button2}
                            variant="outlined"
                            onClick={() => proposalFileInputRef.current && proposalFileInputRef.current.click()}
                        >
                            첨 부
                        </Button>
                        <input
                            ref={proposalFileInputRef}
                            type="file"
                            name="featuredImg"
                            style={{display: "none"}}
                            accept=".pdf, .doc, .docx, .ppt, .pptx, image/jpg, image/png"
                            multiple={false}
                            onChange={onChangeProposalFile}
                        />
                    </Stack>
                    <Typography variant="caption" mt={1} ml={1}>
                        파일은 10MB까지 첨부가능합니다. (PDF, DOC, DOCX, PPT, PPTX, PNG, JPG)
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
