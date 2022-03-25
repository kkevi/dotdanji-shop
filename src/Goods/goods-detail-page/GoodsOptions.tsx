import React from "react"
import {Divider, IconButton, Stack, Typography} from "@mui/material"
//components
import useStyles from "./style"
import {OptionCart} from "../goods-type"
import CountController from "Components/count-controller/CountController"
//icon
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import AddRoundedIcon from "@mui/icons-material/AddRounded"

type Props = {
    idx: number
    option: any
    count: number
    price: number
    selectValueList: OptionCart[]
    setSelectValueList: (val: OptionCart[]) => void
    onDeleteOption: (val: string) => void
}

export default function GoodsOptions(props: Props) {
    const classes = useStyles()
    const {idx, option, count, price, selectValueList, setSelectValueList, onDeleteOption} = props

    console.log("selectValueList", selectValueList)

    const findIndex = selectValueList.findIndex(opt => opt.option.optionId === option.id)
    let copyOption = [...selectValueList]

    console.log("findIndex", findIndex)

    const onClickReduce = (count: number, value: number, price: number) => {
        if (count === 1) return
        if (findIndex === -1) {
            copyOption[idx] = {...copyOption[idx], price: price - value, count: count - 1}
        }

        setSelectValueList(copyOption)
    }
    const onClickAdd = (count: number, value: number) => {
        if (findIndex === -1) {
            copyOption[idx] = {...copyOption[idx], price: value * (count + 1), count: count + 1}
        }

        setSelectValueList(copyOption)
    }

    return (
        <Stack
            key={option.optionId}
            bgcolor="rgba(255,255,255,0.7)"
            my={0.5}
            width="100%"
            p={1}
            px={1.5}
            direction="column"
            alignItems="flex-start"
        >
            <Stack className={classes.rootStack}>
                {/* 선택상품 */}
                <Stack direction="column">
                    <Typography fontSize={14}>{option.text}</Typography>
                    <Typography mt={0.5} fontSize={18} fontWeight={700}>
                        {price.toLocaleString("ko")}원
                    </Typography>
                </Stack>

                {/* 상품수량조절 */}
                <Stack direction="row" alignItems="center">
                    {/* <CountController
                        idx={idx}
                        option={option}
                        count={count}
                        price={price}
                        selectValueList={selectValueList}
                        setSelectValueList={setSelectValueList}
                        mr={16}
                    /> */}
                    <Stack className={classes.countButtonBox}>
                        <IconButton
                            disabled={count === 1 ? true : false}
                            onClick={() => onClickReduce(count, option.value, price)}
                        >
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

                    <IconButton onClick={() => onDeleteOption(option.optionId)}>
                        <ClearRoundedIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}
