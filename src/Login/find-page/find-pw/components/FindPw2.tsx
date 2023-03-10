import React, {useState} from "react"

import {IconButton, InputAdornment, TextField, Typography} from "@mui/material"
import useStyles from "../../styles"

import {CustomedTextField} from "components/customed-textfield/CustomedTextField"

import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import VisibilityButton from "src/Components/visibility-button/VisibilityButton"

type FindPw2Props = {
    newPw: string
    setNewPw: React.Dispatch<React.SetStateAction<string>>
    confirmNewPw: string
    setConfirmNewPw: React.Dispatch<React.SetStateAction<string>>
    warningPw: string
    mobile: boolean
}

export default function FindPw2(props: FindPw2Props) {
    const {newPw, setNewPw, confirmNewPw, setConfirmNewPw, warningPw, mobile} = props
    const classes = useStyles()

    const [visibility, setVisibility] = useState<boolean>(false)
    const [visibility2, setVisibility2] = useState<boolean>(false)

    return (
        <>
            <Typography mt={mobile ? 0.5 : 2} mb={6} variant="body2" fontWeight={400} color="#888">
                새로운 비밀번호를 설정 해주세요.
                <br />
                최소 1개의 숫자 혹은 특수 문자를 포함한 8~20자 이내 이어야 합니다.
            </Typography>
            <CustomedTextField
                type={visibility ? "text" : "password"}
                label="새 비밀번호"
                variant="outlined"
                value={newPw}
                sx={{mb: 0}}
                onChange={e => setNewPw(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <VisibilityButton position="end" visibility={visibility} setVisibility={setVisibility} />
                    ),
                }}
            />
            <CustomedTextField
                type={visibility2 ? "text" : "password"}
                label="새 비밀번호 확인"
                variant="outlined"
                sx={{mt: 2, mb: 0}}
                value={confirmNewPw}
                onChange={e => setConfirmNewPw(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <VisibilityButton position="end" visibility={visibility2} setVisibility={setVisibility2} />
                    ),
                }}
            />

            <Typography ml={1} mt={1} variant="caption" height={10} color="red">
                {warningPw}
            </Typography>
        </>
    )
}
