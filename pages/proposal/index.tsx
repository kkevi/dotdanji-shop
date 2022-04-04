import {Container, Stack} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"

import Proposal from "Proposal"

export default function Index() {
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <Stack py={13.5}>
                    <Proposal />
                </Stack>
            </Container>
        </MainLayout>
    )
}
