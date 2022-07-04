import React from "react"
import {Typography, Stack, Divider, FormControlLabel, Checkbox} from "@mui/material"

import {ProposalFormProps} from "../ProposalDataType"

type ProposalTermsProps = {
    formData: ProposalFormProps
    setFormData: React.Dispatch<React.SetStateAction<ProposalFormProps>>
}

export default function ProposalTerms({formData, setFormData}: ProposalTermsProps) {
    return (
        <Stack>
            <Typography variant="subtitle2" mb={0.1}>
                돛단지는 제휴를 희망하는 기업 및 개인을 대상으로 아래와 같이 개인정보를 수집합니다.
            </Typography>
            <Typography variant="subtitle2" mb={1}>
                수집된 개인정보는 제휴제안 사항 상담서비스를 위한 목적으로만 사용 후, 제휴제안 상담 완료 시점으로부터
                1개월간 보관 후 파기합니다.
            </Typography>
            <Typography variant="subtitle2" mb={0.1}>
                1. 수집 개인정보 항목 : 회사명, 제안자명, 메일 주소, 전화번호, 홈페이지 주소
            </Typography>
            <Typography variant="subtitle2" mb={0.1}>
                2. 개인정보의 수집 및 이용목적 : 제휴신청에 따른 본인확인 및 원활한 의사소통 경로 확보, 제휴 제안 내용
                확인
            </Typography>
            <Typography variant="subtitle2" mb={0.1}>
                3. 동의 거부권리 안내 : 제휴제안 서비스 이용에 필요한 최소한의 개인정보 수집이용에 동의하지 않을 권리가
                있습니다. 다만 동의 거부 시 제휴제안 서비스가 제한될 수 있습니다.
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
