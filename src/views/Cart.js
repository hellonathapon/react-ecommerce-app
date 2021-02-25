import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { Grid, Typography, Box, Paper, Divider } from '@material-ui/core'
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

function Cart({ inCart }) {
    const classes = useStyles()
    console.log(inCart)

    const renderItem = inCart.length ? inCart.map(k => (
        <>
            <Box key={k.id} className={classes.root}>
                <img style={{maxHeight: "100px"}} src={k.imgUrl} alt={k.title}/>
                <Typography>{k.title}</Typography>
            </Box>
            <Divider/>
        </>
    )) : (
        <Typography>No item :)</Typography>
    );

    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.pad}>
                        { renderItem }
                    </Paper>
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
