import {Container, Divider, Stack, Typography, useMediaQuery} from "@mui/material"
import {useTheme} from "@mui/system"

import useStyles from "./style"
import OredrListTable from "./components/OrderListTable"
import OrderListItem from "./components-mobile/OrderListItem"

export default function OrderListPage() {
    const classes = useStyles()
    const theme = useTheme()
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
                </Stack>
                <Divider className={classes.divider} flexItem />
                {mobile ? <OrderListItem /> : <OredrListTable />}

                <Divider className={classes.divider} flexItem />
            </Stack>
        </Container>
    )
}
