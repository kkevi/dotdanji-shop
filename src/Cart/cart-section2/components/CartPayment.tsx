import React, {useState} from "react"
import {Typography, Button, Stack, FormControlLabel, Checkbox, Radio, FormControl, RadioGroup} from "@mui/material"
import useStyles from "../style"
import {useTheme} from "@mui/system"

import TermsDialog from "src/SignUp/signup-section1/TermsDialog"
import {CartFormProps} from "types/cart-type"

type CartPaymentProps = {
    onClickOrder: () => void
    formData: CartFormProps
    setFormData: React.Dispatch<React.SetStateAction<CartFormProps>>
}

export default function CartPayment(props: CartPaymentProps) {
    const {onClickOrder, formData, setFormData} = props
    const theme = useTheme()
    const classes = useStyles()

    const [visibleDialog, setVisibleDialog] = useState(false)

    return (
        <>
            {visibleDialog && <TermsDialog id={4} setVisibleDialog={setVisibleDialog} />}

            <Stack width="100%" direction="row" justifyContent="space-between" alignItems="flex-end" mb={8}>
                <Stack width="68%">
                    <Typography variant="h5" mt={8} mb={4} className="pointFont" color={theme.palette.secondary.dark}>
                        # 결제 방법
                    </Typography>

                    <FormControl>
                        <RadioGroup
                            row
                            name="payment"
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    payment: (e.target as HTMLInputElement).value,
                                })
                            }
                        >
                            <FormControlLabel
                                value="credit"
                                control={<Radio />}
                                label={<Typography>신용/체크카드</Typography>}
                            />
                            <FormControlLabel
                                value="cash"
                                control={<Radio />}
                                label={<Typography>무통장입금</Typography>}
                            />
                            <FormControlLabel
                                value="naver"
                                control={<Radio />}
                                label={<img src="/images/logo-naver-pay.png" width={50} style={{marginTop: 8}} />}
                            />
                            <FormControlLabel
                                value="kakao"
                                control={<Radio />}
                                label={<img src="/images/logo-kakao-pay.png" width={50} style={{marginTop: 8}} />}
                            />
                        </RadioGroup>
                    </FormControl>

                    <Stack>
                        <Stack direction="row" alignItems="center" mt={2}>
                            <Typography variant="subtitle2">쇼핑몰 이용약관</Typography>
                            <Typography
                                variant="subtitle2"
                                className={classes.link}
                                ml={1}
                                onClick={() => {
                                    setVisibleDialog(true)
                                }}
                            >
                                보기
                            </Typography>
                        </Stack>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="agree"
                                    value={formData.agree}
                                    onChange={e => {
                                        setFormData({
                                            ...formData,
                                            agree: !formData.agree,
                                        })
                                    }}
                                />
                            }
                            label={
                                <Typography variant="subtitle2">
                                    이용약관 및 개인정보 제3자 제공사항에 대해 확인하였으며 결제에 동의합니다.
                                </Typography>
                            }
                        />
                    </Stack>
                </Stack>

                <Stack width="24%" mb={2}>
                    <Button
                        variant="contained"
                        onClick={onClickOrder}
                        sx={{backgroundColor: theme.palette.secondary.dark}}
                        disableElevation
                    >
                        <Typography variant="h6">결제하기</Typography>
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
