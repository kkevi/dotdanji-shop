import React, {useState} from "react"
import {useRouter} from "next/router"
import {Container, Stack, TextField, Typography, Button, InputAdornment} from "@mui/material"
import {useTheme} from "@mui/system"

import useStyles from "../styles"
import MyPageHeader from "src/MyPage/mypage-header/MyPageHeader"
import DaumPostModal from "Component/daum-post-modal/DaumPostModal"
import {MyPageModifyFormProps, MyPageModifyFormDefaultData} from "./mypage-modify-type"

export default function MyPageModifyPage() {
    const theme = useTheme()
    const classes = useStyles()
    const route = useRouter()
    const [formData, setFormData] = useState<MyPageModifyFormProps>(MyPageModifyFormDefaultData)
    const [visibleModal, setVisibleModal] = useState(false)

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onChangeAddress = (postCode: string, fullAddress: string) => {
        setFormData(prev => {
            return {
                ...prev,
                postCode: postCode,
                address: fullAddress,
            }
        })
        setVisibleModal(false)
    }

    const onSave = () => {}

    return (
        <>
            {visibleModal && (
                <DaumPostModal
                    onChangeAddress={onChangeAddress}
                    visibleModal={visibleModal}
                    setVisibleModal={setVisibleModal}
                />
            )}
            <MyPageHeader title="마이페이지" />
            <Container maxWidth="lg">
                <Stack mt={12} direction="column" justifyContent="center" alignItems="center">
                    <Stack width={700}>
                        <Typography
                            className="pointFont"
                            color={theme.palette.secondary.dark}
                            mb={4}
                            fontSize={22}
                            sx={{alignSelf: "flex-start"}}
                        >
                            # 내 정보 수정
                        </Typography>
                        <TextField
                            className={classes.disabledTextField}
                            required
                            fullWidth
                            name="email"
                            value={"borakim@simbaat.com"}
                            // value={formData.email}
                            disabled
                        />
                        <TextField
                            className={classes.textField}
                            required
                            fullWidth
                            label="이름"
                            name="name"
                            value={formData.name}
                            onChange={onChangeInput}
                        />
                        <TextField
                            className={classes.textField}
                            required
                            fullWidth
                            type="number"
                            label="연락처"
                            placeholder="-제외, 숫자만 입력"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={onChangeInput}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">010</InputAdornment>,
                            }}
                        />
                        <TextField
                            className={classes.textField}
                            required
                            fullWidth
                            type="date"
                            label="생년월일"
                            name="birth"
                            value={formData.birth || ""}
                            onChange={onChangeInput}
                        />
                        <Stack flexDirection="row" mb={4}>
                            <TextField
                                className={classes.disabledTextField}
                                required
                                disabled
                                fullWidth
                                value={formData.postCode}
                                sx={{marginBottom: "0 !important"}}
                            />
                            <Button
                                className={classes.button2}
                                variant="outlined"
                                onClick={() => setVisibleModal(true)}
                            >
                                주소검색
                            </Button>
                        </Stack>
                        <TextField
                            className={classes.disabledTextField}
                            required
                            fullWidth
                            value={formData.address}
                            onChange={onChangeInput}
                            disabled
                        />
                        <TextField
                            className={classes.textField}
                            fullWidth
                            label="상세주소"
                            name="addressDetailed"
                            value={formData.addressDetailed}
                            onChange={onChangeInput}
                        />
                        <Button
                            className={classes.button}
                            sx={{alignSelf: "center"}}
                            variant="outlined"
                            onClick={onSave}
                        >
                            저장하기
                        </Button>

                        <Typography
                            mt={2}
                            fontSize={12}
                            fontWeight={700}
                            color={theme.palette.primary.dark}
                            sx={{alignSelf: "center", textDecoration: "underline"}}
                            // onClick={() => route.push("/")}
                        >
                            탈퇴하기
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}
