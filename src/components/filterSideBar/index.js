import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Badge, Checkbox, Container, FormControl, FormControlLabel, 
  Input, InputLabel, ListItemText, MenuItem, Select, 
  Slider, TextField } from '@material-ui/core';
import { GenresContext } from '../../contexts/genresContext'

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
      maxWidth: 200, 
    },
  }));

const FilterSideBar = (props) => {
    const context = useContext(GenresContext);
    const { genres } = context;
    const classes = useStyles(); 
    const [year, setYear] = useState([1917, 2021]);
    const [rating, setRating] = useState([0.0, 10.0])
    const [selectedGenres, setGenre] = useState([])
    const [adultChecked, setAdultChecked] = useState(false);


    const handleChange = (e, type, value) => {
      // e.preventDefault()
      props.onUserInput(type, value)
    }
    const handleTextChange = e => {
      handleChange(e, "name", e.target.value)
    }
    const handleGenreChange = e => {
      setGenre(e.target.value)
      handleChange(e, "genre", e.target.value)
    };  
    const handleYearChange = (e, newValue) => {
      setYear(newValue);
      handleChange(e, "year", newValue)
    };
    const handleRatingChange = (e, newValue) => {
      setRating(newValue);
      handleChange(e, "rating", newValue)
    };

    return (
       <Container className={classes.leftSideBar}>         
           <div className={classes.content} />
           <form noValidate autoComplete="off">
            <TextField 
              className={classes.input} 
              label="Title" 
              variant="outlined" 
              type="search"
              onChange={handleTextChange}
              value={props.titleFilter}
            />
            <FormControl>              
              <Badge badgeContent={selectedGenres.length} className={classes.badge} color="primary">
              <InputLabel id="genre-input-label">Genre</InputLabel>
              <Select
                className={classes.input}
                labelId="genre-input-label"  
                autoWidth              
                multiple
                value={selectedGenres}
                onChange={handleGenreChange}
                renderValue={() => selectedGenres.join(', ')}
                input={<Input />}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre.id} value={genre.id}>
                    <Checkbox checked={selectedGenres.includes(genre.id)} />
                    <ListItemText primary={genre.name} />
                  </MenuItem>
                ))}
              </Select> 
              </Badge>                           
            </FormControl>
            <InputLabel id="year-slider">Year</InputLabel>
            <Slider
              labelId="year-slider"
              className={classes.input}
              value={year}
              min={props.yearRange.min}
              max={props.yearRange.max}
              onChange={handleYearChange}
              valueLabelDisplay="auto"
              aria-labelledby="year-slider"
            />    
            <InputLabel id="rating-slider">Rating</InputLabel>
            <Slider
              className={classes.input}
              value={rating}
              min={props.ratingRange.min}
              max={props.ratingRange.max}
              step={0.1}
              onChange={handleRatingChange}
              valueLabelDisplay="auto"
              aria-labelledby="rating-slider"
            />                    
          </form>          
       </Container>
    );
};

export default FilterSideBar;