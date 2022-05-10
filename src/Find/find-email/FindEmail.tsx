import React, {useState} from "react"
import {Button, Stack, TextField, Typography} from "@mui/material"
import useStyles from "../styles"

type FindEmailProps = {}

export default function FindEmail(props: FindEmailProps) {
    const {} = props
    const classes = useStyles()
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [warningPhone, setWarningPhone] = useState<string>("")
    const [validFind, setValidFind] = useState<boolean>(false)

    const onClickCheck = () => {
        if (phoneNumber === "") return setWarningPhone("휴대폰번호를 입력해주세요.")
        const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
        const validPhone = regPhone.test(phoneNumber)

        if (!validPhone) return setWarningPhone("올바른 휴대폰번호 형식이 아닙니다.")
        // TODO : 입력된 휴대폰번호로 가입된 계정이 있는지 먼저 찾기
        // if(phoneNumber){}
        // TODO : 아임포트 본인인증
    }

    return (
        <Stack width="100%">
            <Stack width="100%" direction="row" mt={6}>
                <TextField
                    className={classes.textField}
                    label="휴대폰번호"
                    variant="outlined"
                    fullWidth
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <Button className={classes.smallButton} onClick={() => onClickCheck()}>
                    본인인증
                </Button>
            </Stack>
            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningPhone}
            </Typography>

            <Button
                sx={{mt: 6, mb: 3}}
                className={classes.containedButton}
                variant="contained"
                fullWidth
                disabled={!validFind}
                onClick={() => {
                    onClickCheck()
                }}
            >
                다음으로
            </Button>
        </Stack>
    )
}
