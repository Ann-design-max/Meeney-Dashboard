import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import LeftStack from '../containers/left';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid';
import top from "../assests/top pic.png"
import ProfilePic from '../components/avatar';
import Typography from '@mui/material/Typography';

export default function ResponsiveDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , background:'#F3f3f3'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container direction="row"spacing={1} ml={3} mt={5} justifyContent="flex-start" alignItems="center"> 
       <ProfilePic src={top} sx={{ width: 56, height: 56 }} />
       <KeyboardArrowDownIcon color="secondary"/>
         <Typography
           variant="h6"
           noWrap
           component="div"
           sx={{ flexGrow: 1 }}
         >
         Jonathan Deo
         </Typography>
      </Grid>
      <LeftStack/>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button color='secondary' onClick={toggleDrawer(anchor, true)} sx={{ mr: 2, display: { sm: 'none' } }}>{anchor}</Button> */}
          <IconButton size='small' edge="end" color='secondary' onClick={toggleDrawer(anchor, true)} sx={{ mr:[ 7,2,2,2], ml:-1, display: { sm: 'none' } }}><MenuIcon/></IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
