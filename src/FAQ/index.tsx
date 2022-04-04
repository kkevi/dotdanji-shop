import React from "react"
import {Stack, Divider, Typography, Button, TextField, IconButton} from "@mui/material"

import SearchRoundedIcon from "@mui/icons-material/SearchRounded"

export default function Index() {
    return (
        <Stack mt={2}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <TextField hiddenLabel sx={{width: 500}} variant="standard" size="medium" />
                <IconButton type="submit">
                    <SearchRoundedIcon fontSize="large" color="primary" />
                </IconButton>
            </Stack>

            {/* <Divider flexItem sx={{borderBottomWidth: 2}} /> */}

            <Stack direction="row" justifyContent="space-between" alignItems="center" py={4} px={6}>
                work here
            </Stack>
        </Stack>
    )
}
