import React from "react"

import {Stack, IconButton, InputBase, Divider, ButtonGroup, Button} from "@mui/material"

import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import FaqAccordion from "./faq-accordion/FaqAccordion"

import {categoryList, CategoryTypeKey} from "types/service-type"
import {FaqDataType} from "types/service-type"

type FAQMobileProps = {
    faqFilterList: FaqDataType[]
    selected: string | CategoryTypeKey
    expanded: string | false
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>
    handleClick: (categoryKey: "all" | CategoryTypeKey) => void
}

export default function FAQMobile(props: FAQMobileProps) {
    const {faqFilterList, selected, expanded, setExpanded, handleClick} = props

    return (
        <Stack>
            <Stack
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                alignSelf="center"
                px={2}
                py={0.5}
                sx={{width: "90%", backgroundColor: "rgba(208, 235, 245, .5)", borderRadius: 4}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1, fontSize: 14}}
                    placeholder="궁금한 것을 검색해보세요."
                    inputProps={{"aria-label": "search keyword"}}
                />
                <IconButton type="submit" sx={{p: "10px"}} aria-label="search">
                    <SearchRoundedIcon />
                </IconButton>
            </Stack>

            {/* chips */}
            <ButtonGroup sx={{py: 3}}>
                <Button
                    sx={{width: "3.5rem", fontSize: 12, px: 0}}
                    variant={selected === "all" ? "contained" : "outlined"}
                    onClick={() => handleClick("all")}
                    disableElevation
                    color="info"
                >
                    전체
                </Button>
                {Object.entries(categoryList).map((category, index) => {
                    const key = category[0] as CategoryTypeKey
                    const name = category[1]
                    return (
                        <Button
                            key={"faqchips" + index}
                            sx={{width: "3.5rem", fontSize: 12, px: 0}}
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

            {/* 아코디언 */}
            <Stack direction="column" justifyContent="center" alignItems="center" px={2}>
                <Divider flexItem sx={{borderBottom: "2px solid #777777"}} />
                {faqFilterList
                    .map((data, index) => {
                        return (
                            <FaqAccordion
                                index={index}
                                key={"faqAccordion" + index}
                                category={data.category}
                                title={data.title}
                                content={data.content}
                                setExpanded={setExpanded}
                                expanded={expanded}
                                mobile
                            />
                        )
                    })
                    .reverse()}
            </Stack>
        </Stack>
    )
}
