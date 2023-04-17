import React,{useState} from 'react'
import {Autocomplete, TextField} from '@mui/material';

import mapboxgl from 'mapbox-gl';
import {makeStyles,createStyles} from "@material-ui/core/styles";


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const useStyles = makeStyles((theme) => ({
  
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);"
    },
    "&.Mui-focused .MuiInputLabel-outlined": {
      color: "white"
    },
    '& .MuiOutlinedInput-input': {
      color: 'white', // set the input text color to purple
    },
  },
  inputRoot: {
    color: "white",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      color:"white"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    }
  },
}
));

const InputForm = ({name,address,setAddress}) => {
  const [suggestions, setSuggestions] = useState([]);
  const classes = useStyles();
  const handleInputChange = async (event, newValue) => {
    await setAddress(newValue)
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxgl.accessToken}&limit=50`)
      .then(response => response.json())
      .then(data => {
        setSuggestions(data.features)
        console.log(data)
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
      
      <Autocomplete
            value={address}
            onInputChange={handleInputChange}
            selectOnFocus
            clearOnBlur
            classes={classes}
            id={name}
            options={suggestions}
            getOptionLabel={(option) =>{
                // console.log(`option:${option}`)
                if (typeof option === 'string') {
                  return option;
                }
                return option.place_name
            }}
            renderOption={(props, option) => <li {...props}>{option.place_name}</li>}
            sx={{ 
              width: 300,
              fontColor:"white"
             }}
            freeSolo
            renderInput={(params) => (
              <TextField 
                {...params} 
                classes={classes.root}
                label={`Enter ${name}`}
                InputLabelProps={{
                  style: {color: '#fff'},
                }}
                
              />
            )}
          />
      
    </div>
  )
}

export default InputForm
