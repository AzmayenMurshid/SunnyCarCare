import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CarRepairRoundedIcon from '@mui/icons-material/CarRepairRounded';
import { ContactPhone } from '@mui/icons-material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

function Sidebar({clicked}) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
    return (
      <Box
        position={ "absolute" }
        className = {clicked ? 'sidebar_active' : 'sidebar'} 
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <CarRepairRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <CalendarMonthRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule Estimate" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <ContactPhone />
            </ListItemIcon>
            <ListItemText primary="Contact us" />
          </ListItemButton>
        </List>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="OEM Certifications" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
              {/* component="a" href="#simple-list" */}
                <ListItemText primary="Process" />
              </ListItemButton>
            </ListItem>
          </List>
      </nav>
      </Box>
    );
}

export default function Navigation() {
  const [clicked, setClicked] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: 'black'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=> {setClicked(!clicked); }}>
              { clicked ? <CloseRoundedIcon /> : <MenuIcon /> }
          </IconButton>
          <Typography
            variant="h6" 
            component="div"
            sx={{ flexGrow: 1 }}>
            Sunny Car Care
          </Typography>
          <Button 
            className='hoverOpacity'
            color="inherit">
                <Link className='remove_decoration' to="login">
                    Login
                </Link>
            </Button>
            <Button 
            className='hoverOpacity'
            color="inherit">
                <Link className='remove_decoration' to="signin">
                    Sign in
                </Link>
            </Button>
        </Toolbar>
      </AppBar>
      <Sidebar clicked={clicked} />
    </Box>
  );
}