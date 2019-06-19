import red from "@material-ui/core/colors/red";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        fontFamily: [
            "Roboto Mono",
            "monospace",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),
    },
});

export default theme;
