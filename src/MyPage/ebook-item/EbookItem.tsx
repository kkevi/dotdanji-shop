import React from "react"
import {useRouter} from "next/router"
import {Stack, Typography} from "@mui/material"

import ImageBox from "components/image-box/ImageBox"

type EBookItemProps = {
    title: string
    url: string
    images: string
    mobile?: boolean
}

export default function EBookItem({title, url, images, mobile}: EBookItemProps) {
    const route = useRouter()

    return (
        <Stack direction="column" justifyContent="center" alignItems="center">
            <ImageBox
                height={mobile ? 150 : 220}
                src={images}
                style={{borderRadius: 10, cursor: "pointer"}}
                onClick={() => route.push("#")}
            />

            <Typography mt={mobile ? 1 : 2} fontSize={mobile ? 14 : 16} fontWeight={700}>
                {title}
            </Typography>
        </Stack>
    )
}
