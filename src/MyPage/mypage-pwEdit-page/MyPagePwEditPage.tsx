import React, {useState} from "react"
import {Button, Container, Stack, TextField, Typography} from "@mui/material"
import {useTheme} from "@mui/system"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"

import useStyles from "../styles"
import MyPageHeader from "src/MyPage/mypage-header/MyPageHeader"

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
    const currentPassword = ""

    const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
    const validPw = regPw.test(formData.newPw)
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
            <Container maxWidth="lg">
                <Stack mt={12} direction="column" justifyContent="center" alignItems="center">
                    <Stack width={700}>
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
                            type="password"
                            required
                            fullWidth
                            label="현재 비밀번호"
                            name="currentPw"
                            value={formData.currentPw}
                            onChange={onChangeInput}
                        />
                        <TextField
                            className={classes.textField}
                            sx={{marginBottom: "0 !important"}}
                            type="password"
                            required
                            fullWidth
                            label="새 비밀번호"
                            name="newPw"
                            value={formData.newPw}
                            onChange={onChangeInput}
                        />
                        <Stack ml={1} mt={1} mb={4} height={10} direction="row">
                            <CheckRoundedIcon
                                sx={{
                                    marginRight: "2px",
                                    color: validPw ? theme.palette.primary.light : "#757575",
                                    fontSize: 18,
                                }}
                            />
                            <Typography
                                mr={2}
                                variant="caption"
                                color={validPw ? theme.palette.primary.light : "#757575"}
                            >
                                특수문자 포함
                            </Typography>

                            <CheckRoundedIcon
                                sx={{
                                    marginRight: "2px",
                                    color: validPwLength ? theme.palette.primary.light : "#757575",
                                    fontSize: 18,
                                }}
                            />
                            <Typography
                                variant="caption"
                                color={validPwLength ? theme.palette.primary.light : "#757575"}
                            >
                                8~20자 이내
                            </Typography>
                        </Stack>
                        <TextField
                            className={classes.textField}
                            sx={{marginBottom: "0 !important"}}
                            type="password"
                            required
                            fullWidth
                            label="새 비밀번호 확인"
                            name="newPwVerify"
                            value={formData.newPwVerify}
                            onChange={onChangeInput}
                        />
                        <Stack ml={1} mt={1} mb={2} height={10} direction="row">
                            <CheckRoundedIcon
                                sx={{
                                    marginRight: "2px",
                                    color: correspondPw ? theme.palette.primary.light : "#757575",
                                    fontSize: 18,
                                }}
                            />
                            <Typography
                                variant="caption"
                                color={correspondPw ? theme.palette.primary.light : "#757575"}
                            >
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
                </Stack>
            </Container>
        </>
    )
}
