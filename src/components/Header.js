import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Container, Typography, Button, IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'

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
                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart />
                        </Badge> 
                    </IconButton>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
