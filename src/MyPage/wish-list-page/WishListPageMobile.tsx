import React from "react"

import {Container, Stack, Typography, Button, Divider, useTheme} from "@mui/material"

import useStyles from "./style"
import WishListItemMobile from "./components/WishListItemMobile"

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

export default function WishListPageMobile(prop: WishListPageProps) {
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
        <Container maxWidth="sm">
            <Stack mt={6} className={classes.rootStack}>
                <Typography variant="h6" mb={1} className="pointFont" color={theme.palette.secondary.dark}>
                    # 찜상품
                </Typography>
                <Button sx={{color: "black"}} onClick={onDeleteWishItem}>
                    선택상품 삭제
                </Button>
            </Stack>
            <Divider className={classes.divider} flexItem />
            <WishListItemMobile />

            <Divider className={classes.divider} flexItem />

            {/* 주문결제버튼 */}
            <Stack className={classes.rootStack} alignSelf="center">
                <Button variant="outlined" fullWidth onClick={() => {}}>
                    <Typography variant="body2">장바구니에 넣기</Typography>
                </Button>
                <Button variant="contained" fullWidth onClick={() => {}} disableElevation>
                    <Typography variant="body2">선택상품 구매하기</Typography>
                </Button>
            </Stack>
        </Container>
    )
}
