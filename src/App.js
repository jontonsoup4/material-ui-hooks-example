import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "./components/Button"
import Grid from "@material-ui/core/Grid"
import { AppContext } from "./contexts/AppContext"

export default () => {
  const { count, interval, setAppContext } = React.useContext(AppContext)

  const handleCountChange = (value) => () => setAppContext({ count: count + value })

  return (
    <Container maxWidth="sm">
      <Box my={4} textAlign="center">
        <Typography align="center" component="h1" gutterBottom variant="h4">
          Material UI Example
        </Typography>
        <Box my={4}>
          <Typography component="h2" gutterBottom variant="h5">
            Count: {count}
          </Typography>
        </Box>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Button onClick={handleCountChange(-interval)}>Sub {interval}</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleCountChange(interval)}>Add {interval}</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
