import {Grid, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography, useTheme} from "@mui/material"
import {useState} from "react"
import GoodsItem from "./GoodsItem"

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
        <Stack my={20}>
            {/* search*/}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
                <Stack direction="row" alignItems="flex-end">
                    <Typography variant="h4" fontWeight="bold">
                        교재
                    </Typography>
                    <Typography variant="body1" ml={1}>
                        [40]
                    </Typography>
                </Stack>
                <div>
                    <Select variant="standard" value={goodsFilter} onChange={onChangeSelect}>
                        {goodsArr.map(({name, value}, idx) => (
                            <MenuItem value={value}>{name}</MenuItem>
                        ))}
                    </Select>
                    <Grid>
                        <TextField variant="standard" />
                    </Grid>
                </div>
            </Stack>
            <GoodsItem />
        </Stack>
    )
}
