import React, {useState} from "react"
import {Container, Stack, Tab, Tabs, Typography} from "@mui/material"

import useStyles from "./style"

export default function ExtraInformationModule() {
    const classes = useStyles()

    const [tab, setTab] = useState(0)

    return (
        <Container maxWidth="md">
            <Stack width="100%" py={2} alignItems="center">
                <Tabs sx={{marginBottom: 8}} centered value={tab} onChange={(event, value) => setTab(value)}>
                    {/* {Object.values(customerServiceTabs).map((tabName, idx) => ( */}
                    <Tab
                        key={"customer-service"}
                        sx={{width: 200, padding: 2}}
                        label={<Typography fontSize={18}>상품상세정보</Typography>}
                        // value={idx}
                    />
                    <Tab
                        key={"customer-service"}
                        sx={{width: 200, padding: 2}}
                        label={<Typography fontSize={18}>배송/교환 및 반품안내</Typography>}
                        // value={idx}
                    />
                    {/* ))} */}
                </Tabs>
                <Typography>스토리셀프 홍보 내용</Typography>
            </Stack>
        </Container>
    )
}
