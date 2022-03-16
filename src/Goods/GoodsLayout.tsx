import {Grid, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography, useTheme} from "@mui/material"
import {useState} from "react"
import GoodsItem from "./GoodsItem"

const GOODS_ITEM_DATA = new Array(10).fill({id: "fake-data", imgUrl: "/images/demo.jpg", name: "상품명", price: 0})

export default function GoodsLayout() {
    const theme = useTheme()
    const [goodsFilter, setGoodsFilter] = useState("newest")
    const goodsArr = [
        {name: "신상품순", value: "newest"},

        {name: "인기순", value: "topsellers"},
        {name: "높은가격순", value: "high"},
        {name: "낮은가격순", value: "low"},
    ]

    const onChangeSelect = (event: SelectChangeEvent) => {
        setGoodsFilter(event.target.value)
    }

    return (
        <Stack my={24}>
            {/* search*/}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end" mb={2}>
                <Stack direction="row" alignItems="flex-end">
                    <Typography variant="h4" fontWeight="bold">
                        교재
                    </Typography>
                    <Typography variant="body1" ml={1}>
                        [40]
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

            <Grid container spacing={3}>
                {GOODS_ITEM_DATA.map(({id, imgUrl, name, price}, idx) => (
                    <Grid item key={id + idx} lg={4} md={4} sm={6} xs={12}>
                        <GoodsItem id={id} imgUrl={imgUrl} name={name} price={price} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}
