import { createTheme } from '@mui/material/styles';

const red = {
  main: '#b42318',
  light: '#d9483d',
  dark: '#7f1d1d',
  wash: '#fdebec',
};

const surfaces = {
  light: {
    canvas: '#f7f5f1',
    paper: '#fffdfa',
    elevated: '#ffffff',
    border: 'rgba(31, 24, 20, 0.1)',
    text: '#201a17',
    muted: '#756f6a',
  },
  dark: {
    canvas: '#11100f',
    paper: '#181614',
    elevated: '#201d1a',
    border: 'rgba(255, 248, 239, 0.12)',
    text: '#f5f0ea',
    muted: '#b9afa6',
  },
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: red.main,
      light: red.light,
      dark: red.dark,
      contrastText: '#ffffff',
    },
    secondary: {
      main: mode === 'dark' ? '#f5f0ea' : '#201a17',
      light: mode === 'dark' ? '#ffffff' : '#3a322d',
      dark: mode === 'dark' ? '#cfc4b8' : '#11100f',
      contrastText: '#ffffff',
    },
    ...(mode === 'light'
      ? {
          background: {
            default: surfaces.light.canvas,
            paper: surfaces.light.paper,
          },
          text: {
            primary: surfaces.light.text,
            secondary: surfaces.light.muted,
          },
          divider: surfaces.light.border,
        }
      : {
          background: {
            default: surfaces.dark.canvas,
            paper: surfaces.dark.paper,
          },
          text: {
            primary: surfaces.dark.text,
            secondary: surfaces.dark.muted,
          },
          divider: surfaces.dark.border,
        }),
    error: { main: '#b42318' },
    warning: { main: '#956400' },
    info: { main: '#1f6c9f' },
    success: { main: '#346538' },
  },
  typography: {
    fontFamily: `'Geist Sans', 'SF Pro Display', 'Helvetica Neue', sans-serif`,
    h1: {
      fontFamily: `'Instrument Serif', 'Newsreader', 'Georgia', serif`,
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
      fontWeight: 500,
    },
    h2: {
      fontFamily: `'Instrument Serif', 'Newsreader', 'Georgia', serif`,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      fontWeight: 500,
    },
    h3: {
      fontFamily: `'Instrument Serif', 'Newsreader', 'Georgia', serif`,
      letterSpacing: '-0.025em',
      lineHeight: 1.08,
      fontWeight: 500,
    },
    h4: { letterSpacing: '-0.015em', fontWeight: 650 },
    h5: { letterSpacing: '-0.01em', fontWeight: 650 },
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 560,
    button: {
      textTransform: 'none',
      fontWeight: 650,
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(32, 26, 23, 0.04)',
    '0 2px 8px rgba(32, 26, 23, 0.05)',
    '0 6px 18px rgba(32, 26, 23, 0.06)',
    ...Array(21).fill('0 8px 24px rgba(32, 26, 23, 0.07)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          colorScheme: mode,
        },
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: mode === 'dark' ? surfaces.dark.canvas : surfaces.light.canvas,
          color: mode === 'dark' ? surfaces.dark.text : surfaces.light.text,
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          textRendering: 'optimizeLegibility',
        },
        '::selection': {
          background: mode === 'dark' ? 'rgba(217, 72, 61, 0.35)' : red.wash,
          color: mode === 'dark' ? '#ffffff' : red.dark,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          minHeight: 42,
          boxShadow: 'none',
          transition: 'transform 180ms ease, background-color 180ms ease, border-color 180ms ease',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        containedPrimary: {
          backgroundColor: '#201a17',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#3a322d',
          },
        },
        outlinedPrimary: {
          borderColor: mode === 'dark' ? surfaces.dark.border : surfaces.light.border,
          color: mode === 'dark' ? surfaces.dark.text : surfaces.light.text,
          '&:hover': {
            borderColor: red.main,
            backgroundColor: mode === 'dark' ? 'rgba(217, 72, 61, 0.08)' : 'rgba(180, 35, 24, 0.06)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderColor: mode === 'dark' ? surfaces.dark.border : surfaces.light.border,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 650,
          letterSpacing: '0.03em',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.65)',
          '& fieldset': {
            borderColor: mode === 'dark' ? surfaces.dark.border : surfaces.light.border,
          },
          '&:hover fieldset': {
            borderColor: mode === 'dark' ? 'rgba(245,240,234,0.26)' : 'rgba(31,24,20,0.22)',
          },
          '&.Mui-focused fieldset': {
            borderColor: red.main,
            borderWidth: 1,
          },
        },
      },
    },
  },
});

const getTheme = (mode) => createTheme(getDesignTokens(mode));

export default getTheme;
