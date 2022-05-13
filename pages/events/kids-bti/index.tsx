import React from "react"
import {Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import KidsBTI from "src/Events/kids-bti/KidsBTI"

export default function Index() {
    return (
        <MainLayout>
            <Stack pt={13.5}>
                <KidsBTI />
            </Stack>
        </MainLayout>
    )
}
