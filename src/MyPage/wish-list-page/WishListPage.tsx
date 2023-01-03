import React, {useEffect, useState} from "react"
import {Stack, useMediaQuery, useTheme} from "@mui/material"

import MyPageHeader from "../mypage-header/MyPageHeader"
import WishListPageMobile from "./WishListPageMobile"
import WishListPageWeb from "./WishListPageWeb"

export default function WishListPage() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    const [wishItemList, setWishItemList] = useState([])
    const [checkList, setCheckList] = useState<Record<string, boolean>>(new Object() as Record<string, boolean>)
    const [checkAll, setCheckAll] = useState(true)

    const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckAll(event.target.checked)
        for (const [key, value] of Object.entries(checkList)) {
            checkList[key] = event.target.checked
        }
    }

    const onDeleteWishItem = () => {
        return
    }

    /*
     * 체크기능
     */
    useEffect(() => {
        setCheckList(checkList)
    }, [checkList])

    return (
        <Stack py={mobile ? 9.5 : 13.5}>
            <MyPageHeader title="마이페이지" subtitle={"찜 상품"} mobile={mobile} />
            {mobile ? (
                <WishListPageMobile
                    wishItemList={wishItemList}
                    setWishItemList={setWishItemList}
                    checkList={checkList}
                    setCheckList={setCheckList}
                    checkAll={checkAll}
                    setCheckAll={setCheckAll}
                    onCheckAll={onCheckAll}
                    onDeleteWishItem={onDeleteWishItem}
                />
            ) : (
                <WishListPageWeb
                    wishItemList={wishItemList}
                    setWishItemList={setWishItemList}
                    checkList={checkList}
                    setCheckList={setCheckList}
                    checkAll={checkAll}
                    setCheckAll={setCheckAll}
                    onCheckAll={onCheckAll}
                    onDeleteWishItem={onDeleteWishItem}
                />
            )}
        </Stack>
    )
}
