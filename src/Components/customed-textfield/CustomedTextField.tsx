import {TextField, TextFieldProps} from "@mui/material"
import {useTheme} from "@mui/system"
import {styled} from "@mui/material/styles"

export const CustomedTextField = styled((props: TextFieldProps) => {
    const theme = useTheme()
    return (
        <TextField
            fullWidth
            InputProps={{
                style: {fontSize: theme.breakpoints.down("sm") ? 14 : 16},
            }}
            InputLabelProps={{
                style: {fontSize: theme.breakpoints.down("sm") ? 14 : 16},
            }}
            {...props}
        />
    )
})(({theme}) => ({
    backgroundColor: "rgba(208,235,245,0.1)",
    borderRadius: 4,
    marginBottom: theme.breakpoints.down("sm") ? 15 : 30,

    "& .Mui-disabled": {
        color: "#646566",
    },
}))
