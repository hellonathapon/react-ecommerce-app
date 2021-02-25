import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Container, Typography, Button, IconButton, Badge, Avatar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        color: "#333",
        textDecoration: "none",
    },
    small: {
        width: 30,
        height: 30,
    },
    white: {
        backgroundColor: "#fff"
    },
})

function Header({ inCart }) {
    const classes = useStyles();

    return (
        <AppBar variant="outlined" className={classes.white}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Link to="/" className={classes.root}>
                        <Typography 
                        >ShopX
                        </Typography>
                    </Link>
                    <Link to="/cart">
                        <IconButton>
                            <Badge badgeContent={ inCart.length } color="primary">
                                <ShoppingCart />
                            </Badge> 
                        </IconButton>
                    </Link>
                    <Avatar className={classes.small}>N</Avatar>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const mapStateToProps = state => ({ inCart: state.inCart });

export default connect(mapStateToProps) (Header);
