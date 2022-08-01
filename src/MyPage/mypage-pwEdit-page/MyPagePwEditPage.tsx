import React, {useState} from "react"
import {Button, Container, Stack, TextField, Typography, useMediaQuery, useTheme} from "@mui/material"

import CheckRoundedIcon from "@mui/icons-material/CheckRounded"

import useStyles from "../styles"
import {useVerfiyPw} from "lib/useVerifyData"
import MyPageHeader from "src/MyPage/mypage-header/MyPageHeader"

import VisibilityButton from "src/Components/visibility-button/VisibilityButton"

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
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
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
        } else return
    }

    return (
        <Stack py={mobile ? 9.9 : 13.5}>
            <MyPageHeader title="마이페이지" mobile={mobile} subtitle={"비밀번호 변경"} />
            <Container maxWidth="sm">
                <Stack mt={mobile ? 6 : 12} direction="column" justifyContent="center" alignItems="flex-start">
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
                                <VisibilityButton
                                    position="end"
                                    visibility={visibility}
                                    setVisibility={setVisibility}
                                />
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
                                <VisibilityButton
                                    position="end"
                                    visibility={visibility2}
                                    setVisibility={setVisibility2}
                                />
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
                                <VisibilityButton
                                    position="end"
                                    visibility={visibility}
                                    setVisibility={setVisibility}
                                />
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
        </Stack>
    )
}
