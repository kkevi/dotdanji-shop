import React, {useState} from "react"
import {Button, Container, IconButton, InputAdornment, Stack, TextField, Typography} from "@mui/material"
import {useTheme} from "@mui/system"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"

import useStyles from "../styles"
import {useVerfiyPw} from "lib/useVerifyData"
import MyPageHeader from "src/MyPage/mypage-header/MyPageHeader"

import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

type MyPagePwEditFormProps = {
    currentPw: string
    newPw: string
    newPwVerify: string
}
const MyPagePwEditFormDefaultData: MyPagePwEditFormProps = {
    currentPw: "",
    newPw: "",
    newPwVerify: "",
}

export default function MyPagePwEditPage() {
    const theme = useTheme()
    const classes = useStyles()
    const [formData, setFormData] = useState<MyPagePwEditFormProps>(MyPagePwEditFormDefaultData)
    const [visibility, setVisibility] = useState<boolean>(false)
    const [visibility2, setVisibility2] = useState<boolean>(false)
    const [visibility3, setVisibility3] = useState<boolean>(false)

    const validPw = useVerfiyPw(formData.newPw)
    const validPwLength = formData.newPw.length < 21 && formData.newPw.length > 7
    const correspondPw = formData.newPw !== "" && formData.newPw === formData.newPwVerify
    const validPwAll = validPw && validPwLength && formData.newPw === formData.newPwVerify

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSave = () => {
        // if(formData.currentPw !== currentPassword) alert('기존 비밀번호가 일치하지 않습니다.')
        if (validPwAll) {
            console.log("work on here")
        } else return
    }

    return (
        <>
            <MyPageHeader title="마이페이지" />
            <Container maxWidth="sm">
                <Stack mt={12} direction="column" justifyContent="center" alignItems="flex-start">
                    <Typography
                        className="pointFont"
                        color={theme.palette.secondary.dark}
                        mb={4}
                        fontWeight={800}
                        fontSize={22}
                        sx={{alignSelf: "flex-start"}}
                    >
                        # 비밀번호 변경
                    </Typography>
                    <TextField
                        className={classes.disabledTextField}
                        type={visibility ? "text" : "password"}
                        required
                        fullWidth
                        label="현재 비밀번호"
                        name="currentPw"
                        value={formData.currentPw}
                        onChange={onChangeInput}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setVisibility(!visibility)}
                                        edge="end"
                                    >
                                        {visibility ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className={classes.textField}
                        sx={{marginBottom: "0 !important"}}
                        type={visibility2 ? "text" : "password"}
                        required
                        fullWidth
                        label="새 비밀번호"
                        name="newPw"
                        value={formData.newPw}
                        onChange={onChangeInput}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setVisibility2(!visibility2)}
                                        edge="end"
                                    >
                                        {visibility2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Stack ml={1} mt={1} mb={4} height={10} direction="row">
                        <CheckRoundedIcon
                            sx={{
                                marginRight: "2px",
                                color: validPw ? theme.palette.primary.light : "#757575",
                                fontSize: 18,
                            }}
                        />
                        <Typography mr={2} variant="caption" color={validPw ? theme.palette.primary.light : "#757575"}>
                            특수문자 포함
                        </Typography>

                        <CheckRoundedIcon
                            sx={{
                                marginRight: "2px",
                                color: validPwLength ? theme.palette.primary.light : "#757575",
                                fontSize: 18,
                            }}
                        />
                        <Typography variant="caption" color={validPwLength ? theme.palette.primary.light : "#757575"}>
                            8~20자 이내
                        </Typography>
                    </Stack>
                    <TextField
                        className={classes.textField}
                        sx={{marginBottom: "0 !important"}}
                        type={visibility3 ? "text" : "password"}
                        required
                        fullWidth
                        label="새 비밀번호 확인"
                        name="newPwVerify"
                        value={formData.newPwVerify}
                        onChange={onChangeInput}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setVisibility3(!visibility3)}
                                        edge="end"
                                    >
                                        {visibility3 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Stack ml={1} mt={1} mb={2} height={10} direction="row">
                        <CheckRoundedIcon
                            sx={{
                                marginRight: "2px",
                                color: correspondPw ? theme.palette.primary.light : "#757575",
                                fontSize: 18,
                            }}
                        />
                        <Typography variant="caption" color={correspondPw ? theme.palette.primary.light : "#757575"}>
                            비밀번호 일치
                        </Typography>
                    </Stack>
                    <Button
                        className={classes.button}
                        disabled={!validPwAll}
                        sx={{alignSelf: "center"}}
                        variant="outlined"
                        onClick={onSave}
                    >
                        변경하기
                    </Button>
                </Stack>
            </Container>
        </>
    )
}
