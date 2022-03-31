import {Container, Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"

import Notice from "Notice"

export default function Index() {
    return (
        <MainLayout>
            {/* <Container maxWidth="lg"> */}
            <Stack py={16}>
                <Notice />
            </Stack>
            {/* </Container> */}
        </MainLayout>
    )
}
