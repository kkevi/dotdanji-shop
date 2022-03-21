import React from "react"

import {Button, Stack, TextField, Typography, FormControlLabel, Checkbox, FormGroup, Link, Divider} from "@mui/material"
import styled from "styled-components"

type SignUpSection2Prop = {
    setStep: (val: number) => void
}

export default function SignUpSection2(prop: SignUpSection2Prop) {
    const {setStep} = prop

    const WhiteBorderTextField = styled(TextField)`
        & label.Mui-focused {
            color: black;
        }
        & .MuiOutlinedInput-root {
            &.Mui-focused fieldset {
                border-color: black;
            }
        }
    `

    return (
        <div>
            <WhiteBorderTextField sx={{mt: 6}} label="이메일" variant="outlined" fullWidth />
            <WhiteBorderTextField sx={{mt: 2}} label="비밀번호" variant="outlined" fullWidth />
        </div>
    )
}
