import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
})

function Header() {
    const classes = useStyles();

    return (
        <AppBar variant="outlined" color="white" className={classes.root}>
            <Toolbar>
                <p className={classes.root}>Brand</p>
                <Button>Register</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
