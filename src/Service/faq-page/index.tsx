import React, {useEffect, useState} from "react"

import {useMediaQuery, useTheme} from "@mui/material"

import {CategoryTypeKey} from "types/service-type"
import {FAKE_FAQ_DATA} from "src/Components/fake-data/fake-service"
import {FaqDataType} from "types/service-type"

import FAQWeb from "./FAQWeb"
import FAQMobile from "./FAQMobile"

export default function Index() {
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [expanded, setExpanded] = useState<string | false>("panel")
    const [faqList, setFaqList] = useState<FaqDataType[]>([])
    const [faqFilterList, setFaqFilterList] = useState<FaqDataType[]>([])
    const [selected, setSelected] = useState<"all" | CategoryTypeKey>("all")

    const handleClick = (categoryKey: "all" | CategoryTypeKey) => {
        setSelected(categoryKey)
        if (categoryKey === "all") setFaqFilterList(faqList)
        else setFaqFilterList(faqList.filter(it => it.category === categoryKey))
    }

    useEffect(() => {
        setFaqList(FAKE_FAQ_DATA)
        setFaqFilterList(FAKE_FAQ_DATA)
    }, [faqList])

    return (
        <>
            {mobile ? (
                <FAQMobile
                    faqFilterList={faqFilterList}
                    selected={selected}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    handleClick={handleClick}
                />
            ) : (
                <FAQWeb
                    faqList={faqList}
                    faqFilterList={faqFilterList}
                    selected={selected}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    handleClick={handleClick}
                />
            )}
        </>
    )
}
