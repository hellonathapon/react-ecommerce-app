import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar, Container, Typography, Button, IconButton, Badge, Avatar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import { connect } from 'react-redux';

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

function Header({ inCart }) {
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
                        <Badge badgeContent={ inCart.length } color="primary">
                            <ShoppingCart />
                        </Badge> 
                    </IconButton>
                    <Avatar className={classes.small}>N</Avatar>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const mapStateToProps = state => ({ inCart: state.inCart });

export default connect(mapStateToProps) (Header);
