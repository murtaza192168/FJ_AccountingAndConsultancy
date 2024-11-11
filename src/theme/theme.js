import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#023C6C', // CA dark blue color
    },
    secondary: {
      main: '#66AC4C', // CA green color
    },
    background: {
      default: '#f4f6f8', // Light background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
