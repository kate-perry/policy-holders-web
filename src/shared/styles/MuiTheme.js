import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        primary: { main: 'rgb(38, 54, 69)' },
        secondary: { main: 'rgb(63, 174, 239)' },
        contrastThreshold: 3,
        background: { default: 'rgb(255, 255, 255' },
    },
    typography: {
        fontFamily: ["Lato"].join(","),
    }
})