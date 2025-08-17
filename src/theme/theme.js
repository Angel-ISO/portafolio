// theme.js
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#e53935',
      light: '#ff6f60',
      dark: '#ab000d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    ...(mode === 'light'
      ? {
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#212121',
            secondary: '#616161',
          },
        }
      : {
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
          },
        }),
    error: { main: '#d32f2f' },
    warning: { main: '#f57c00' },
    info: { main: '#1976d2' },
    success: { main: '#388e3c' },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    button: { textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: mode === 'dark'
            ? 'radial-gradient(125% 125% at 50% 100%, #0d0d0d 40%, #1a0000 100%)'
            : 'radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #ffe5e5 100%)',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
      },
    },
  },
});

const getTheme = (mode) => createTheme(getDesignTokens(mode));

export default getTheme;
