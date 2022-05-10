import React, {useState} from "react"
import {Typography, Stack, Divider, Button} from "@mui/material"

import {useTheme} from "@mui/system"
import useStyles from "./styles"

import ProposalProcess from "./proposal-process/ProposalProcess"
import ProposalTerms from "./proposal-terms/ProposalTerms"
import ProposalForm from "./proposal-form/ProposalForm"

import {ProposalFormProps, proposalFormDefaultData} from "./ProposalDataType"
import {toast} from "react-toastify"

export default function Index() {
    const theme = useTheme()
    const classes = useStyles()
    const [formData, setFormData] = useState<ProposalFormProps>(proposalFormDefaultData)

    const process = ["등록 및 접수", "제안 내용 검토", "검토결과 회신"]

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onChangeOperationFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files
        const maxSize = 20 * 1024 * 1024 // 20MB
        let reader = new FileReader()
        if (!files || files.length === 0 || files[0].size === 0) return
        else if (files[0]?.size > maxSize) {
            return toast.error("첨부파일 사이즈는 20MB 이내로 등록 가능합니다.")
        } else {
            reader.readAsDataURL(files[0])
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    operationFile: {
                        fileSize: files[0].size,
                        fileName: files[0].name,
                        downloadUrl: reader.result,
                    },
                })
            }
        }
    }

    const onChangeProposalFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files
        const maxSize = 20 * 1024 * 1024 // 20MB
        let reader = new FileReader()
        if (!files || files.length === 0 || files[0].size === 0) return
        else if (files[0]?.size > maxSize) {
            return toast.error("첨부파일 사이즈는 20MB 이내로 등록 가능합니다.")
        } else {
            reader.readAsDataURL(files[0])
            reader.onloadend = () => {
                console.log("you worked well until here", files)
                setFormData({
                    ...formData,
                    proposalFile: {
                        fileSize: files[0].size,
                        fileName: files[0].name,
                        downloadUrl: reader.result,
                    },
                })
            }
        }
    }

    return (
        <Stack>
            <Typography
                className="pointFont"
                color={theme.palette.secondary.dark}
                variant="h4"
                mt={10}
                mb={2}
                fontWeight={800}
            >
                # 심키즈와 함께 성장해요!
            </Typography>
            <Typography variant="h6" color="#757575">
                심키즈와 함께할 수 있는 다양한 제휴&제안을 해주세요.
            </Typography>
            <Typography variant="h6" color="#757575">
                등록하신 내용은 담당자가 검토 후 연락을 드립니다.
            </Typography>

            <Typography
                className="pointFont"
                color={theme.palette.secondary.dark}
                mt={8}
                mb={4}
                fontWeight={800}
                fontSize={22}
            >
                # 제휴/제안 진행과정
            </Typography>

            <Stack flexDirection="row" justifyContent="center" alignItems="center">
                {process.map((itm, idx) => (
                    <ProposalProcess idx={idx} title={itm} key={"ProposalProcess" + idx} />
                ))}
            </Stack>

            {/* 약관동의란 */}
            <Typography
                className="pointFont"
                color={theme.palette.secondary.dark}
                mt={10}
                mb={4}
                fontWeight={800}
                fontSize={22}
            >
                # 개인정보 이용 동의
            </Typography>
            <ProposalTerms formData={formData} setFormData={setFormData} />

            {/* 작성란 */}
            <Typography
                className="pointFont"
                color={theme.palette.secondary.dark}
                mt={10}
                mb={4}
                fontWeight={800}
                fontSize={22}
            >
                # 제휴/제안
            </Typography>
            <ProposalForm
                formData={formData}
                setFormData={setFormData}
                onChangeInput={onChangeInput}
                onChangeOperationFile={onChangeOperationFile}
                onChangeProposalFile={onChangeProposalFile}
            />
            <Divider />
            <Typography mt={2} mb={6} variant="subtitle2" color="#757575">
                ❗️ 등록 전 개인정보와 제휴제안 내용을 다시 한 번 확인 해주세요. 개인정보가 정확하지 않으면 답변이
                어려울 수 있습니다.
            </Typography>

            <Button className={classes.button} sx={{alignSelf: "center"}} variant="outlined" onClick={() => {}}>
                제휴제안 보내기
            </Button>
        </Stack>
    )
}
