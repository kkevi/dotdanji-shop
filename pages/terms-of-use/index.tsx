import {Container, Stack, Typography} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import useStyles from "src/Service/notice-detail-page/style"
import {terms1} from "src/SignUp/signup-section1/terms-html-1"

export default function Index() {
    const classes = useStyles()
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <Stack py={13.5} mt={8}>
                    <div dangerouslySetInnerHTML={{__html: terms1}} className={classes.htmlContainer} />
                </Stack>
            </Container>
        </MainLayout>
    )
}
