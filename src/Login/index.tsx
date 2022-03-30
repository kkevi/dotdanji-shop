import React from "react"
import {Stack} from "@mui/material"
import {useTheme} from "@mui/system"

import ImageBox from "Components/image-box/ImageBox"
import LoginSection from "./login-section/LoginSection"

export default function Login() {
    const theme = useTheme()

    return (
        <Stack justifyContent="center" sx={{backgroundColor: "antiquewhite"}}>
            <div style={{width: 2000, alignSelf: "center"}}>
                <Stack
                    sx={{mt: 17, mb: 4, backgroundColor: "white"}}
                    direction="row"
                    justifyContent="space-between"
                    padding={2}
                >
                    <Stack sx={{flex: 1.2}} height={"85vh"}>
                        <ImageBox height={"100%"} src="/images/fake/home-slider2.jpg" />
                    </Stack>
                    <Stack sx={{flex: 0.8}} height={"85vh"}>
                        <LoginSection />
                    </Stack>
                </Stack>
            </div>
        </Stack>
    )
}
