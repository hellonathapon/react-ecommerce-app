import React from 'react';
import { 
    Grid,FormGroup, FormControlLabel, Checkbox, 
    Typography, RadioGroup, Radio, Divider,
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

    const [radioValue, setRadioValue] = React.useState('');
    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
    };
    const radioDataLabels = [
        { label: '฿100 to ฿200', value: '200' },
        { label: '฿200 to ฿300', value: '300' },
        { label: '฿300 UP', value: '500' },
    ];

    // extract true values out of the object; return arr of keys.
    const getTrueValFromObj = Object.keys(checkboxValue).filter(k => checkboxValue[k]);

    // filter product data arr by true val of the checkbox and radio btn.
    const filteredData = products.filter(k => k.category.match(getTrueValFromObj));


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
                        
                        <Divider />

                        <Typography variant="h5" id="range-slider" gutterBottom>
                            Price range
                        </Typography>
                        <RadioGroup value={radioValue} onChange={handleRadioChange}>
                            { radioDataLabels.map((item, i) => (
                                <FormControlLabel  
                                    control={<Radio color="primary" />}
                                    label={item.label}
                                    value={item.value}
                                />
                            )) }
                        </RadioGroup>
                    </div>
                </Grid>
                <Products products={ filteredData }/>
            </Grid>
        </Layout>
    )
}

const mapStateToProps = state => ({ products: state.products });

export default connect(mapStateToProps) (Home);
