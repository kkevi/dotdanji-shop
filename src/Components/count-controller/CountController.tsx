import AddRoundedIcon from "@mui/icons-material/AddRounded"
//icon
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import {Divider, IconButton, Stack, Typography} from "@mui/material"
import {OptionCart} from "Goods/goods-type"
import React from "react"
import {toast} from "react-toastify"

type CountControllerProps = {
    idx: number
    optionId: string
    count: number
    defaultPrice: number
    price: number
    selectValueList: any[]
    setSelectValueList: React.Dispatch<React.SetStateAction<any[]>>
    mr?: number
}

export default function CountController(props: CountControllerProps) {
    const {idx, optionId, count, defaultPrice, price, selectValueList, setSelectValueList, mr} = props

    const findIndex = selectValueList.findIndex(opt => opt.option?.optionId === optionId)
    let copyOption = [...selectValueList]

    const onClickReduce = (count: number) => {
        if (count <= 1) return
        if (findIndex !== -1) {
            copyOption[idx] = {...copyOption[idx], count: count - 1}
        }
        setSelectValueList(copyOption)
    }

    const onClickAdd = (count: number) => {
        if (count >= 30) {
            toast.info("30개 이상은 단체 문의를 이용해주세요.")
            return
        }
        if (findIndex !== -1) {
            copyOption[idx] = {...copyOption[idx], count: count + 1}
        }
        setSelectValueList(copyOption)
    }

    return (
        <Stack flexDirection="row" alignItems="center" mr={mr ? mr : 0} sx={{border: "1px solid #726C60"}}>
            <IconButton disabled={count === 1 ? true : false} onClick={() => onClickReduce(count)}>
                <RemoveRoundedIcon />
            </IconButton>

            <Divider orientation="vertical" flexItem />

            <Typography width={40} align="center">
                {count}
            </Typography>

            <Divider orientation="vertical" flexItem />

            <IconButton onClick={() => onClickAdd(count)}>
                <AddRoundedIcon />
            </IconButton>
        </Stack>
    )
}
