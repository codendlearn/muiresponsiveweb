import {AppBar, createStyles, Drawer, IconButton, List, ListItem, ListItemText, makeStyles, Theme, Toolbar} from '@material-ui/core'
import {MenuOpen} from '@material-ui/icons'
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootDrawer: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: "column",
        },
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
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <AppBar position="static">
            <Toolbar>
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
                <IconButton onClick={handleMenu}>
                    <MenuOpen />
                </IconButton>
            </Toolbar>
            <Drawer open={open} onClose={handleMenu} variant="temporary" anchor="right">
                <Toolbar />
                <List className={classes.rootDrawer}>
                    <ListItem>
                        <NavLink to="/">
                            <ListItemText>One</ListItemText>
                        </NavLink>
                    </ListItem>
                    <NavLink to="/">
                        <ListItem>
                            <ListItemText>One</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/">
                        <ListItem>
                            <ListItemText>One</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/">
                        <ListItem>
                            <ListItemText>One</ListItemText>
                        </ListItem>
                    </NavLink>
                </List>
            </Drawer>
        </AppBar>
    )
}

export default Header
