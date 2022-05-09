import React, {useState} from "react"
import {Typography, Button, Stack, TextField, InputAdornment, Divider} from "@mui/material"
import useStyles from "../style"
import {useTheme} from "@mui/system"

import {CartFormProps, CartFormDefaultData} from "./cart-form-type"
import DaumPostModal from "Components/daum-post-modal/DaumPostModal"

export default function CartForm() {
    const theme = useTheme()
    const classes = useStyles()
    const [formData, setFormData] = useState<CartFormProps>(CartFormDefaultData)
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

    return (
        <>
            {visibleModal && (
                <DaumPostModal
                    onChangeAddress={onChangeAddress}
                    visibleModal={visibleModal}
                    setVisibleModal={setVisibleModal}
                />
            )}

            <Stack width="100%" direction="row" mt={8} justifyContent="space-between">
                {/* 왼쪽 입력란 */}
                <Stack width="68%">
                    <Typography variant="h5" mb={4} className="pointFont" color={theme.palette.secondary.dark}>
                        # 배송지 정보
                    </Typography>
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        label="수령인"
                        name="name"
                        value={formData.name}
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
                        <Button className={classes.button2} variant="outlined" onClick={() => setVisibleModal(true)}>
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
                    <TextField
                        className={classes.textField}
                        required
                        fullWidth
                        type="number"
                        label="연락처1"
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
                        fullWidth
                        type="number"
                        label="연락처2"
                        name="phoneNumber2"
                        value={formData.phoneNumber2 || ""}
                        onChange={onChangeInput}
                    />
                    <TextField
                        className={classes.textField}
                        sx={{marginBottom: "0 !important"}}
                        required
                        fullWidth
                        label="배송요청사항"
                        name="memo"
                        value={formData.memo}
                        onChange={onChangeInput}
                    />
                </Stack>

                {/* 오른쪽 추가정보 */}
                <Stack width="24%" mt={2} justifyContent="space-between">
                    <Stack>
                        <Typography fontSize={20} mb={2} className="pointFont" color={theme.palette.secondary.dark}>
                            # 주문자 정보
                        </Typography>

                        <Stack className={classes.rightStack} spacing={1}>
                            <Typography>김퐁구</Typography>
                            <Typography>010-0000-0000</Typography>
                            <Typography>ponggu@simbaat.com</Typography>
                        </Stack>
                    </Stack>

                    <Stack>
                        <Typography fontSize={20} mb={2} className="pointFont" color={theme.palette.secondary.dark}>
                            # 결제 상세
                        </Typography>

                        <Stack className={classes.rightStack} spacing={1}>
                            <Stack className="rightStackColumn">
                                <Typography>주문금액</Typography>
                                <Typography>30,000원</Typography>
                            </Stack>
                            <Stack className="rightStackColumn" pb={0.5}>
                                <Typography>배송비</Typography>
                                <Typography>2,500원</Typography>
                            </Stack>

                            <Divider className={classes.divider} flexItem />

                            <Stack className="rightStackColumn" pt={0.5}>
                                <Typography fontWeight={800} color={`${theme.palette.secondary.dark} !important`}>
                                    결제금액
                                </Typography>
                                <Typography fontWeight={800} color={`${theme.palette.secondary.dark} !important`}>
                                    32,500원
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}
