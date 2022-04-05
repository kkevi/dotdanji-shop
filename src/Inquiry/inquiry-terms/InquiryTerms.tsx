import React from "react"
import {Typography, Stack, Divider, FormControlLabel, Checkbox} from "@mui/material"

import {InquiryFormProps} from "../InquiryDataType"

type InquiryTermsProps = {
    formData: InquiryFormProps
    setFormData: React.Dispatch<React.SetStateAction<InquiryFormProps>>
}

export default function InquiryTerms({formData, setFormData}: InquiryTermsProps) {
    return (
        <Stack>
            <Typography variant="subtitle2" mb={0.1}>
                심키즈는 개인정보 처리방침에 따라 고객문의를 위한 최소한의 개인정보를 수집 합니다.
            </Typography>
            <Typography variant="subtitle2" mb={1}>
                수집된 개인정보는 고객문의 서비스를 위한 목적으로만 사용하며, 상담게시글 삭제요청이 있을 때까지
                보관합니다.
            </Typography>
            <Typography variant="subtitle2" mb={0.1}>
                1. 수집 개인정보 항목 : 이름, 전화번호, 이메일
            </Typography>
            <Typography variant="subtitle2" mb={0.1}>
                2. 개인정보의 수집 및 이용목적 : 고객문의 접수에 필요한 개인정보 및 서비스 처리
            </Typography>
            <Typography variant="subtitle2" mb={0.1}>
                3. 동의 거부권리 안내 : 고객문의 서비스 이용에 필요한 최소한의 개인정보 수집이용에 동의하지 않을 권리가
                있습니다. 다만 동의 거부 시 서비스 이용이 제한될 수 있습니다.
            </Typography>
            <Divider sx={{marginTop: 2, marginBottom: 1}} />
            <FormControlLabel
                control={
                    <Checkbox
                        value={formData.agree}
                        onChange={e => {
                            setFormData({
                                ...formData,
                                agree: !formData.agree,
                            })
                        }}
                    />
                }
                label={<Typography variant="subtitle2">개인정보 수집 및 이용에 동의합니다.</Typography>}
            />
        </Stack>
    )
}
