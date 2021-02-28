import React from 'react';
import { 
    Grid,FormGroup, FormControlLabel, Checkbox, 
    Typography,
} from '@material-ui/core';
import Layout from '../components/Layout';
import Products from '../components/home/Products'
import { connect } from 'react-redux';

function Home({ products }) {

    const [checkboxValue, setCheckboxValue] = React.useState({
        clothes: false,
        motorcycle: false,
        computer: false,
        plants: false,
    });
    const handleCheckboxChange = (event) => {
        setCheckboxValue({ ...checkboxValue, [event.target.name]: event.target.checked });
    };

    // extract true values out of the object; return array of its corresponding keys.
    const getTrueValFromObj = Object.keys(checkboxValue).filter(k => checkboxValue[k]);

    // filter product data arr by true values of the checkbox and radio btn.
    const filteredData = products.filter(k => {
        if(!getTrueValFromObj.length) {     
          return k;                 // return all products if no item is filtered
        }
        return getTrueValFromObj.some(i => k.category.match(i));
    })


    return (
        <Layout>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} md={4}>
                    <div>
                        <Typography variant="h5" component="h2">Categories</Typography>
                       <FormGroup> 
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValue.clothes} onChange={handleCheckboxChange} name="clothes" />}
                                label="Clothes"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValue.motorcycle} onChange={handleCheckboxChange} name="motorcycle" />}
                                label="Motorcycle"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValue.computer} onChange={handleCheckboxChange} name="computer" />}
                                label="Computer & Accessories"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValue.plants} onChange={handleCheckboxChange} name="plants" />}
                                label="Plants"
                            />
                        </FormGroup>
                    </div>
                </Grid>
                <Products products={ filteredData }/>
            </Grid>
        </Layout>
    )
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps) (Home);
