import React, {useState, useEffect} from "react"

import {Container, Stack, Typography, Button, Divider} from "@mui/material"

import useStyles from "./style"
import WishListTable from "./Component/WishListTable"
import {useTheme} from "@mui/system"

export default function WishListPage() {
    const classes = useStyles()
    const theme = useTheme()

    const [wishItemList, setWishItemList] = useState([])
    const [checkList, setCheckList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [checkAll, setCheckAll] = useState(true)

    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("work 1")
        setCheckAll(event.target.checked)
        console.log("work 2", checkList)
        for (const [key, value] of Object.entries(checkList)) {
            checkList[key] = event.target.checked
        }
        console.log("work 3")
    }

    const onDeleteWishItem = () => {}

    /*
     * 체크기능
     */
    useEffect(() => {
        setCheckList(checkList)
        console.log("work useEffect", checkList)
    }, [checkList])

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
                    <Button variant="outlined" fullWidth onClick={() => {}}>
                        <Typography variant="h6">장바구니에 넣기</Typography>
                    </Button>
                    <Button variant="contained" fullWidth onClick={() => {}} disableElevation>
                        <Typography variant="h6">선택상품 구매하기</Typography>
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}
