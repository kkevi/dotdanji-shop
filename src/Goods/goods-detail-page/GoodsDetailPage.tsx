import {Container, Stack} from "@mui/material"

type Props = {
    goodsId: string | string[] | undefined
}

export default function GoodsDetailPage(props: Props) {
    return (
        <Container maxWidth="lg">
            <Stack py={40}>
                <div>상세페이지 입니다요</div>
            </Stack>
        </Container>
    )
}
