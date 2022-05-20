import React, {useState} from "react"
import {Typography, Button, Stack, InputAdornment, Divider} from "@mui/material"
import useStyles from "../style-mobile"
import {useTheme} from "@mui/system"

import {CustomedTextField} from "src/Components/customed-textfield/CustomedTextField"
import DaumPostModal from "components/daum-post-modal/DaumPostModal"
import {CartFormProps} from "types/cart-type"

type props = {
    formData: CartFormProps
    setFormData: React.Dispatch<React.SetStateAction<CartFormProps>>
}

export default function CartForm(props: props) {
    const {formData, setFormData} = props
    const theme = useTheme()
    const classes = useStyles()
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

            <Stack width="100%" mt={2}>
                {/* 총 결제금액 */}
                <Stack className={classes.rightStack} spacing={1} mb={6}>
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

                {/* 주문자정보 */}
                <Typography variant="h6" mb={2} className="pointFont" color={theme.palette.secondary.dark}>
                    # 주문자 정보
                </Typography>
                <Stack className={classes.rightStack}>
                    <Typography>김퐁구</Typography>
                    <Typography>010-0000-0000</Typography>
                    <Typography>ponggu@simbaat.com</Typography>
                </Stack>

                {/* 작성폼 */}
                <Typography variant="h6" mt={4} mb={2} className="pointFont" color={theme.palette.secondary.dark}>
                    # 배송지 정보
                </Typography>
                <CustomedTextField required label="수령인" name="name" value={formData.name} onChange={onChangeInput} />
                <Stack flexDirection="row" mb={2}>
                    <CustomedTextField
                        className={classes.disabledTextField}
                        required
                        disabled
                        value={formData.postCode}
                        sx={{marginBottom: "0 !important"}}
                    />
                    <Button className={classes.button2} variant="outlined" onClick={() => setVisibleModal(true)}>
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
                />
                <CustomedTextField
                    required
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
                <CustomedTextField
                    type="number"
                    label="연락처2"
                    name="phoneNumber2"
                    value={formData.phoneNumber2 || ""}
                    onChange={onChangeInput}
                />
                <CustomedTextField
                    sx={{marginBottom: "0 !important"}}
                    label="배송요청사항"
                    name="memo"
                    value={formData.memo}
                    onChange={onChangeInput}
                />
            </Stack>
        </>
    )
}
