import React from 'react'
import { connect } from 'react-redux';
import { 
    Grid, Card, Typography, Button, CardContent,
    CardActions,CardActionArea, Box, IconButton 
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Favorite, FavoriteBorder } from '@material-ui/icons';


function Products({ products, handleFavState }) {
    return (
        <Grid item xs={12} md={8}>
            <Grid container justify="center" spacing={3}>
                { products.map(p => (
                    <Grid item xs={12} md={6}>
                    <Card>
                        <CardActionArea>
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
                                    Price: { p.price }
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="contained" color="primary" disableElevation>
                                Add to cart
                            </Button>
        
                            <IconButton 
                                color="secondary" 
                                onClick={() => handleFavState(p.id)}>
                                    {/* conditionally display icon bases on its `isFav` */}
                                { p.isFav ? <Favorite/> : <FavoriteBorder /> }
                            </IconButton>
                        </CardActions>
                        </Card>
                    </Grid>
                )) }
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({ products: state.products });
const mapDispatchToProps = (dispatch) => {
    return {
        handleFavState: (id) => dispatch({ type: "FAVOURITE", payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
