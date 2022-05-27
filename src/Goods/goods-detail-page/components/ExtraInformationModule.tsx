import React, {useState, useRef, MutableRefObject} from "react"
import {Container, Stack, Tab, Tabs, Typography} from "@mui/material"

import useStyles from "../style"

import ExtraInformationTab1 from "./ExtraInformationTab1"
import ExtraInformationTab2 from "./ExtraInformationTab2"

export default function ExtraInformationModule() {
    const classes = useStyles()

    const scrollRef = useRef([]) as MutableRefObject<any[]>
    const scrollToElement = (index: number) => scrollRef.current[index]?.scrollIntoView({behavior: "smooth", top: 290})

    const [tab, setTab] = useState(0)
    const tabs: string[] = ["상품상세정보", "배송/교환 및 반품안내"]

    return (
        <Container maxWidth="md" sx={{backgroundColor: "white"}}>
            <Stack
                width="100%"
                my={8}
                style={{position: "sticky", top: 76, backgroundColor: "white"}}
                alignItems="center"
            >
                <Tabs centered value={tab} onChange={(event, value) => setTab(value)}>
                    {tabs.map((tabName, index) => (
                        <Tab
                            key={"service" + index}
                            sx={{width: 350, padding: 2}}
                            label={<Typography fontSize={15}>{tabName}</Typography>}
                            value={index}
                            onClick={() => scrollToElement(index)}
                        />
                    ))}
                </Tabs>
            </Stack>

            <div ref={el => (scrollRef.current[0] = el)} style={{height: 190}} />
            <ExtraInformationTab1 />

            <div ref={el => (scrollRef.current[1] = el)} style={{height: 190}} />
            <ExtraInformationTab2 />
        </Container>
    )
}
