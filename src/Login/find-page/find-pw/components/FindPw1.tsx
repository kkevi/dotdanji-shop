import React from "react"

import {Button, Stack, Typography} from "@mui/material"
import useStyles from "../../styles"

import {CustomedTextField} from "components/customed-textfield/CustomedTextField"

type FindPw1Props = {
    email: string
    setEmail: React.Dispatch<React.SetStateAction<string>>
    phoneNumber: string
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>
    onClickCheck: () => void
    warningPhone: string
    mobile: boolean
}

export default function FindPw1(props: FindPw1Props) {
    const {email, setEmail, phoneNumber, setPhoneNumber, onClickCheck, warningPhone, mobile} = props
    const classes = useStyles()

    return (
        <>
            <Typography mt={mobile ? 0.5 : 2} mb={6} variant="body2" fontWeight={400} color="#888">
                SNS를 통해 회원가입을 하셨다면, 해당 SNS 서비스를 통해 계정 정보를 찾을 수 있습니다.
            </Typography>
            <CustomedTextField
                sx={{mb: 0}}
                label="이메일"
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Stack width="100%" direction="row" mt={2}>
                <CustomedTextField
                    sx={{mb: 0}}
                    label="휴대폰번호"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <Button className={classes.smallButton} onClick={() => onClickCheck()}>
                    본인인증
                </Button>
            </Stack>
            <Typography ml={1} mt={mobile ? 0.5 : 1} variant="caption" height={10} color="red">
                {warningPhone}
            </Typography>
        </>
    )
}
