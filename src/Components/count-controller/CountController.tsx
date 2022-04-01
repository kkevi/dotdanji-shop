import AddRoundedIcon from "@mui/icons-material/AddRounded"
//icon
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import {Divider, IconButton, Stack, Typography} from "@mui/material"
import React, {useEffect} from "react"
import {toast} from "react-toastify"

type CountControllerProps = {
    idx: number
    optionId: string
    count: number
    valueList: any[]
    setValueList: React.Dispatch<React.SetStateAction<any[]>>
    mr?: number
}

export default function CountController(props: CountControllerProps) {
    const {idx, optionId, count, valueList, setValueList, mr} = props

    const findIndex = valueList.findIndex(opt => opt.option?.optionId === optionId)

    const onClickReduce = (count: number) => {
        if (count <= 1) return
        valueList[idx] = {...valueList[idx], count: count - 1}
        setValueList(it => [...it])
    }

    const onClickAdd = (count: number) => {
        if (count >= 30) {
            toast.info("30개 이상은 단체 문의를 이용해주세요.")
            return
        }
        valueList[idx] = {...valueList[idx], count: count + 1}
        setValueList(it => [...it])
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
