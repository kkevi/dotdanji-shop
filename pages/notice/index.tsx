import {Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"
import ServiceLayout from "Components/service-layout/ServiceLayout"

import Notice from "Notice"

export default function Index() {
    return (
        <MainLayout>
            <Stack py={13.5}>
                <ServiceLayout index={0}>
                    <Notice />
                </ServiceLayout>
            </Stack>
        </MainLayout>
    )
}
