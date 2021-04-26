import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/store_2.png';
import useStyles from './styles';

//Our Header/Navbar Component, inherits totalItems props
const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  
  return (
    <>
      <AppBar position="sticky" className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" component={Link} to='/'>
            <img
              src={logo}
              alt="The Tech Shop"
              height="25px"
              className={classes.image}
            />The Tech Shop
          </Typography>
          <div className={classes.grow} />
          { location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton aria-label="Show Cart Items" color="inherit" component={Link} to='/cart'>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>)} 
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
