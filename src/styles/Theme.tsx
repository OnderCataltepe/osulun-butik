import { createTheme, ThemeProvider } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    common: {
      lightGray1: '#f9f9f9',
      lightGray2: '#F1F1F1',
      gray1: '#BEB791',
      gray2: '#707070',
      black: '#000000',
      white: '#FFFFFF',
      brown1: '#5b310c',
      brown2: '#BB7946',
      brownFont: '#D6B861',
      lightBrownFont: '#BEB791'
    }
  },
  typography: {
    h1: {
      fontFamily: 'revert-layer',
      fontSize: 36
    },
    body1: {
      fontSize: 16,
      fontFamily: 'serif',
      letterSpacing: 1
    },
    body2: {
      fontSize: 12
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
          pointerEvents: 'none',
          width: '100%'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: 'white !important',
          '&:hover': {
            backgroundColor: 'white'
          }
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