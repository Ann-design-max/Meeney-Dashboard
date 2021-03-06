import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Header from './components/header/header';
import Grid from '@mui/material/Grid';
import './App.scss';
import LeftStack from './containers/left';
import CenterStack from './containers/center';
import RightStack from './containers/right';


function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function App(props) {
  return (
    <div class="App">
       <React.Fragment>
      <CssBaseline />
      <Header/>
      <Toolbar id="back-to-top-anchor" />
     
        <Box sx={{ mt: 10, mx:[3,7,10], pt:5 }}>
          <Grid container spacing={5} direction="row" justifyContent="space-between" alignItems="flex-start"> 
            <Grid item xs={2} sx={{display: { xs: 'none', lg: 'block' } }}><LeftStack/></Grid>

            <Grid item xs={12} sm={12} md={7}><CenterStack/></Grid>

            <Grid item xs={12} sm={12} md ={3}><RightStack/></Grid>
          </Grid>
        </Box>
    
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
    </div>
   
  );
}
