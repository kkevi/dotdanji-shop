import React from "react"
import {Stack, Typography, useTheme} from "@mui/material"
import ImageBox from "src/Components/image-box/ImageBox"

type MyPageHeaderProps = {
    title: string
    subtitle?: string
    mobile?: boolean
}

export default function MyPageHeader({title, subtitle, mobile}: MyPageHeaderProps) {
    const theme = useTheme()
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            height={mobile ? 200 : 300}
            sx={{backgroundColor: theme.palette.secondary.light}}
        >
            <ImageBox
                style={{
                    maxWidth: 1920,
                    position: "absolute",
                }}
                width={"100%"}
                height={mobile ? 200 : 300}
                src={"/images/banner-mypage.png"}
            />
            <Typography className="pointFont" fontSize={mobile ? 24 : 32} color="white">
                {title}
            </Typography>
            {subtitle ? (
                <Typography className="pointFont" fontSize={mobile ? 14 : 18} color={theme.palette.primary.dark}>
                    {subtitle}
                </Typography>
            ) : undefined}
        </Stack>
    )
}
