import {Container, Divider, Link, Stack, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

export default function Footer() {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div style={{backgroundColor: "#f5f5f5", color: "#777", fontSize: "0.85rem"}}>
            <Container maxWidth="lg" sx={{py: smDown ? 3 : 6}}>
                <Stack direction={smDown ? "column" : "row"} justifyContent="space-between">
                    <div>
                        <img src="/images/logo2.png" alt="" width="130px" />
                    </div>
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <Link href="#" underline="none">
                            회사소개
                        </Link>
                        <Link href="#" underline="none">
                            이용약관
                        </Link>
                        <Link href="#" underline="none">
                            개인정보 처리방침
                        </Link>
                    </Stack>
                    {smDown && <Divider orientation="horizontal" />}
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <p>대표자 | 오홍석</p>
                        <p>사업자 등록번호 | 456-88-01404</p>
                        <p>통신판매업 신고번호 | 12345678-12345678</p>
                    </Stack>
                    {smDown && <Divider orientation="horizontal" />}
                    <Stack spacing={2} my={smDown ? 3 : 0}>
                        <Link href="#" underline="none">
                            고객센터
                        </Link>
                        <p>contact@simbaat.com</p>
                        <p>Copyright ⓒ 2021 Simbaat All rights reserved.</p>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}
