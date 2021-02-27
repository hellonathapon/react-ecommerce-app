import React from 'react'
import { Link } from 'react-router-dom';
import { 
    Grid, Card, Typography, CardContent,
    CardActions,CardActionArea, Box,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import AddToCart from '../AddToCart'

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'inherit'
    },
    card: {
        backgroundColor: '#F6F6F5'
    }
})

function Products({ products }) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={8}>
            <Grid container justify="center" spacing={3}>
                { products.map(p => (
                    <Grid item xs={12} md={6} key={p.id}>
                    <Card>
                        <Link to={`/${p.id}`} className={classes.link}>
                        <CardActionArea className={classes.card}>
                            <Box 
                                display="flex"
                                justifyContent="center"
                                alignItems="center">
                                    
                                <img style={{maxHeight: "250px", margin: "auto"}} src={p.imgUrl} alt={p.title}/>
                            </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    { p.title }
                                </Typography>
                                <Rating name="half-rating-read" defaultValue={p.rating} precision={0.5} readOnly />
                                <Typography variant="body2" color="textSecondary" component="p">
                                    { p.desc }
                                </Typography>
                                <Typography variant="body1" component="h4">
                                    ฿{ p.price }
                                </Typography>
                                { p.stock >= 1 ? (
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Stock: { p.stock }
                                    </Typography>
                                ): (
                                    <Typography variant="body2" color="secondary" component="p">
                                        Out of Stock
                                    </Typography>
                                ) }
                                
                            </CardContent>
                        </CardActionArea>
                        </Link>
                        <CardActions>
                            <AddToCart item={p}/>
                        </CardActions>
                        </Card>
                    </Grid>
                )) }
            </Grid>
        </Grid>
    )
}

export default Products;
