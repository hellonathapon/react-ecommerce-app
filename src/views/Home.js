import React from 'react';
import { 
    Grid,FormGroup, FormControlLabel, Checkbox, 
    Typography, RadioGroup, Radio, Divider,
} from '@material-ui/core';
import Layout from '../components/Layout';
import Products from '../components/home/Products'
import { connect } from 'react-redux';

function Home({ products }) {
    const [ localProductData, setLacalProductData ] = React.useState(products || null);
    
    const [checkboxValue, setCheckboxValue] = React.useState({
        clothes: true,
        shoes: false,
        cap: false,
    });

    const [radioValue, setRadioValue] = React.useState('');

    const handleCheckboxChange = (event) => {
        setCheckboxValue({ ...checkboxValue, [event.target.name]: event.target.checked });
    };
    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
      };
    const radioDataLabels = [
        { label: 'All', value: 'all' },
        { label: '฿100 to ฿200', value: 'low' },
        { label: '฿200 to ฿300', value: 'medium' },
        { label: '฿300 UP', value: 'high' },
    ];

    // extract true values from object into array.
    const getTrueValFromObj = Object.keys(checkboxValue).filter(k => checkboxValue[k]);

    // filter local data arr by true val of the checkbox.
    const filteredData = products.filter(k => getTrueValFromObj.includes(k.category));

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
                                control={<Checkbox checked={checkboxValue.shoes} onChange={handleCheckboxChange} name="shoes" />}
                                label="Shoes"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxValue.cap} onChange={handleCheckboxChange} name="cap" />}
                                label="Cap"
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
