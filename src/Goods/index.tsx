import {
    Container,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
    useTheme,
} from "@mui/material"
import {useEffect, useState} from "react"
import GoodsItem from "./goods-item/GoodsItem"
import {GoodsCategoryProps, GoodsItemProps} from "./goods-type"
//fake data
import {GOODS_ITEMS_DATA, GOODS_CATEGORY_DATA} from "Components/fake-data/fake-goods"

type Props = {
    categoryId?: string | string[] | undefined
}

export default function GoodsLayout(props: Props) {
    const theme = useTheme()
    const {categoryId} = props
    const [goodsFilter, setGoodsFilter] = useState<string>("newest")
    const [categoryList, setCategoryList] = useState<GoodsCategoryProps[]>(GOODS_CATEGORY_DATA)
    const [categoryTitle, setCategoryTitle] = useState<string>("")
    const [goodsList, setGoodsList] = useState<GoodsItemProps[]>([])

    const goodsArr = [
        {name: "신상품순", value: "newest"},
        {name: "인기순", value: "topsellers"},
        {name: "높은가격순", value: "high"},
        {name: "낮은가격순", value: "low"},
    ]

    useEffect(() => {
        //최상단 title 표시
        const category = categoryList.filter(it => it.categoryId === categoryId)[0] as GoodsCategoryProps
        setCategoryTitle(category?.title)

        //item list 불러오기
        const goods = GOODS_ITEMS_DATA.filter(it => it.categoryId === categoryId) as GoodsItemProps[]
        setGoodsList(goods)
    }, [categoryId, goodsList])

    const onChangeSelect = (event: SelectChangeEvent) => {
        setGoodsFilter(event.target.value)
    }

    return (
        <Container maxWidth="lg" sx={{my: 24}}>
            {/* search*/}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={2}>
                <Stack direction="row" alignItems="flex-end">
                    <Typography variant="h4" fontWeight="bold">
                        {categoryTitle}
                    </Typography>
                    <Typography variant="body1" ml={1}>
                        [{goodsList.length}]
                    </Typography>
                </Stack>

                <Stack direction="row" alignItems="flex-end">
                    <Select variant="standard" value={goodsFilter} onChange={onChangeSelect}>
                        {goodsArr.map(({name, value}, idx) => (
                            <MenuItem value={value} key={value + idx}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField variant="standard" />
                </Stack>
            </Stack>

            {goodsList.length > 0 && (
                <Grid container spacing={3}>
                    {goodsList.map((data: GoodsItemProps, idx) => (
                        <Grid item key={data.goodsId + idx} lg={4} md={4} sm={6} xs={12}>
                            <GoodsItem data={data} />
                        </Grid>
                    ))}
                </Grid>
            )}

            {goodsList.length === 0 && (
                <Stack height="70vh" justifyContent="center" alignItems="center" bgcolor="#f9f9f9">
                    <Typography sx={{opacity: 0.5}}>현재 상품이 준비중입니다.</Typography>
                </Stack>
            )}
        </Container>
    )
}
