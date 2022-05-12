import React from "react"

import {Dialog, DialogContent, DialogTitle, IconButton, Typography} from "@mui/material"
import {styled} from "@mui/material/styles"
import CloseIcon from "@mui/icons-material/Close"

import {contents} from "./Terms"
import useStyles from "src/Notice/notice-detail-page/style"

type TermsDialogProps = {
    id: number
    setVisibleDialog: (val: boolean) => void
}

export default function TermsDialog(prop: TermsDialogProps) {
    const classes = useStyles()
    const {id, setVisibleDialog} = prop
    const BootstrapDialog = styled(Dialog)(({theme}) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }))

    return (
        <>
            <BootstrapDialog
                onClose={() => setVisibleDialog(false)}
                aria-labelledby="customized-dialog-title"
                open={true}
            >
                <DialogTitle sx={{m: 0, p: 2, fontSize: 16}}>
                    {contents[id - 1].title}
                    <IconButton
                        aria-label="close"
                        onClick={() => setVisibleDialog(false)}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: "#757575",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers style={{maxHeight: 700}}>
                    <Typography variant="subtitle2" gutterBottom>
                        <div
                            dangerouslySetInnerHTML={{__html: contents[id - 1].content}}
                            className={classes.htmlContainer}
                        />
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </>
    )
}
