import React, {useState} from "react"
import {useRouter} from "next/router"
import {Stack, Grid, Typography} from "@mui/material"

import {EventType} from "types/event-type"
import PaginationBox from "src/Components/pagination-box/PaginationBox"
import ImageBox from "src/Components/image-box/ImageBox"

type EventWebProps = {
    eventList: EventType[]
    onClickRouter: (val: string) => void
    mobile: boolean
}

export default function EventMobile(props: EventWebProps) {
    const {eventList, onClickRouter} = props
    const route = useRouter()

    const [activePage, setActivePage] = useState(1)

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber)
    }

    return (
        <Stack mt={2}>
            <Grid container spacing={2}>
                {eventList.map((event, index) => {
                    return (
                        <Grid
                            item
                            xs={6}
                            key={`event-list-${index}`}
                            style={{cursor: "pointer"}}
                            onClick={() => onClickRouter(event.eventId)}
                        >
                            <ImageBox height={150} src={event.thumbnail} />
                            <Stack justifyContent="space-between" alignItems="cetner" mt={1}>
                                <Typography variant="body1" className="pointFont">
                                    {event.title}
                                </Typography>
                                <Typography fontSize={12}></Typography>
                                <Typography fontSize={12} color="#999">
                                    {event.startDate} ~ {event.endDate}
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
