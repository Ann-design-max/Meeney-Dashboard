import { createTheme } from '@mui/material/styles';

const theme = createTheme();
export const Theme = createTheme({
    typography: {
        fontFamily: 'Work Sans, sans-serif',
        h1:{
          fontSize: '1.9rem',
          fontWeight:'600',
          '@media (min-width:600px)': {
          fontSize: '1.9rem',
          },
          [theme.breakpoints.up('md')]: {
          fontSize: '2.0rem',
          },
      },
      h2:{
        fontSize: '1.8rem',
        fontWeight:'600',
        '@media (min-width:600px)': {
        fontSize: '1.8rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize: '1.9rem',
        },
    },
      h3:{
          fontSize: '1.7rem',
          fontWeight:'600',
          '@media (min-width:600px)': {
          fontSize: '1.7rem',
          },
          [theme.breakpoints.up('md')]: {
          fontSize: '1.8rem',
          },
      },
      h4:{
        fontSize: '1.5rem',
        fontWeight:'600',
        '@media (min-width:600px)': {
        fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize: '1.6rem',
        },
    },
    h5:{
      fontSize: '1.2rem',
      fontWeight:'600',
      '@media (min-width:600px)': {
      fontSize: '1.2rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
      },
  },
      h6:{
        fontSize: '0.9rem',
        fontWeight:'600',
        '@media (min-width:600px)': {
        fontSize: '0.9rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize: '1.0rem',
        },
    },
    body1:{
      fontSize: '0.8rem',
      fontWeight:'500',
      '@media (min-width:600px)': {
      fontSize: '0.8rem',
      },
      [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
      },
  },
  body2:{
    fontSize: '0.7rem',
    fontWeight:'500',
    '@media (min-width:600px)': {
    fontSize: '0.7rem',
    },
    [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
    },
},
subtitle1:{
  fontSize: '0.6rem',
  fontWeight:'500',
  '@media (min-width:600px)': {
  fontSize: '0.6rem',
  },
  [theme.breakpoints.up('md')]: {
  fontSize: '0.7rem',
  },
},

subtitle2:{
  fontSize: '0.5rem',
  fontWeight:'500',
  '@media (min-width:600px)': {
  fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
  fontSize: '0.6rem',
  },
}
},

  palette: {
    background:{
      default:'#F3f3f3',
      paper:"#FFFFFF"
    },
    primary: {
      main: '#490057',
      lighter:'rgba(148, 0, 177, 0.11)'
    },
    secondary: {
      main: '#FBB03B',
    },
    header:{
      main: 'linear-gradient(90deg, #490057 0%, #A303A0 112.04%);'
    },
  },
});

export default Theme;
