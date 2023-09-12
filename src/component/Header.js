import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import '../stylesheet/Header.css'

const drawerWidth = "200px";
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} >
      <Typography variant="h6" sx={{ my: 1 }} className="nav-mobile-tittle" >
        <br/>
      <FastfoodIcon />
      &nbsp;
        Restaurant
      </Typography>
      
      <List className="nav-mobile" >
        <ListItem disablePadding  className="nav-mobile-link-item">  
          <Link to="/" className="nav-mobile-link">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/menu" className="nav-mobile-link">
            <ListItemText primary="Menu" />
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/about" className="nav-mobile-link">
            <ListItemText primary="About" />
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/contact" className="nav-mobile-link">
            <ListItemText primary="Contact Us" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} >
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "goldenrod",
            }}
          >
            <FastfoodIcon />
            My Resturant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <List className="nav-menu">
        <ListItem disablePadding className="nav-menu">
          <Link to="/" className="nav-link">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/menu" className="nav-link">
            <ListItemText primary="Menu" />
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/about" className="nav-link">
            <ListItemText primary="About" />
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/contact" className="nav-link">
            <ListItemText primary="Contact" />
          </Link>
        </ListItem>
      </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:"black",
              textAlign:"center",
             
              
              
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" >
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {

  window: PropTypes.func,
};

export default DrawerAppBar;
