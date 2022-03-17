import {useState} from "react"
import {Container, Stack} from "@mui/material"
//components
import {GOODS_ITEMS_DATA} from "Components/fake-data"
import {GoodsItemProps} from "Goods/goods-type"
import ImageBox from "Components/image-box/ImageBox"
//slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {sliderSettings} from "Home/sliderSetting"

type Props = {
    goodsId: string | string[] | undefined
}

export default function GoodsDetailPage(props: Props) {
    const {goodsId} = props
    const [goodsItemData, setGoodsItemData] = useState<GoodsItemProps>(GOODS_ITEMS_DATA[0])
    const {thumnails} = goodsItemData

    return (
        <div style={{position: "relative", width: "100%"}}>
            <Stack bgcolor="#ecb1b5" width="50%" height={800}>
                <Slider {...sliderSettings}>
                    {thumnails.map((thumnail, idx) => (
                        <Stack
                            key={"thumnail" + idx}
                            width="100%"
                            height="100%"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <ImageBox src={thumnail} height={500} width="50%" />
                        </Stack>
                    ))}
                </Slider>
            </Stack>

            <Container maxWidth="lg">
                <Stack py={40}>
                    <Container maxWidth="lg" sx={{my: 24}}></Container>
                </Stack>
            </Container>
        </div>
    )
}
