import {AppBar, createStyles, IconButton, List, makeStyles, Theme, Toolbar} from '@material-ui/core'
import {MenuOpen} from '@material-ui/icons'
import React from 'react'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            display: 'flex',
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

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuOpen />
                </IconButton>
                <List className={classes.root}>
                    <NavLink to="/">
                        <div>one</div>
                    </NavLink>
                    <NavLink to="/">
                        <div>one</div>
                    </NavLink>

                    <NavLink to="/">
                        <div>one</div>
                    </NavLink>

                    <NavLink to="/">
                        <div>one</div>
                    </NavLink>


                </List>
            </Toolbar>
        </AppBar>
    )
}

export default Header
