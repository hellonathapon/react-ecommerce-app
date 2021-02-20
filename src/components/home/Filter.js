import React from 'react'
import { 
    FormGroup, FormControlLabel, Checkbox, 
    Typography, Slider, RadioGroup, Radio, Divider,
} from '@material-ui/core'

function valuetext(value) {
    return `${value}°C`;
}

function Filter() {

    const [value, setValue] = React.useState([20, 37]);
    const [radioValue, setRadioValue] = React.useState('');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleRadioChange = (event) => {
        setRadioValue(event.target.value);
      };

    return (
        <div>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Clothes"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Shoes"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Dresses"
                />
            </FormGroup>
            <Divider />
            <Typography id="range-slider" gutterBottom>
                Price range
            </Typography>
            {/* <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            /> */}
            <RadioGroup value={radioValue} onChange={handleRadioChange}>
                <FormControlLabel  
                    control={<Radio color="primary" />}
                    label="$25 to $50"
                    value="best"
                />
                <FormControlLabel  
                    control={<Radio color="primary" />}
                    label="$50 to $100"
                    value="best1"
                />
                <FormControlLabel  
                    control={<Radio color="primary" />}
                    label="$100 UP"
                    value="best2"
                />
            </RadioGroup>
        </div>
    )
}

export default Filter
