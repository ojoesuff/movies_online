import { ThemeProvider } from '@material-ui/core/styles';
import { mainTheme } from "../../themes";
import CssBaseline from '@material-ui/core/CssBaseline';

const Theme = (props) => {
    return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
    )
}

export default Theme;