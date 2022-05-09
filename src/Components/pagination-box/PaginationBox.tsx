import React from "react"
import styled from "styled-components"
import Pagination from "react-js-pagination"
import {useTheme} from "@mui/system"

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"

type Props = {
    activePage: number
    dataLength: number
    handlePageChange: (pageNumber: number) => void
}

export default function PaginationBox(props: Props) {
    const {activePage, dataLength, handlePageChange} = props
    const theme = useTheme()

    return (
        <PaginationBoxWrapper>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={dataLength}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                prevPageText={
                    <ArrowBackIosNewRoundedIcon
                        sx={{
                            color: theme.palette.primary.dark,
                            fontSize: 18,
                        }}
                    />
                }
                nextPageText={
                    <ArrowForwardIosRoundedIcon
                        sx={{
                            color: theme.palette.primary.dark,
                            fontSize: 18,
                        }}
                    />
                }
                lastPageText=""
                firstPageText=""
            />
        </PaginationBoxWrapper>
    )
}

const PaginationBoxWrapper = styled.div({
    width: "100%",
    marginTop: 40,

    "& ul": {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        "& li": {
            padding: "4px 12px",
            width: "fit-content",
            opacity: 0.4,
            fontSize: 16,
            a: {
                color: "#232552",
                textDecoration: "none",
            },
        },

        "& .active": {
            opacity: 1,
        },
    },
})
