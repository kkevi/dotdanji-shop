import {Container, Stack, Typography} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"

export default function Index() {
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <Stack py={20}>
                    <Typography variant="h5">개인정보 처리방침</Typography>
                </Stack>
            </Container>
        </MainLayout>
    )
}
