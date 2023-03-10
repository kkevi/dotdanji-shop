import {Button, Container, InputAdornment, Stack, TextField, Typography, useMediaQuery, useTheme} from "@mui/material"
import {MyPageModifyFormDefaultData, UserDataType} from "types/user-type"
import React, {useState} from "react"

import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import {CustomedTextField} from "src/Components/customed-textfield/CustomedTextField"
import DaumPostModal from "components/daum-post-modal/DaumPostModal"
import MyPageHeader from "src/MyPage/mypage-header/MyPageHeader"
import VisibilityButton from "src/Components/visibility-button/VisibilityButton"
import {useRouter} from "next/router"
import useStyles from "../styles"

export default function MyPageModifyPage() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const classes = useStyles()
    const route = useRouter()
    const [formData, setFormData] = useState<UserDataType>(MyPageModifyFormDefaultData)
    const [visibleModal, setVisibleModal] = useState(false)

    // const [formData, setFormData] = useState<MyPagePwEditFormProps>(MyPagePwEditFormDefaultData)
    const [visibility, setVisibility] = useState<boolean>(false)
    const [visibility2, setVisibility2] = useState<boolean>(false)
    const [visibility3, setVisibility3] = useState<boolean>(false)

    // const validPw = useVerfiyPw(formData.newPw)
    // const validPwLength = formData.newPw.length < 21 && formData.newPw.length > 7
    // const correspondPw = formData.newPw !== "" && formData.newPw === formData.newPwVerify
    // const validPwAll = validPw && validPwLength && formData.newPw === formData.newPwVerify

    // const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {value, name} = e.target
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     })
    // }

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

    return (
        <Stack py={mobile ? 9.9 : 13.5}>
            {visibleModal && (
                <DaumPostModal
                    onChangeAddress={onChangeAddress}
                    visibleModal={visibleModal}
                    setVisibleModal={setVisibleModal}
                />
            )}
            <MyPageHeader title="???????????????" mobile={mobile} subtitle={"??? ?????? ??????"} />
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
                            # ??? ?????? ??????
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
                            label="??????"
                            name="name"
                            value={formData.name}
                            onChange={onChangeInput}
                            style={{marginTop: theme.spacing(-2)}}
                        />
                        <CustomedTextField
                            required
                            type="number"
                            label="?????????"
                            placeholder="-??????, ????????? ??????"
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
                            label="????????????"
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
                                ????????????
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
                            label="????????????"
                            name="addressDetailed"
                            value={formData.addressDetailed}
                            onChange={onChangeInput}
                            style={{marginTop: theme.spacing(-2)}}
                        />{" "}
                        <Typography
                            className="pointFont"
                            color={theme.palette.secondary.dark}
                            mb={4}
                            fontWeight={800}
                            fontSize={22}
                            sx={{alignSelf: "flex-start"}}
                        >
                            # ???????????? ??????
                        </Typography>
                        <TextField
                            className={classes.disabledTextField}
                            type={visibility ? "text" : "password"}
                            required
                            fullWidth
                            label="?????? ????????????"
                            name="currentPw"
                            value={"formData.currentPw"}
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
                            label="??? ????????????"
                            name="newPw"
                            value={"formData.newPw"}
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
                                    // color: validPw ? theme.palette.primary.light : "#757575",
                                    fontSize: 18,
                                }}
                            />
                            <Typography
                                mr={2}
                                variant="caption"
                                // color={validPw ? theme.palette.primary.light : "#757575"}
                            >
                                ???????????? ??????
                            </Typography>

                            <CheckRoundedIcon
                                sx={{
                                    marginRight: "2px",
                                    // color: validPwLength ? theme.palette.primary.light : "#757575",
                                    fontSize: 18,
                                }}
                            />
                            <Typography
                                variant="caption"
                                // color={validPwLength ? theme.palette.primary.light : "#757575"}
                            >
                                8~20??? ??????
                            </Typography>
                        </Stack>
                        <TextField
                            className={classes.textField}
                            sx={{marginBottom: "0 !important"}}
                            type={visibility3 ? "text" : "password"}
                            required
                            fullWidth
                            label="??? ???????????? ??????"
                            name="newPwVerify"
                            value={"formData.newPwVerify"}
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
                                    // color: correspondPw ? theme.palette.primary.light : "#757575",
                                    fontSize: 18,
                                }}
                            />
                            <Typography
                                variant="caption"
                                // color={correspondPw ? theme.palette.primary.light : "#757575"}
                            >
                                ???????????? ??????
                            </Typography>
                        </Stack>
                        <Button
                            className={classes.button}
                            sx={{alignSelf: "center"}}
                            variant="outlined"
                            // onClick={onSave}
                        >
                            ????????????
                        </Button>
                        <Typography
                            mt={2}
                            fontSize={12}
                            fontWeight={700}
                            color={theme.palette.primary.dark}
                            sx={{alignSelf: "center", textDecoration: "underline"}}
                            // onClick={() => route.push("/")}
                        >
                            ????????????
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}
