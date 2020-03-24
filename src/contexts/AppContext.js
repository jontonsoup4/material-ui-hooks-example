import React from "react"

const DEFAULT_CONTEXT = {
  count: 0,
  interval: 1,
}

export const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
  const [appContext, setContext] = React.useState(DEFAULT_CONTEXT);

  const setAppContext = (newValue) => setContext((prev) => ({
    ...prev,
    ...newValue,
  }))

  const defaultContext = {
    ...appContext,
    setAppContext,
  };

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  )
}
