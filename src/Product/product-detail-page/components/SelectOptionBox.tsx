//icon
import ClearRoundedIcon from "@mui/icons-material/ClearRounded"
import {IconButton, Stack, Typography} from "@mui/material"
import {OptionCart} from "types/cart-type"
import CountController from "components/count-controller/CountController"
import React, {useEffect, useState} from "react"
//components
import useStyles from "../style"

type Props = {
    index: number
    optionName: string
    optionId: string
    count: number
    optionPrice: number
    selectValueList: OptionCart[]
    onDeleteOption: (val: string) => void
    setSelectValueList: React.Dispatch<React.SetStateAction<OptionCart[]>>
    mobile?: boolean
}

export default function SelectOptionBox(props: Props) {
    const classes = useStyles()
    const {
        index,
        optionName,
        optionId,
        count,
        optionPrice,
        selectValueList,
        onDeleteOption,
        setSelectValueList,
        mobile,
    } = props
    const [optionPriceTotal, setOptionPriceTotal] = useState<number>(optionPrice)

    useEffect(() => {
        setOptionPriceTotal(optionPrice * count)
    }, [count, optionPriceTotal])

    return (
        <Stack
            key={optionId}
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
                    <Typography fontSize={mobile ? 12 : 14}>{optionName}</Typography>
                    <Typography mt={0.5} fontSize={18} fontWeight={700}>
                        {optionPriceTotal.toLocaleString("ko")} 원
                    </Typography>
                </Stack>

                {/* 상품수량조절 */}
                <Stack direction="row" alignItems="center">
                    <CountController
                        index={index}
                        optionId={optionId}
                        count={count}
                        valueList={selectValueList}
                        setValueList={setSelectValueList}
                        mr={1}
                    />

                    <IconButton onClick={() => onDeleteOption(optionId)}>
                        <ClearRoundedIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}
