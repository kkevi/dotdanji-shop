import React, {useRef} from "react"
import {Typography, TextField, Stack, Button} from "@mui/material"
import useStyles from "../styles"
import {ProposalFormProps as formProps} from "../ProposalDataType"

type ProposalFormProps = {
    formData: formProps
    setFormData: React.Dispatch<React.SetStateAction<formProps>>
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeOperationFile: (val: React.ChangeEvent<HTMLInputElement>) => void
    onChangeProposalFile: (val: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ProposalForm(props: ProposalFormProps) {
    const {formData, setFormData, onChangeInput, onChangeOperationFile, onChangeProposalFile} = props
    const classes = useStyles()
    const operaionFileInputRef = useRef<HTMLInputElement>(null)
    const proposalFileInputRef = useRef<HTMLInputElement>(null)

    return (
        <Stack flexDirection="column" justifyContent="center">
            <Stack flexDirection="row" my={2}>
                <Typography variant="subtitle1" fontWeight={700} width={200}>
                    담당자 및 회사 정보
                </Typography>
                <Stack width={700}>
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        label="회사명"
                        name="operation"
                        value={formData.operation}
                        onChange={onChangeInput}
                    />
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        label="담당자명"
                        name="name"
                        value={formData.name}
                        onChange={onChangeInput}
                    />
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        type="number"
                        label="전화번호"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={onChangeInput}
                    />
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        type="email"
                        label="메일주소"
                        name="email"
                        value={formData.email}
                        onChange={onChangeInput}
                    />
                    <TextField
                        className={classes.textField}
                        fullWidth
                        label="홈페이지"
                        name="homepage"
                        value={formData.homepage}
                        onChange={onChangeInput}
                    />
                    <Stack flexDirection="row">
                        <TextField
                            className={classes.lastTextField}
                            disabled
                            fullWidth
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

            <Stack flexDirection="row" mt={4} mb={8}>
                <Typography variant="subtitle1" fontWeight={700} width={200}>
                    제휴/제안 내용
                </Typography>
                <Stack width={700}>
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        label="제휴/제안 제목"
                        name="title"
                        value={formData.title}
                        onChange={onChangeInput}
                    />
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        multiline
                        rows={10}
                        label="제휴/제안 내용"
                        name="content"
                        value={formData.content}
                        onChange={onChangeInput}
                    />
                    <Stack flexDirection="row">
                        <TextField
                            className={classes.lastTextField}
                            disabled
                            fullWidth
                            defaultValue="제휴/제안서 첨부"
                            value={formData.proposalFile?.fileName}
                            // label="제휴/제안서 첨부"
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
