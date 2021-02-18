import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, CardMedia, Typography, Button,CardContent,CardActions,CardActionArea, Box, IconButton } from '@material-ui/core';
import Layout from '../components/Layout';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 345,
      [theme.breakpoints.down("md")] : {
        maxWidth: 200
      }
    },
    media: {
      height: 200
    }
}));

function Home() {
    const classes = useStyles();
    
    const [data, setData] = React.useState(false)

    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} md={4}>
                    filter go Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, laborum cupiditate hic nemo nostrum quam accusantium, atque vitae porro eaque, blanditiis voluptates. Quia accusantium veritatis quos, non incidunt excepturi molestiae consectetur reprehenderit cumque ea, magni velit blanditiis eveniet deserunt expedita voluptatibus placeat quaerat. Cumque, dolorum, placeat voluptates quidem quaerat ex ducimus obcaecati accusantium vel officia culpa exercitationem facilis aliquam quisquam? Maxime aliquid in facere autem ducimus odit ipsa odio est recusandae fugiat deleniti esse unde fugit laudantium et consectetur, repellat quia, vitae minima aperiam cumque quae! Possimus, eum. Accusantium tenetur veritatis culpa nisi, accusamus minus magnam natus itaque veniam nam?
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container justify="center" spacing={3}>
                        { Array.from({length: 6}, (_, i) => (
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardActionArea>
                                            <Box 
                                                display="flex"
                                                justifyContent="center"
                                                alignItems="center">
                                                    
                                                <img style={{maxHeight: "250px", margin: "auto"}} src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" alt=""/>
                                            </Box>
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography>
                                        <Typography variant="body1" component="h4">
                                            Price: $180
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="contained" color="primary" disableElevation>
                                            Add to cart
                                        </Button>
                    
                                        <IconButton 
                                            color="secondary" 
                                            onClick={() => setData(!data)}>
                                            { data ? <Favorite/> : <FavoriteBorder /> }
                                        </IconButton>
                                    </CardActions>
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
