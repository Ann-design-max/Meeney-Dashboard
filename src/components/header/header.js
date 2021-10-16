import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './../search';
import StyledBadge from './../badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfilePic from '../avatar';
import EmailIcon from '@mui/icons-material/Email';
import top from "../../assests/top pic.png"
import flag from "../../assests/flag.png"
import logo from '../../assests/logo.png'
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid';
import ResponsiveDrawer from './../drawer';




// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   alignItems: 'center',
//   padding: 50,
//   // Override media queries injected by theme.mixins.toolbar
//   '@media all': {
//     minHeight: 128,
//   },
// }));

export default function Header() {
  return (
        <AppBar>
        <Toolbar px={5} py={10} style={{minHeight:200}}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center"> 
        <Grid item>
            <Stack direction="row" spacing={1} ml={10} justifyContent="center" alignItems="center"> 
             <ResponsiveDrawer/>
              <ProfilePic src={top} sx={{ width: 56, height: 56 }} />
              <KeyboardArrowDownIcon color="secondary"/>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                Jonathan Deo
                </Typography>
            </Stack>
        </Grid>
        <Grid item>
          <Stack direction="row" mr={10} spacing={6} justifyContent="center" alignItems="center"> 
            <ProfilePic src={flag} sx={{ width: 43, height: 23 }} variant="square"/>
            <StyledBadge label={50} component={<NotificationsIcon/>}/>
            <StyledBadge label={50} component={<EmailIcon/>}/>
            <SearchBar/>
            <ProfilePic src={logo} sx={{ width: 70, height: 30 }} variant="square"/>
          </Stack>
        </Grid>
          
            
          </Grid>
        </Toolbar>
        </AppBar>
  );
}
