import React, {useEffect} from "react"
import {Divider, IconButton, Stack, Typography} from "@mui/material"

//icon
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import AddRoundedIcon from "@mui/icons-material/AddRounded"

import {OptionCart} from "Goods/goods-type"

type CountControllerProps = {
    idx: number
    option: any
    count: number
    price: number
    selectValueList: OptionCart[]
    setSelectValueList: (val: OptionCart[]) => void
    mr?: number
}

export default function CountController(props: CountControllerProps) {
    const {idx, option, count, price, selectValueList, setSelectValueList, mr} = props

    console.log("idx", idx)

    const findIndex = selectValueList.findIndex(opt => opt.option?.optionId === option.optionId)
    let copyOption = [...selectValueList]

    const onClickReduce = (count: number, value: number, price: number) => {
        if (count === 1) return
        if (findIndex !== -1) {
            copyOption[idx] = {...copyOption[idx], price: price - value, count: count - 1}
        }
        setSelectValueList(copyOption)
    }

    const onClickAdd = (count: number, value: number) => {
        if (findIndex !== -1) {
            copyOption[idx] = {...copyOption[idx], price: value * (count + 1), count: count + 1}
        }

        console.log("copyOption", copyOption)
        setSelectValueList(copyOption)
        console.log("worked well! :: selectValueList", copyOption)
        console.log("worked well! :: copyOption", copyOption)
    }

    return (
        <Stack flexDirection="row" alignItems="center" mr={mr ? mr : 0} sx={{border: "1px solid #726C60"}}>
            <IconButton disabled={count === 1 ? true : false} onClick={() => onClickReduce(count, option.value, price)}>
                <RemoveRoundedIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <Typography width={40} align="center">
                {count}
            </Typography>
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={() => onClickAdd(count, option.value)}>
                <AddRoundedIcon />
            </IconButton>
        </Stack>
    )
}
