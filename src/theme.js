import { createTheme } from '@mui/material/styles';

const theme = createTheme();
export const Theme = createTheme({
    typography: {
        fontFamily: 'Work Sans, sans-serif',
        h1:{
          fontSize: '1.5rem',
          fontWeight:'600',
          '@media (min-width:600px)': {
          fontSize: '1.5rem',
          },
          [theme.breakpoints.up('md')]: {
          fontSize: '3.4rem',
          },
      },
      h3:{
          fontSize: '1.0rem',
          fontWeight:'300',
          '@media (min-width:600px)': {
          fontSize: '1.0rem',
          },
          [theme.breakpoints.up('md')]: {
          fontSize: '2.0rem',
          },
      }
      },

  palette: {
    primary: {
      main: '#490057',
    },
    secondary: {
      main: '#FBB03B',
    },
    header:{
      main: 'linear-gradient(90deg, #490057 0%, #A303A0 112.04%);'
    }
  },
});

export default Theme;
