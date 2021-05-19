import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useLocation, withRouter } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ButtonGroup } from "@material-ui/core";
import { AuthContext } from '../../contexts/authContext'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Bebas Neue',
  },
  offset: {
    ...theme.mixins.toolbar,
  },
  selected: {
    backgroundColor: theme.palette.primary.dark
  },
}));

const Header = ({history}) => {  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const selected = location.pathname
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const context = useContext(AuthContext)

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/top-rated"},
    { label: "Favourites", path: "/movies/favourites" },    
    { label: "Wishlist", path: "/wishlist" },
  ];

  const handleMenuSelect = (pageUrl) => {
    history.push(pageUrl);  
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Film<span style={{color: "red"}}>Finder</span>
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuRoundedIcon />
                </IconButton>
                <Menu color="primary"
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <MenuItem
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
              <ButtonGroup>
                {menuOptions.map((opt) => (
                    <Button
                      className={selected == opt.path ?  classes.selected : ""}
                      key={opt.label}
                      color="inherit"
                      onClick={() => handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </Button>
                  ))}
                  {context.isAuthenicated === true ? 
                  false :
                  <Button
                      className={selected == "/user/login" ?  classes.selected : ""}
                      key="Login"
                      color="inherit"
                      onClick={() => handleMenuSelect("/user/login")}
                    >
                      Login
                    </Button>}
                  
              </ButtonGroup>
                
              </>
            )}
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default withRouter(Header);