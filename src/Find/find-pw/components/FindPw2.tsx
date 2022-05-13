import React from "react"

import {TextField, Typography} from "@mui/material"
import useStyles from "../../styles"

type FindPw2Props = {
    newPw: string
    setNewPw: React.Dispatch<React.SetStateAction<string>>
    confirmNewPw: string
    setConfirmNewPw: React.Dispatch<React.SetStateAction<string>>
    warningPw: string
}

export default function FindPw2(props: FindPw2Props) {
    const {newPw, setNewPw, confirmNewPw, setConfirmNewPw, warningPw} = props
    const classes = useStyles()
    return (
        <>
            <Typography mt={2} mb={6} variant="body2" fontWeight={400} color="#888">
                새로운 비밀번호를 설정 해주세요.
                <br />
                최소 1개의 숫자 혹은 특수 문자를 포함한 8~20자 이내 이어야 합니다.
            </Typography>
            <TextField
                className={classes.textField}
                type="password"
                label="새 비밀번호"
                variant="outlined"
                fullWidth
                value={newPw}
                onChange={e => setNewPw(e.target.value)}
            />
            <TextField
                className={classes.textField}
                type="password"
                label="새 비밀번호 확인"
                variant="outlined"
                fullWidth
                sx={{mt: 2}}
                value={confirmNewPw}
                onChange={e => setConfirmNewPw(e.target.value)}
            />

            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningPw}
            </Typography>
        </>
    )
}
