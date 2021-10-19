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


export default function Header() {
  return (
        <AppBar>
        <Toolbar px={5} py={10} style={{minHeight:150}}>
        <Grid container direction="row" spacing={3} justifyContent="space-between" alignItems="center"> 
        <Grid item>
            <Grid container direction="row" spacing={1} sx={{ marginLeft:[2, 3, 1] }} justifyContent="space-between" alignItems="center"> 
                <Grid item xs={12}>
                  <Grid container direction="row" spacing={1} justifyContent="space-between" alignItems="center">
                    <ResponsiveDrawer/>
                    <SearchBar sx={{ display: {sm: 'none'}, justifyContent:'flx-end'}}/>
                  </Grid>
                  
                </Grid>
                
               <Grid item xs={12} sx={{ display: { xs: 'none', sm: 'block' } }} > 
                  <Grid container direction="row" sx={{ marginLeft:[8,1,5] }} spacing={1} justifyContent="flex-end" alignItems="center"> 
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
                  </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
          <Stack direction="row" sx={{ marginRight:[2, 5, 7] }}spacing={{xs: 5, sm: 5, md: 4 }} justifyContent="space-between" alignItems="center"> 
            <ProfilePic src={flag} sx={{ width: 43, height: 23, marginLeft:[2, null]}} variant="square"/>
            <StyledBadge label={50} component={<EmailIcon/>}/>
            <StyledBadge label={51} max={50} component={<NotificationsIcon/>}/>
            <SearchBar sx={{ display: {xs: 'none', sm: 'block'}}}/>
            <ProfilePic src={logo} sx={{ width: 70, height: 30 }} variant="square"/>
          </Stack>
        </Grid>
          
            
          </Grid>
        </Toolbar>
        </AppBar>
  );
}
