import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../index.css';

/**
 * 
 font-family: 'Lato', sans-serif;
font-family: 'Merriweather', serif;
font-family: 'Playfair Display', serif;
font-family: 'Roboto Mono', monospace;
 */

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 904,
    lg: 1200,
    xl: 1536
  }
};
const baseTheme = createTheme({
  ...breakpoints,
  palette: {
    primary: {
      light: '#212121',
      main: '#161616',
      dark: '#000000'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF'
    },
    common: {
      lightGray1: '#f9f9f9',
      lightGray2: '#F1F1F1',
      gray1: '#1A1A1A',
      gray2: '#707070',
      brown: '#BB7946',
      orange: '#F15123',
      red: '#933E38'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 50,
      letterSpacing: 2,
      color: '#45484A',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 36
      }
    },
    h2: {
      fontSize: 40,
      fontFamily: 'Playfair Display, serif',
      letterSpacing: 1,
      fontWeight: 'bold',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 30
      }
    },
    h3: {
      fontSize: 32,
      fontFamily: 'Playfair Display, serif',
      letterSpacing: 1,

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 24
      }
    },
    h4: {
      fontSize: 28,
      fontFamily: 'Playfair Display, serif',
      letterSpacing: 1,
      fontWeight: 'bold',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 20
      }
    },
    h5: {
      fontSize: 24,
      fontFamily: 'Lato, sans-serif',
      letterSpacing: 1,

      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 18
      }
    },
    body1: {
      fontSize: 16,
      fontFamily: 'Playfair Display, serif',
      letterSpacing: 1,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 12
      }
    },
    body2: {
      fontSize: 12,
      fontFamily: 'Roboto Mono, monospace',
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 10
      }
    },
    subText: {
      fontSize: 10,
      color: 'black'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 10px 10px -15px #222'
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 4
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          width: '100%'
        }
      }
    }
  }
});

type ThemeProps = {
  children: JSX.Element;
};

const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};

export default Theme;
