import React, {useEffect, useState} from "react"
import {useTheme} from "@mui/system"
import {Stack, IconButton, InputBase, Divider, ButtonGroup, Button} from "@mui/material"

import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import FaqAccordion from "./faq-accordion/FaqAccordion"

import {categoryList, CategoryTypeKey} from "src/Inquiry/InquiryDataType"
import PaginationBox from "components/pagination-box/PaginationBox"
import {FAKE_FAQ_DATA} from "src/Components/fake-data/fake-service"

export type FaqDataType = {
    category: CategoryTypeKey
    title: string
    content: string
}

export default function Index() {
    const theme = useTheme()
    const [expanded, setExpanded] = useState<string | false>("panel")
    const [activePage, setActivePage] = useState(1)
    const [faqList, setFaqList] = useState<FaqDataType[]>([])
    const [faqFilterList, setFaqFilterList] = useState<FaqDataType[]>([])
    const [selected, setSelected] = useState<"all" | CategoryTypeKey>("all")

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber)
    }

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
        <Stack mt={2}>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                py={4}
                mx={6}
                sx={{
                    with: "100%",
                    backgroundColor: "rgba(208, 235, 245, .5)",
                    borderTopLeftRadius: 18,
                    borderBottomRightRadius: 18,
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    px={2}
                    py={0.5}
                    sx={{width: 600, backgroundColor: "white", borderRadius: 8}}
                >
                    <InputBase
                        sx={{ml: 1, flex: 1, fontSize: 18}}
                        placeholder="궁금한 것을 검색해보세요."
                        inputProps={{"aria-label": "search keyword"}}
                    />
                    <IconButton type="submit" sx={{p: "10px"}} aria-label="search">
                        <SearchRoundedIcon />
                    </IconButton>
                </Stack>
            </Stack>

            {/* chips */}
            <Stack py={4} px={6} direction="row" justifyContent="center" alignItems="center" spacing={4}>
                <ButtonGroup>
                    <Button
                        sx={{width: "6rem"}}
                        variant={selected === "all" ? "contained" : "outlined"}
                        onClick={() => handleClick("all")}
                        disableElevation
                        color="info"
                    >
                        전체
                    </Button>
                    {Object.entries(categoryList).map((category, idx) => {
                        const key = category[0] as CategoryTypeKey
                        const name = category[1]
                        return (
                            <Button
                                key={"faqchips" + idx}
                                sx={{width: "6rem"}}
                                variant={selected === key ? "contained" : "outlined"}
                                onClick={() => handleClick(key)}
                                disableElevation
                                color="info"
                            >
                                {name}
                            </Button>
                        )
                    })}
                </ButtonGroup>
            </Stack>

            {/* 아코디언 */}
            <Stack direction="column" justifyContent="center" alignItems="center" px={6}>
                <Divider flexItem sx={{borderBottom: "2px solid #777777"}} />
                {faqFilterList
                    .map((data, idx) => {
                        return (
                            <FaqAccordion
                                idx={idx}
                                key={"faqAccordion" + idx}
                                category={data.category}
                                title={data.title}
                                content={data.content}
                                setExpanded={setExpanded}
                                expanded={expanded}
                            />
                        )
                    })
                    .reverse()}

                <PaginationBox
                    activePage={activePage}
                    dataLength={faqList.length}
                    handlePageChange={handlePageChange}
                />
            </Stack>
        </Stack>
    )
}
