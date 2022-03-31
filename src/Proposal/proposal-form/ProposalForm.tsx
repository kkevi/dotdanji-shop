import React from "react"
import {Typography, TextField, Stack, Button} from "@mui/material"
import useStyles from "../styles"

export default function ProposalForm() {
    const classes = useStyles()

    return (
        <Stack flexDirection="column" justifyContent="center">
            <Stack flexDirection="row" my={2}>
                <Typography variant="subtitle1" fontWeight={700} width={200}>
                    담당자 및 회사 정보
                </Typography>
                <Stack width={700}>
                    <TextField className={classes.textField} required fullWidth label="회사명" />
                    <TextField className={classes.textField} required fullWidth label="담당자명" />
                    <TextField className={classes.textField} required fullWidth label="전화번호" />
                    <TextField className={classes.textField} required fullWidth label="메일주소" />
                    <TextField className={classes.textField} fullWidth label="홈페이지" />
                    <Stack flexDirection="row">
                        <TextField className={classes.lastTextField} disabled fullWidth label="회사 소개서 첨부" />
                        <Button className={classes.button2} variant="outlined">
                            첨 부
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

            <Stack flexDirection="row" mt={4} mb={8}>
                <Typography variant="subtitle1" fontWeight={700} width={200}>
                    제휴/제안 내용
                </Typography>
                <Stack width={700}>
                    <TextField className={classes.textField} required fullWidth label="제휴/제안 제목" />
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        multiline
                        rows={10}
                        label="제휴/제안 내용"
                    />
                    <Stack flexDirection="row">
                        <TextField className={classes.lastTextField} disabled fullWidth label="제휴/제안서 첨부" />
                        <Button className={classes.button2} variant="outlined">
                            첨 부
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
