import React from "react"

import {Container, Stack, Typography, Button, Divider} from "@mui/material"

import useStyles from "./style"
import MyPageHeader from "../mypage-header/MyPageHeader"
import WishListTable from "./WishListTable"

export default function WishListPage() {
    const classes = useStyles()

    const onDeleteWishItem = () => {}

    return (
        <>
            {/* <MyPageHeader title="구매내역" /> */}
            <Container maxWidth="lg">
                <Stack className={classes.rootStack}>
                    <Typography variant="h5" mb={1} ml={1} fontWeight={700} alignSelf="flex-start">
                        찜상품
                    </Typography>
                    <Button sx={{color: "black"}} onClick={onDeleteWishItem}>
                        선택상품 삭제
                    </Button>
                </Stack>
                <Divider className={classes.divider} flexItem />
                <WishListTable />

                <Divider className={classes.divider} flexItem />

                {/* 주문결제버튼 */}
                <Stack className={classes.rootStack} width={"50% !important"} mb={16}>
                    <Button variant="outlined" fullWidth onClick={() => {}}>
                        <Typography variant="h6">장바구니에 넣기</Typography>
                    </Button>
                    <Button variant="contained" fullWidth onClick={() => {}} disableElevation>
                        <Typography variant="h6">선택상품 구매하기</Typography>
                    </Button>
                </Stack>
            </Container>
        </>
    )
}
