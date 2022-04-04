import {Container, Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import ServiceLayout from "Components/service-layout/ServiceLayout"

import FAQ from "FAQ"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <ServiceLayout index={1}>
                    <FAQ />
                </ServiceLayout>
            </Stack>
        </MainLayout>
    )
}
