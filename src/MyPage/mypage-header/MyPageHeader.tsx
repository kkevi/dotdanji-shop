import React from "react"
import {Stack, Typography} from "@mui/material"

type MyPageHeaderProps = {
    title: string
    mobile?: boolean
}

export default function MyPageHeader({title, mobile}: MyPageHeaderProps) {
    const theme = useTheme()
    return (
        <Stack
            py={mobile ? 9.9 : 13.5}
            justifyContent="center"
            alignItems="center"
            height={mobile ? 200 : 300}
            sx={{backgroundColor: theme.palette.primary.main}}
        >
            <Typography className="pointFont" fontSize={mobile ? 24 : 32} color="white">
                {title}
            </Typography>
            {/* <Typography className="pointFont" mt={1} fontSize={18} color={theme.palette.secondary.light}></Typography> */}
            {/* <div><ImageBox /></div> */}
        </Stack>
    )
}
