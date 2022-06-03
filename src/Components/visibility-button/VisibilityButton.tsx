import React from "react"
import {IconButton, InputAdornment} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

type Props = {
    position: "start" | "end"
    visibility: boolean
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

export default function VisibilityButton(props: Props) {
    const {position, visibility, setVisibility} = props

    const onClickButton = () => {
        setVisibility(!visibility)
    }

    return (
        <InputAdornment position={position}>
            <IconButton aria-label="toggle password visibility" onClick={onClickButton} edge={position}>
                {visibility ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    )
}
