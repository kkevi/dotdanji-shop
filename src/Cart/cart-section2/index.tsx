import {Stack, Button, Typography} from "@mui/material"
import Router from "next/router"
import useStyles from "./style"
type Props = {
    onChangeNextStep: (index: number) => void
}

export default function CartSection2(props: Props) {
    const classes = useStyles()
    const {onChangeNextStep} = props

    const onClickOrder = () => {
        onChangeNextStep(2)
    }
    return (
        <>
            <div></div>
            <Stack className={classes.rootStack} width={"50% !important"} mb={16}>
                <Button variant="outlined" fullWidth onClick={() => onChangeNextStep(0)}>
                    <Typography variant="h6">취소하기</Typography>
                </Button>
                <Button variant="contained" fullWidth onClick={onClickOrder} disableElevation>
                    <Typography variant="h6">결제하기</Typography>
                </Button>
            </Stack>
        </>
    )
}
