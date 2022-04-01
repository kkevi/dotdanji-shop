//icon
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import {IconButton, Stack, Typography} from "@mui/material"
import CountController from "Components/count-controller/CountController"
import React, {useEffect, useState} from "react"
import {OptionCart} from "../goods-type"
//components
import useStyles from "./style"

type Props = {
    idx: number
    option: any
    count: number
    defaultPrice: number
    optionDefaultPrice: number
    selectValueList: OptionCart[]
    onDeleteOption: (val: string) => void
    setSelectValueList: React.Dispatch<React.SetStateAction<OptionCart[]>>
}

export default function GoodsOptions(props: Props) {
    const classes = useStyles()
    const {idx, option, count, defaultPrice, optionDefaultPrice, selectValueList, onDeleteOption, setSelectValueList} =
        props
    const optionPrice = defaultPrice + optionDefaultPrice
    const [optionPriceTotal, setOptionPriceTotal] = useState<number>(optionPrice)

    useEffect(() => {
        setOptionPriceTotal(optionPrice * count)
    }, [count, optionPriceTotal])

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
                        {optionPriceTotal.toLocaleString("ko")}원
                    </Typography>
                </Stack>

                {/* 상품수량조절 */}
                <Stack direction="row" alignItems="center">
                    <CountController
                        idx={idx}
                        optionId={option.optionId}
                        count={count}
                        valueList={selectValueList}
                        setValueList={setSelectValueList}
                        mr={1}
                    />

                    <IconButton onClick={() => onDeleteOption(option.optionId)}>
                        <ClearRoundedIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}
