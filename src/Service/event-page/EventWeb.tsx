import React, {useState} from "react"
import {useRouter} from "next/router"
import {Stack, Grid, Typography} from "@mui/material"

import {EventType} from "types/event-type"
import PaginationBox from "src/Components/pagination-box/PaginationBox"
import ImageBox from "src/Components/image-box/ImageBox"

type EventWebProps = {
    eventList: EventType[]
    onClickRouter: (val: string) => void
}

export default function EventWeb({eventList, onClickRouter}: EventWebProps) {
    const route = useRouter()
    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber)
    }

    return (
        <Stack mt={2}>
            <Grid container spacing={3}>
                {eventList.map((itm, index) => {
                    return (
                        <Grid
                            item
                            lg={4}
                            md={4}
                            key={`eventlist${index}`}
                            style={{cursor: "pointer"}}
                            onClick={() => onClickRouter(itm.eventId)}
                        >
                            <ImageBox height={220} src="" />
                            <Stack justifyContent="space-between" alignItems="cetner" mt={1}>
                                <Typography variant="h6" className="pointFont">
                                    {itm.title}
                                </Typography>
                                <Typography fontSize={17}></Typography>
                                <Typography fontSize={17} color="#999">
                                    {itm.startDate} ~ {itm.endDate}
                                </Typography>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
            <PaginationBox activePage={activePage} dataLength={10} handlePageChange={handlePageChange} />
        </Stack>
    )
}
