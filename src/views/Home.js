import React from 'react';
import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import Products from '../components/home/Products'
import Filter from '../components/home/Filter'

function Home() {

    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} md={4}>
                    <Filter/>
                </Grid>
                {/* display products component */}
                <Products/>
            </Grid>
        </Layout>
    )
}

export default Home;
