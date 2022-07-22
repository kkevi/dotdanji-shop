import React from "react"
import {useRouter} from "next/router"
import {Container, Divider, Stack, Typography, useMediaQuery, useTheme} from "@mui/material"

import useStyles from "./style"
import OredrListTable from "./components/OrderListTable"
import OrderListItem from "./components-mobile/OrderListItem"

type Props = {
    front?: boolean
}

export default function OrderListPage({front}: Props) {
    const classes = useStyles()
    const theme = useTheme()
    const route = useRouter()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Container maxWidth="lg">
            <Stack mt={mobile ? 4 : 16}>
                <Stack className={classes.rootStack}>
                    <Typography
                        variant={mobile ? "h6" : "h5"}
                        mb={1}
                        className="pointFont"
                        color={theme.palette.secondary.dark}
                    >
                        # 구매내역
                    </Typography>

                    {front ? (
                        <Typography
                            fontSize={14}
                            fontWeight={700}
                            color={theme.palette.primary.dark}
                            sx={{textDecoration: "underline"}}
                            onClick={() => route.push("/mypage/orderlist")}
                        >
                            더보기
                        </Typography>
                    ) : (
                        <></>
                    )}
                </Stack>
                <Divider className={classes.divider} flexItem />
                {mobile ? <OrderListItem /> : <OredrListTable />}

                <Divider className={classes.divider} flexItem />
            </Stack>
        </Container>
    )
}
