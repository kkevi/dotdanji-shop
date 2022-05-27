import {Container, Stack} from "@mui/material"
import MainLayout from "components/main-layout/MainLayout"
import useStyles from "src/Service/notice-detail-page/style"
import {terms2} from "src/SignUp/signup-section1/terms-html-2"

export default function Index() {
    const classes = useStyles()
    return (
        <MainLayout>
            <Container maxWidth="lg">
                <Stack py={13.5} mt={8}>
                    <div dangerouslySetInnerHTML={{__html: terms2}} className={classes.htmlContainer} />
                </Stack>
            </Container>
        </MainLayout>
    )
}
