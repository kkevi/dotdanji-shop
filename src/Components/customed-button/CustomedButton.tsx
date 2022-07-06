import React, {CSSProperties} from "react"
import {Stack, Typography} from "@mui/material"

import useStyles from "./styles"

type CustomedButtonProps = {
    src: string
    width: number
    buttonHeight: number
    buttonStyle?: CSSProperties
    text: string
    textSize: number
    textColor: string
    onClick: () => void
}

export default function CustomedButton(props: CustomedButtonProps) {
    const {src, width, buttonHeight, buttonStyle, text, textSize, textColor, onClick} = props
    const classes = useStyles()

    return (
        <Stack width={width} sx={buttonStyle} className={classes.button} onClick={onClick}>
            <img
                src={src}
                style={{
                    width: width,
                    height: buttonHeight,
                }}
            />
            <Typography fontSize={textSize} color={textColor} className={`${classes.buttonText} popFont`}>
                {text}
            </Typography>
        </Stack>
    )
}
