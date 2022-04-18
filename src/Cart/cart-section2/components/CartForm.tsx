import React, {useState} from "react"
import {Typography, Button, Stack, TextField, InputAdornment} from "@mui/material"
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
            <Stack direction="row" mt={12} justifyContent="space-between" spacing={4}>
                <Stack width={700}>
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
                        required
                        fullWidth
                        label="배송요청사항"
                        name="memo"
                        value={formData.memo}
                        onChange={onChangeInput}
                    />
                </Stack>
                <Stack width={420}>
                    <Typography variant="h5" mb={4} className="pointFont" color={theme.palette.secondary.dark}>
                        # 주문자 정보
                    </Typography>

                    <Typography fontSize={16} mb={1} color="#757575">
                        김퐁구
                    </Typography>
                    <Typography fontSize={16} mb={1} color="#757575">
                        010-0000-0000
                    </Typography>
                    <Typography fontSize={16} mb={1} color="#757575">
                        ponggu@simbaat.com
                    </Typography>

                    <Typography variant="h5" mb={4} className="pointFont" color={theme.palette.secondary.dark}>
                        # 결제 상세
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}
