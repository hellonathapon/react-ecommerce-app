import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'

function Cart({ inCart }) {
    console.log(inCart)

    const p = inCart[0]

    /**
     * @render Item conditionally for handle no item to iterate over. :)
     */

    return (
        <Layout>
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Typography>{ p.title }</Typography>
                </Grid>
                <Grid item xs={4}>
                    Total and Checkout  
                </Grid>
            </Grid>
        </Layout>
    )
}

const mapStateToProps = state => ({ inCart: state.inCart })

export default connect(mapStateToProps) (Cart)
