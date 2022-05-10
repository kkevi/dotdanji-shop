import {Container, Stack} from "@mui/material"
import MainLayout from "Component/main-layout/MainLayout"
import Proposal from "src/Proposal"

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
