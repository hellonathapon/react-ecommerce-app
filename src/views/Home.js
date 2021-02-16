import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, CardMedia } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles({
    image: {
        backgroundColor: "green"
    },
    a: {
        height: "100px"
    }
})

function Home() {
    const classes = useStyles();

    return (
        <Layout>
            <Grid container>
                <Grid item xs={12} md={6} lg={3}>
                    <Card>
                        <figure className={classes.image}>
                            <img className={classes.a} src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" alt=""/>
                        </figure>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Home
