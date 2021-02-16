import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import HeroImg from '../../assets/images/bg.jpg';

const useStyles = makeStyles({
    root: {
        height: "400px"
    },
    image: {
        objectFit: "cover",
    }
})

function Jumbotron() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img src={HeroImg} style={{objectFit: "cover"}} alt=""/>
        </Box>
    )
}

export default Jumbotron
