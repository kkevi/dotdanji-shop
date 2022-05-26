import React, {useState, useEffect} from "react"

import {useMediaQuery} from "@mui/material"

import WishListPageWeb from "./WishListPageWeb"
import WishListPageMobile from "./WishListPageMobile"

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

    const onDeleteWishItem = () => {}

    /*
     * 체크기능
     */
    useEffect(() => {
        setCheckList(checkList)
    }, [checkList])

    return (
        <>
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
        </>
    )
}
