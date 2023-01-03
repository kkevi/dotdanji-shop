import {Button, Container, Divider, Stack, Typography, useTheme} from "@mui/material"

import React from "react"
import WishListTable from "./components/WishListTable"
import useStyles from "./style"

type WishListPageProps = {
    wishItemList: never[]
    setWishItemList: React.Dispatch<React.SetStateAction<never[]>>
    checkList: Record<string, boolean>
    setCheckList: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
    checkAll: boolean
    setCheckAll: React.Dispatch<React.SetStateAction<boolean>>
    onCheckAll: (event: React.ChangeEvent<HTMLInputElement>) => void
    onDeleteWishItem: () => void
}

export default function WishListPageWeb(prop: WishListPageProps) {
    const {
        wishItemList,
        setWishItemList,
        checkList,
        setCheckList,
        checkAll,
        setCheckAll,
        onCheckAll,
        onDeleteWishItem,
    } = prop
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Container maxWidth="lg">
            <Stack mt={16}>
                <Stack className={classes.rootStack}>
                    <Typography variant="h5" mb={1} className="pointFont" color={theme.palette.secondary.dark}>
                        # 찜상품
                    </Typography>
                    <Button sx={{color: "black"}} onClick={onDeleteWishItem}>
                        선택상품 삭제
                    </Button>
                </Stack>
                <Divider className={classes.divider} flexItem />
                <WishListTable
                    wishItemList={wishItemList}
                    setWishItemList={setWishItemList}
                    checkList={checkList}
                    setCheckList={setCheckList}
                    checkAll={checkAll}
                    onCheckAll={onCheckAll}
                />
                <Divider className={classes.divider} flexItem />

                {/* 주문결제버튼 */}
                <Stack className={classes.rootStack} alignSelf="center" mt={8} width={"50% !important"} mb={16}>
                    <Button variant="outlined" fullWidth>
                        <Typography variant="h6">장바구니에 넣기</Typography>
                    </Button>
                    <Button variant="contained" fullWidth disableElevation>
                        <Typography variant="h6">선택상품 구매하기</Typography>
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}
