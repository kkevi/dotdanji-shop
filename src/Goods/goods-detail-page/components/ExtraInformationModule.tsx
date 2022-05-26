import React, {useState, useRef, MutableRefObject} from "react"
import {Container, Stack, Tab, Tabs, Typography} from "@mui/material"

import useStyles from "../style"

import ExtraInformationTab1 from "./ExtraInformationTab1"
import ExtraInformationTab2 from "./ExtraInformationTab2"

export default function ExtraInformationModule() {
    const classes = useStyles()

    const scrollRef = useRef([]) as MutableRefObject<any[]>
    const scrollToElement = (idx: number) =>
        scrollRef.current[idx]?.scrollIntoView({behavior: "smooth", block: "center"})

    const [tab, setTab] = useState(0)
    const [scroll, setScroll] = useState(0)
    const tabs: string[] = ["상품상세정보", "배송/교환 및 반품안내"]

    return (
        <Container maxWidth="md" sx={{backgroundColor: "white"}}>
            <Stack width="100%" py={8} alignItems="center">
                <Tabs sx={{marginBottom: 8}} centered value={tab} onChange={(event, value) => setTab(value)}>
                    {tabs.map((tabName, idx) => (
                        <Tab
                            key={"customer-service" + idx}
                            sx={{width: 350, padding: 2}}
                            label={<Typography fontSize={15}>{tabName}</Typography>}
                            value={idx}
                            onClick={() => scrollToElement(idx)}
                        />
                    ))}
                </Tabs>
            </Stack>

            <div ref={el => (scrollRef.current[0] = el)} style={{paddingTop: 90}}>
                <ExtraInformationTab1 />
            </div>
            <div id="test" ref={el => (scrollRef.current[1] = el)} style={{paddingTop: 290}}>
                <ExtraInformationTab2 />
            </div>
        </Container>
    )
}
