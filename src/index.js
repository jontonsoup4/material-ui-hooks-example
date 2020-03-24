import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import App from "./App"
import { AppContextProvider } from "./contexts/AppContext"
import theme from "./theme"

ReactDOM.render(
  <AppContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </AppContextProvider>,
  document.querySelector("#root"),
)
