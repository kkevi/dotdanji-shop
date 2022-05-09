import React, {useState} from "react"
import {Typography, Button, Stack, FormControlLabel, Checkbox} from "@mui/material"
import useStyles from "../style"
import {useTheme} from "@mui/system"

export default function CartPayment() {
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Stack width="100%" alignItems="flex-start">
            <Typography variant="h5" mt={8} mb={4} className="pointFont" color={theme.palette.secondary.dark}>
                # 결제 방법
            </Typography>

            <Stack width="68%" direction="row" spacing={2}>
                <Button variant="outlined" fullWidth className={classes.payButton} onClick={() => {}} disableElevation>
                    <Typography fontSize={16}>신용/체크카드</Typography>
                </Button>
                <Button variant="outlined" fullWidth className={classes.payButton} onClick={() => {}} disableElevation>
                    <Typography fontSize={16}>무통장입금</Typography>
                </Button>
                <Button variant="outlined" fullWidth className={classes.payButton} onClick={() => {}} disableElevation>
                    <Typography fontSize={16}>네이버페이</Typography>
                </Button>
                <Button variant="outlined" fullWidth className={classes.payButton} onClick={() => {}} disableElevation>
                    <Typography fontSize={16}>카카오페이</Typography>
                </Button>
            </Stack>

            <Stack width="68%">
                <Stack direction="row" alignItems="center" sx={{backgroundColor: "red"}}>
                    <Typography variant="subtitle2">쇼핑몰 이용약관</Typography>
                    <Typography
                        variant="subtitle2"
                        className={classes.link}
                        ml={-1}
                        // onClick={() => {
                        //     setDialogId(itm.id)
                        //     setVisibleDialog(true)
                        // }}
                    >
                        보기
                    </Typography>
                </Stack>

                <FormControlLabel
                    control={
                        <Checkbox
                        // value={formData.agree}
                        // onChange={e => {
                        //     setFormData({
                        //         ...formData,
                        //         agree: !formData.agree,
                        //     })
                        // }}
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
    )
}
