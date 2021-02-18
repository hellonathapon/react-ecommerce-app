import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, CardMedia, Typography, Button,CardContent,CardActions,CardActionArea } from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      minWidth: 345,
      [theme.breakpoints.down("md")] : {
        minWidth: 200
      }
    },
    media: {
      height: 340
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={4}>
                    filter go Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, laborum cupiditate hic nemo nostrum quam accusantium, atque vitae porro eaque, blanditiis voluptates. Quia accusantium veritatis quos, non incidunt excepturi molestiae consectetur reprehenderit cumque ea, magni velit blanditiis eveniet deserunt expedita voluptatibus placeat quaerat. Cumque, dolorum, placeat voluptates quidem quaerat ex ducimus obcaecati accusantium vel officia culpa exercitationem facilis aliquam quisquam? Maxime aliquid in facere autem ducimus odit ipsa odio est recusandae fugiat deleniti esse unde fugit laudantium et consectetur, repellat quia, vitae minima aperiam cumque quae! Possimus, eum. Accusantium tenetur veritatis culpa nisi, accusamus minus magnam natus itaque veniam nam?
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={3}>
                        { Array.from({length: 6}, (_, i) => (
                            <Grid item xs={6}>
                                <Card>
                                    item
                                </Card>
                            </Grid>
                        )) }
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Home
