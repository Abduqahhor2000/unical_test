import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      "100" : "white"
    },
    secondary: {
      main: '#19857b',
      "900": "#e3e9ef",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;