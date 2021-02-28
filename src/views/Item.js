import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { Grid, Paper, Box, Typography, } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import AddToCart from '../components/AddToCart'


function Item({ item }) {

    const p = item[0]
    
    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} lg={4}>
                    <Paper>
                        <Box 
                            display="flex"
                            justifyContent="center"
                            alignItems="center">
                                
                            <img style={{width: "100%",maxWidth: "300px", margin: "auto"}} src={p.imgUrl} alt={p.title}/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Typography>{p.title}</Typography>
                    <Typography>{p.category}</Typography>
                    <Rating defaultValue={p.rating} precision={0.5} readOnly />
                    <Typography>{p.desc}</Typography>
                    <AddToCart item={p}/>
                </Grid>
            </Grid>
        </Layout>
    )
}

/**
 * @ownProps is the component props, e.i. all this component props can also accessible from `ownProps`
 * <ComA propA="smth"/> propA is ownProps 
 * since this component is the direct child of `/:id` Route, param. history are passed into props
 * NOTE: there is HOC way @withRouter to access these props from Route if that component isn't
 * direct child of the particular Route. 
 */
const mapStateToProps = (state, ownProps) => {  
    return {                                      
        item: state.products.filter(k => k.id === parseInt(ownProps.match.params.id))
    }                         
}

export default connect(mapStateToProps) (Item)
