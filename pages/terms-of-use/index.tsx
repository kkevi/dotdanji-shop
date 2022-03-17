import {Container, Stack, Typography} from "@mui/material"
import MainLayout from "Components/main-layout/MainLayout"

export default function Index() {
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <Stack py={20}>
                    <Typography variant="h5">서비스 이용약관</Typography>
                </Stack>
            </Container>
        </MainLayout>
    )
}
