import {Button, ButtonGroup, Container, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"
import useStyles from "./styles"

export default function Topbar() {
    const classes = useStyles()
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    const category = [
        {id: "", name: "E-BOOK"},
        {id: "", name: "교재"},
        {id: "", name: "교구"},
    ]

    return (
        <div style={{position: "fixed", top: 0, left: 0, width: "100%"}}>
            <div style={{position: "relative"}}>
                <Container maxWidth="lg" sx={{py: 3}}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <div>
                            <img src="/images/logo.png" alt="" width="130px" />
                        </div>
                        <Stack direction="row" spacing={4} fontWeight={700}>
                            {category.map(({id, name}, idx) => (
                                <Link href="#" underline="none" key={id}>
                                    {name}
                                </Link>
                            ))}
                            <Link href="#" underline="none">
                                제휴&문의
                            </Link>
                        </Stack>
                        <Stack>
                            <ButtonGroup size="small" disableElevation>
                                <Button variant="contained">로그인</Button>
                                <Button>회원가입</Button>
                            </ButtonGroup>
                        </Stack>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}
