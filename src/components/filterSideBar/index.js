import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Checkbox, Container, FormControl, FormControlLabel, Input, InputLabel, ListItemText, MenuItem, Select, Slider, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    leftSideBar: {   
      position: "fixed",
      height: "100vh",
      maxWidth: 250, 
      minWidth: 100,
      backgroundColor: theme.palette.secondary.light,
      zIndex: 1,
    },
    content: {
        paddingTop: 5,
    },
    input: {
      marginBottom: 7,
      minWidth: 120,
      maxWidth: 300, 
    },
    badge: {
      right: 3,
      top: 13,
    }
  }));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(genre, genres, theme) {
  return {
    fontWeight:
      genres.indexOf(genre) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const yearSliderValue = [1917, 2021]

const genres = ["Action", "Adventure", "Animation", "Bollywood", "Cartoon", "Family", "Horror", "Thriller"];

const FilterSideBar = (props) => {
    const classes = useStyles(); 
    const [year, setYear] = useState([1917, 2021]);
    const [rating, setRating] = useState([0.0, 10.0])

    const handleChange = (e, type, value) => {
      e.preventDefault()
      props.onUserInput(type, value)
    }
    const handleTextChange = e => {
      handleChange(e, "name", e.target.value)
    }
    const handleGenreChange = e => {
      handleChange(e, "genre", e.target.value)
    };  
    const handleYearChange = (event, newValue) => {
      setYear(newValue);
    };
    const handleRatingChange = (event, newValue) => {
      setRating(newValue);
    };
    const handleAdultChange = (event, newValue) => {
      return
    };

    return (
       <Container className={classes.leftSideBar}>         
           <div className={classes.content} />
           <Typography variant="h4" gutterBottom>
            Filter
          </Typography>
           <form noValidate autoComplete="off">
            <TextField className={classes.input} label="Title" variant="outlined" />
            <FormControl>
              <InputLabel  id="genre-input-label">Genre</InputLabel>
              <Badge badgeContent={1} className={classes.badge} color="primary">
              </Badge>
              <Select
                className={classes.input}
                labelId="genre-input-label"  
                autoWidth              
                multiple
                value={genres}
                onChange={handleGenreChange}
                input={<Input />}
                renderValue={(selected) => ''}
                // MenuProps={MenuProps}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    <Checkbox checked={false} />
                    <ListItemText primary={genre} />
                  </MenuItem>
                ))}
              </Select>              
            </FormControl>
            <InputLabel id="year-slider">Year</InputLabel>
            <Slider
              className={classes.input}
              value={year}
              min={1917}
              max={2021}
              onChange={handleYearChange}
              valueLabelDisplay="auto"
              aria-labelledby="year-slider"
            />    
            <InputLabel id="rating-slider">Rating</InputLabel>
            <Slider
              className={classes.input}
              value={rating}
              min={0.0}
              max={10.0}
              step={0.1}
              onChange={handleRatingChange}
              valueLabelDisplay="auto"
              aria-labelledby="rating-slider"
            /> 
            <FormControlLabel
              control={<Checkbox checked={true} onChange={handleAdultChange} name="adult" color="primary"/>}
              label="Adult"
            />                    
          </form>          
       </Container>
    );
};

export default FilterSideBar;