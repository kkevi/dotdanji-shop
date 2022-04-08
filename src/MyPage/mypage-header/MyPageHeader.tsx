import React from "react"
import {Stack, Typography} from "@mui/material"
import {useTheme} from "@mui/system"

type MyPageHeaderProps = {
    title: string
}

export default function MyPageHeader({title}: MyPageHeaderProps) {
    const theme = useTheme()
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            height={300}
            sx={{backgroundColor: theme.palette.primary.main}}
        >
            <Typography className="pointFont" fontSize={32} color="white">
                {title}
            </Typography>
            {/* <Typography className="pointFont" mt={1} fontSize={18} color={theme.palette.secondary.light}></Typography> */}
            {/* <div><ImageBox /></div> */}
        </Stack>
    )
}
