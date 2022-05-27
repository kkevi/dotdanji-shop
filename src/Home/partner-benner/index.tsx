import {Container, Stack} from "@mui/material"
import ImageBox from "src/Components/image-box/ImageBox"

export default function PartnerBenner() {
    return (
        <div
            style={{
                width: "100%",
                maxHeight: 150,
                backgroundColor: "#E6E7EB",
                padding: "50px 0",
            }}
        >
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <ImageBox src="/images/logo2.png" height={40} width={150} />
                    <ImageBox src="/images/logo2.png" height={40} width={150} />
                    <ImageBox src="/images/logo2.png" height={40} width={150} />
                    <ImageBox src="/images/logo2.png" height={40} width={150} />
                    <ImageBox src="/images/logo2.png" height={40} width={150} />
                </Stack>
            </Container>
        </div>
    )
}
