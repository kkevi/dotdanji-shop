import React, {useState} from "react"
import {Typography, Stack, Divider, Button} from "@mui/material"

import {useTheme} from "@mui/system"
import useStyles from "./styles"

import ProposalProcess from "./proposal-process/ProposalProcess"
import ProposalTerms from "./proposal-terms/ProposalTerms"
import ProposalForm from "./proposal-form/ProposalForm"

export default function Index() {
    const theme = useTheme()
    const classes = useStyles()
    const [formData, setFormData] = useState()

    const process = ["등록 및 접수", "제안 내용 검토", "검토결과 회신"]

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
                    <ProposalProcess idx={idx} title={itm} />
                ))}
            </Stack>
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
            <ProposalTerms />

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
            <ProposalForm />
            <Divider />
            <Typography mt={2} mb={6} variant="subtitle2" color="#757575">
                ❗️ 등록 전 개인정보와 제휴제안 내용을 다시 한 번 확인 해주세요. 개인정보가 정확하지 않으면 답변이
                어려울 수 있습니다.
            </Typography>

            <Button className={classes.button} sx={{alignSelf: "center"}} variant="outlined">
                제휴제안 보내기
            </Button>
        </Stack>
    )
}
