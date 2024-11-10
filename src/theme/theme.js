import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // CA dark blue color
    },
    secondary: {
      main: '#FFA500', // Contrast color (e.g., for buttons or highlights)
    },
    background: {
      default: '#f4f6f8', // Light background for a corporate feel
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
