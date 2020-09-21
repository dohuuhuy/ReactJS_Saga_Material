import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    color: {
        primary: "#D32F2F",
        secondary: "#00BCD4",
        error: "#E64A19"
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {

        backgroundColor: "#7B1FA2",
        borderColor: "yellow",
        borderRadius: 4,
        textColor: "#FFFFFF",
    }
});
export default theme;