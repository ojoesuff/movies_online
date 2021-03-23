import { green, orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const orangeTheme = createMuiTheme({
    palette: {
        primary: orange,
        type: "dark",
    },
});

export const greenTheme = createMuiTheme({
    palette: {
        primary: green
    },
});