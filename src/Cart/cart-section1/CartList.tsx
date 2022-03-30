import React from "react"
import {TableCell, Checkbox, Typography, Stack, IconButton, Divider} from "@mui/material"

import {OptionCart} from "Cart/cart-type"
import ImageBox from "Components/image-box/ImageBox"
import CountController from "Components/count-controller/CountController"

//icon
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import AddRoundedIcon from "@mui/icons-material/AddRounded"

type CartListProps = {
    idx: number
    name: string
    src: string
    count: number
    price: number
    option: any
    selectValueList: OptionCart[]
    setSelectValueList: (val: OptionCart[]) => void
}

export default function CartList(props: CartListProps) {
    const {idx, name, src, count, price, option, selectValueList, setSelectValueList} = props

    // const findIndex = selectValueList.findIndex(opt => opt.option?.optionId === option.id)
    // let copyOption = [...selectValueList]
    // const onClickReduce = (count: number, value: number, price: number) => {
    //     if (count === 1) return
    //     if (findIndex === -1) {
    //         copyOption[idx] = {...copyOption[idx], price: price - value, count: count - 1}
    //     }
    //     setSelectValueList(copyOption)
    // }
    // const onClickAdd = (count: number, value: number) => {
    //     console.log("working findIndex", findIndex)
    //     if (findIndex === -1) {
    //         copyOption[idx] = {...copyOption[idx], price: value * (count + 1), count: count + 1}
    //     }
    //     setSelectValueList(copyOption)
    // }

    return (
        <>
            <TableCell padding="checkbox">
                <Checkbox color="primary" />
            </TableCell>
            <TableCell width="60%" align="center">
                <Stack direction={"row"}>
                    <ImageBox width={150} height={150} src={src} style={{marginLeft: 20}} />
                    <Stack ml={4} direction="column" alignItems="flex-start" justifyContent="center">
                        <Typography fontSize={20} fontWeight={700} mb={1}>
                            {name}
                        </Typography>
                        <Typography fontSize={14} mb={1}>
                            {option.value.toLocaleString("ko")} 원
                        </Typography>
                        <Stack direction="row" alignItems="center" justifyContent="center">
                            {option.text}
                        </Stack>
                    </Stack>
                </Stack>
            </TableCell>
            <TableCell width={120} align="center">
                <CountController
                    idx={idx}
                    option={option}
                    count={count}
                    price={price}
                    selectValueList={selectValueList}
                    setSelectValueList={setSelectValueList}
                />
                {/* <Stack flexDirection="row" alignItems="center" sx={{border: "1px solid #726C60"}}>
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
                </Stack> */}
            </TableCell>
            <TableCell align="center">{(option.value * count).toLocaleString("ko")} 원</TableCell>
        </>
    )
}
