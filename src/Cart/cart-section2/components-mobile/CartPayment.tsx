import React, {useState} from "react"
import {Typography, Button, Stack, FormControlLabel, Checkbox, Radio, FormControl, RadioGroup} from "@mui/material"
import useStyles from "../style"

import TermsDialog from "src/SignUp/signup-section1/TermsDialog"
import {CartFormProps} from "types/cart-type"
import {useTheme} from "@mui/material"
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
            {visibleDialog && <TermsDialog id={4} setVisibleDialog={setVisibleDialog} mobile />}

            <Stack width="100%" alignItems="flex-start" mt={4} mb={8}>
                <Typography variant="h6" className="pointFont" color={theme.palette.secondary.dark}>
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
                            control={<Radio size="small" />}
                            label={<Typography fontSize={12}>신용/체크카드</Typography>}
                        />
                        <FormControlLabel
                            value="cash"
                            control={<Radio size="small" />}
                            label={<Typography fontSize={12}>무통장입금</Typography>}
                        />
                        <FormControlLabel
                            value="naver"
                            control={<Radio size="small" />}
                            label={<img src="/images/logo-naver-pay.png" width={40} style={{marginTop: 8}} />}
                        />
                        <FormControlLabel
                            value="kakao"
                            control={<Radio size="small" />}
                            label={<img src="/images/logo-kakao-pay.png" width={40} style={{marginTop: 8}} />}
                        />
                    </RadioGroup>
                </FormControl>

                <Stack direction="row" alignItems="center" mt={2}>
                    <Typography fontSize={12}>쇼핑몰 이용약관</Typography>
                    <Typography fontSize={12} className={classes.link} ml={1} onClick={() => setVisibleDialog(true)}>
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
                            size="small"
                        />
                    }
                    label={
                        <Typography fontSize={12}>
                            이용약관 및 개인정보 제3자 제공사항에 대해 확인하였으며 결제에 동의합니다.
                        </Typography>
                    }
                />

                <Button
                    variant="contained"
                    fullWidth
                    onClick={onClickOrder}
                    sx={{backgroundColor: theme.palette.secondary.dark, mt: 4, height: 55}}
                    disableElevation
                >
                    <Typography>결제하기</Typography>
                </Button>
            </Stack>
        </>
    )
}
