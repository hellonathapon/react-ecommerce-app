import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Container, Typography, Button, IconButton, Badge, Avatar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    small: {
        width: 30,
        height: 30,
    },
    white: {
        backgroundColor: "#fff"
    }
})

function Header() {
    const classes = useStyles();

    return (
        <AppBar variant="outlined" className={classes.white}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography 
                        className={classes.root}
                        fontWeight={500}
                        color="#333"
                    >ShopX</Typography>
                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCart />
                        </Badge> 
                    </IconButton>
                    <IconButton>
                        <Avatar className={classes.small}>N</Avatar>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
