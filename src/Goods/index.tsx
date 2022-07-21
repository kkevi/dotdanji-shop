import {useEffect, useState} from "react"
import {
    Container,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import {GoodsCategoryType, GoodsItemType} from "types/goods-type"
//fake data
import {GOODS_CATEGORY_DATA} from "components/fake-data/fake-goods"

import GoodsItem from "./goods-item/GoodsItem"
import axios from "axios"

type Props = {
    categoryId?: string | string[] | undefined
}

export default function GoodsLayout(props: Props) {
    const {categoryId} = props
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [goodsFilter, setGoodsFilter] = useState<string>("newest")
    const [categoryList, setCategoryList] = useState<GoodsCategoryType[]>(GOODS_CATEGORY_DATA)
    const [categoryTitle, setCategoryTitle] = useState<string>("")
    const [fakeGoodsList, setFakeGoodsList] = useState<GoodsItemType[]>([])
    const [goodsList, setGoodsList] = useState<GoodsItemType[]>([])

    const goodsArr = [
        {name: "신상품순", value: "newest"},
        {name: "인기순", value: "topsellers"},
        {name: "높은가격순", value: "high"},
        {name: "낮은가격순", value: "low"},
    ]

    useEffect(() => {
        getData()
    }, [categoryId])

    // async function addData() {
    //     axios.defaults.withCredentials = true

    //     const stage = "dotdanji-stages"
    //     const id = "dotdanji-goods-list" // goods table 가져옴
    //     try {
    //         await axios({
    //             url: `/api/${stage}/${id}`,
    //             method: "POST",
    //             withCredentials: true, // 쿠키 cors 통신 설정 허용
    //             headers: {
    //                 "Access-Control-Allow-Origin": "https://dotdanji.com",
    //                 "Content-Type": "application/json",
    //             },
    //             data: {
    //                 goodsId: "dotdanji-dotdanji-test2",
    //                 categoryId: "dotdanji",
    //                 thumbnails:
    //                     '{"images": ["/images/fake/storyself.png", "/images/fake/little-prince.png", "/images/fake/pinokio.png"], "bgColor": "#91C3CE"}',
    //                 options: '[{"optionId":"fake-goodsId-0_opt0", "name":"돛단지 구독권","addPlace":0}',
    //                 name: "test1",
    //                 tags: '["1", "2", "3", "4"]',
    //                 infoText: "123",
    //                 infoHtml: "",
    //                 price: 200,
    //                 sale: 20,
    //             },
    //         })
    //             .then(response => {
    //                 console.log("--->", response)
    //             })
    //             .catch(function (error) {
    //                 console.log("axios error:", error)
    //             })
    //     } catch (error) {
    //         //응답 실패
    //         console.error("try error:", error)
    //     }
    // }

    const getData = async () => {
        if (categoryId === "") return
        axios.defaults.withCredentials = true

        const stage = "dotdanji-stages"
        const id = "dotdanji-goods-list" // goods table 가져옴
        try {
            await axios({
                url: `/api/${stage}/${id}`,
                method: "GET",
                withCredentials: true, // 쿠키 cors 통신 설정 허용
                headers: {
                    "Access-Control-Allow-Origin": "https://dotdanji.com",
                    "Content-Type": "application/json",
                },
                params: {
                    categoryId: categoryId,
                },
            })
                .then(response => {
                    setGoodsList(response.data.message)
                })
                .catch(function (error) {
                    console.log("axios error:", error)
                })
        } catch (error) {
            //응답 실패
            console.error("try error:", error)
        }
    }

    useEffect(() => {
        //최상단 title 표시
        const category = categoryList.filter(it => it.categoryId === categoryId)[0] as GoodsCategoryType
        setCategoryTitle(category?.title)
    }, [categoryId])

    const onChangeSelect = (event: SelectChangeEvent) => {
        setGoodsFilter(event.target.value)
    }

    return (
        <Container maxWidth={mobile ? "sm" : "lg"} sx={{my: mobile ? 16 : 24}}>
            {/* search*/}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={3}>
                <Stack direction="row" alignItems="flex-end">
                    <Typography className="pointFont" variant={mobile ? "h5" : "h4"} color="#333">
                        {categoryTitle}
                    </Typography>
                    <Typography fontSize={mobile ? 14 : 18} ml={1}>
                        [{goodsList.length}]
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    alignItems="flex-end"
                    sx={{
                        width: mobile ? 200 : "auto",
                    }}
                >
                    <Select
                        variant="standard"
                        value={goodsFilter}
                        onChange={onChangeSelect}
                        sx={{fontSize: mobile ? 14 : 16}}
                    >
                        {goodsArr.map(({name, value}, index) => (
                            <MenuItem value={value} key={value + index} sx={{fontSize: mobile ? 14 : 16}}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField variant="standard" />
                </Stack>
            </Stack>

            {goodsList.length > 0 && (
                <Grid container spacing={3}>
                    {goodsList.map((data: GoodsItemType, index) => (
                        <Grid item key={data.productId + index} lg={4} md={4} sm={6} xs={6}>
                            <GoodsItem data={data} mobile={mobile} />
                        </Grid>
                    ))}
                </Grid>
            )}

            {goodsList.length === 0 && (
                <Stack height={mobile ? "50vh" : "70vh"} justifyContent="center" alignItems="center" bgcolor="#f9f9f9">
                    <Typography sx={{opacity: 0.5}}>현재 상품이 준비중입니다.</Typography>
                </Stack>
            )}
        </Container>
    )
}
