import {Container, Grid} from '@material-ui/core'
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Shell from './components/Shell'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    header: {

    },
    shell: {
      minHeight: "80vh",
    },
    footer: {
      minHeight: "10vh"
    },
  }),
)

function App() {

  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={6}>
      <Grid className={classes.header} item xs={12}>
        <Header />
      </Grid>
      <Grid className={classes.shell} item xs={12}>
        <Container>
          <Shell />
        </Container>
      </Grid>
      <Grid className={classes.footer} item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default App
