import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { Grid, Typography, Box, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem 0"
    }
})

function Cart({ products, inCart }) {
    const classes = useStyles()

    // calculate total price with each item quantity multiply
    const calcTotal = products.map(p => inCart.quantity[p.id] > 0 ? p.price * inCart.quantity[p.id] : 0).reduce((s, i) => s + i);
    
    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper style={{padding: "1rem"}}>
                        {/* if there's id stored in inCart */}
                        { inCart.ids.length !== 0 ? products.map(m => (
                            <div key={m.id}>
                                {/* render item that has id store in cart */}
                                { inCart.quantity[m.id] > 0 && (
                                    <Box 
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center">
                                            
                                        <img style={{maxHeight: "100px"}} src={m.imgUrl} alt={m.title}/>
                                        <article style={{display: "flex", flexFlow: "column wrap", alignItems: "flex-end"}}>
                                            <Typography variant="h6">{m.title}</Typography>
                                            <Typography variant="p">Quantity: <b>{inCart.quantity[m.id]}</b></Typography>
                                            <Typography variant="p">{ m.price * inCart.quantity[m.id] }฿</Typography>
                                        </article>
                                    </Box>
                                ) }
                            </div> 
                        )) : (
                            <p>No Items In Your Cart</p>
                        ) }
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper style={{padding: "1rem"}}>
                        <Typography variant="h5">Total and Checkout</Typography>   
                        <Box className={classes.flex}>
                            <Typography>Total Amount</Typography> 
                            <Typography>{ calcTotal }฿</Typography> 
                        </Box>
                        <Box className={classes.flex}>
                            <Typography>+Shipping (25฿)</Typography> 
                            <Typography><b>{ calcTotal + 25 }</b>฿</Typography> 
                        </Box>
                          
                        <Button style={{marginTop: ".5rem"}} variant="outlined" color="primary">Check Out</Button>
                    </Paper> 
                </Grid>
            </Grid>
        </Layout>
    )
}

const mapStateToProps = state => ({ products: state.products ,inCart: state.inCart })

export default connect(mapStateToProps) (Cart)
