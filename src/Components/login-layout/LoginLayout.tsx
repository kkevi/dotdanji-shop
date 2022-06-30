import React from "react"
import {Stack, useMediaQuery} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"
import {useTheme} from "@mui/material"
type LoginLayoutProps = {
    children: React.ReactNode
}

export default function LoginLayout({children}: LoginLayoutProps) {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <>
            {mobile ? (
                <Stack my={18}>{children}</Stack>
            ) : (
                <Stack justifyContent="center" sx={{backgroundColor: theme.palette.primary.light}}>
                    <div style={{maxWidth: 1800, width: "100%", alignSelf: "center"}}>
                        <Stack
                            sx={{mt: 17, mb: 4, backgroundColor: "white"}}
                            direction="row"
                            justifyContent="space-between"
                            padding={2}
                        >
                            <Stack sx={{flex: 1.2}} height={"85vh"}>
                                <ImageBox height={"100%"} src="/images/illust/dottdanji-illust2.png" />
                            </Stack>
                            <Stack sx={{flex: 0.8}} height={"85vh"} alignItems="center">
                                {children}
                            </Stack>
                        </Stack>
                    </div>
                </Stack>
            )}
        </>
    )
}
