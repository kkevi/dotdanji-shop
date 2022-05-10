import {Container, Divider, Stack, Typography} from "@mui/material"
import {useTheme} from "@mui/system"

import useStyles from "./style"
import OredrListTable from "./Component/OrderListTable"

export default function OrderListPage() {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Container maxWidth="lg">
            <Stack mt={16}>
                <Stack className={classes.rootStack}>
                    <Typography variant="h5" mb={1} className="pointFont" color={theme.palette.secondary.dark}>
                        # 구매내역
                    </Typography>
                </Stack>
                <Divider className={classes.divider} flexItem />
                <OredrListTable />
                <Divider className={classes.divider} flexItem />
            </Stack>
        </Container>
    )
}
