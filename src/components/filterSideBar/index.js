import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Drawer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    leftSideBar: {    
      flexDirection: "column",
      position: "fixed",
      height: "100vh",
      maxWidth: 250, 
      minWidth: 100,
      backgroundColor: "red",
      zIndex: 1,
    },
    content: {
        ...theme.mixins.toolbar,
    },
  }));

const FilterSideBar = (props) => {
    const classes = useStyles();

    return (
       <Container className={classes.leftSideBar}>
           <div className={classes.content} />
            <h1>Testing</h1>           
       </Container>
    );
};

export default FilterSideBar;