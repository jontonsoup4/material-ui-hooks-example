import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9d34a5',
    },
    secondary: {
      main: '#eb307b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    "fontFamily": `"Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
})

export default theme
