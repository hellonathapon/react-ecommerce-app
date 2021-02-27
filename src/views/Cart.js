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
    pad: {
        padding: ".5rem"
    }
})

function Cart({ products, inCart }) {
    const classes = useStyles()
    console.log(inCart)

    const calcTotal = inCart.length ? inCart.reduce((sum, cur) => sum + cur.price, 0) : 0;

    console.log(inCart)

    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.pad}>
                        {/* if there's id stored in inCart */}
                        { inCart.ids.length !== 0 ? products.map(m => (
                            <div key={m.id}>
                                {/* render item that has id store in cart */}
                                { inCart.quantity[m.id] > 0 && (
                                    <Box 
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center">
                                            
                                        <img style={{maxHeight: "200px", margin: "auto"}} src={m.imgUrl} alt={m.title}/>
                                        <article style={{display: "flex", flexFlow: "column wrap", alignItems: "flex-end"}}>
                                            <Typography variant="h5">{m.title}</Typography>
                                            <Typography variant="p">Quantity: <b>{inCart.quantity[m.id]}</b></Typography>
                                            <Typography variant="p">Price: { m.price * inCart.quantity[m.id] }</Typography>
                                        </article>
                                    </Box>
                                ) }
                            </div> 
                        )) : (
                            <p>No Items In Your Cart</p>
                        ) }
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper style={{padding: "0.5rem"}}>
                        <Typography variant="h5">Total and Checkout</Typography>   
                        <Typography>Total: { calcTotal }฿</Typography>   
                        <Typography>+Shipping (25): { calcTotal + 25 }฿</Typography>   
                        <Button style={{marginTop: ".5rem"}} variant="outlined" color="primary">Check Out</Button>
                    </Paper> 
                </Grid>
            </Grid>
        </Layout>
    )
}

const mapStateToProps = state => ({ products: state.products ,inCart: state.inCart })

export default connect(mapStateToProps) (Cart)
