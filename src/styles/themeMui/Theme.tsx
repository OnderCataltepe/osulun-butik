import { createTheme, ThemeProvider } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    common: {
      lightGray1: '#f9f9f9',
      lightGray2: '#F1F1F1',
      gray: '#E1E1E1',
      black: '#000000',
      white: '#FFFFFF',
      brown1: '#A18142',
      brown2: '#D6B861',
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
      fontSize: 10
    }
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 8,
          '&:last-child': {
            paddingBottom: 8
          }
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 4
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
