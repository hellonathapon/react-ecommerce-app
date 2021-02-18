import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})

function Header() {
    const classes = useStyles();

    return (
        <AppBar variant="outlined" color="#fff">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography 
                        className={classes.root}
                        fontWeight={500}
                    >ShopX</Typography> 
                    <Button>Register</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
