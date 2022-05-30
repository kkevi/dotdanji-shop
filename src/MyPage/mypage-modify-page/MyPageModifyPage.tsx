import React, {useState} from "react"
import {useRouter} from "next/router"
import {Container, Stack, Typography, Button, InputAdornment, useMediaQuery, useTheme} from "@mui/material"

import useStyles from "../styles"
import MyPageHeader from "src/MyPage/mypage-header/MyPageHeader"
import DaumPostModal from "components/daum-post-modal/DaumPostModal"
import {MyPageModifyFormDefaultData, UserDataType} from "types/user-type"

import {CustomedTextField} from "src/Components/customed-textfield/CustomedTextField"

export default function MyPageModifyPage() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const classes = useStyles()
    const route = useRouter()
    const [formData, setFormData] = useState<UserDataType>(MyPageModifyFormDefaultData)
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
        <Stack py={mobile ? 9.9 : 13.5}>
            {visibleModal && (
                <DaumPostModal
                    onChangeAddress={onChangeAddress}
                    visibleModal={visibleModal}
                    setVisibleModal={setVisibleModal}
                />
            )}
            <MyPageHeader title="마이페이지" mobile={mobile} />
            <Container maxWidth={mobile ? "sm" : "md"}>
                <Stack mt={mobile ? 6 : 12} direction="column" justifyContent="center" alignItems="center">
                    <Stack width={mobile ? "100%" : "100%"}>
                        <Typography
                            className="pointFont"
                            color={theme.palette.secondary.dark}
                            mb={4}
                            fontSize={mobile ? 20 : 22}
                            sx={{alignSelf: "flex-start"}}
                        >
                            # 내 정보 수정
                        </Typography>
                        <CustomedTextField
                            className={classes.disabledTextField}
                            required
                            name="email"
                            value={"borakim@simbaat.com"}
                            // value={formData.email}
                            disabled
                        />
                        <CustomedTextField
                            required
                            label="이름"
                            name="name"
                            value={formData.name}
                            onChange={onChangeInput}
                            style={{marginTop: theme.spacing(-2)}}
                        />
                        <CustomedTextField
                            required
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
                        <CustomedTextField
                            required
                            type="date"
                            label="생년월일"
                            name="birth"
                            value={formData.birth || ""}
                            onChange={onChangeInput}
                        />
                        <Stack flexDirection="row" mb={2}>
                            <CustomedTextField
                                className={classes.disabledTextField}
                                required
                                disabled
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
                        <CustomedTextField
                            className={classes.disabledTextField}
                            required
                            value={formData.address}
                            onChange={onChangeInput}
                            disabled
                        />
                        <CustomedTextField
                            label="상세주소"
                            name="addressDetailed"
                            value={formData.addressDetailed}
                            onChange={onChangeInput}
                            style={{marginTop: theme.spacing(-2)}}
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
        </Stack>
    )
}
