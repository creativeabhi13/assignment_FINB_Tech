import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
  },
  components: {
    MuiPaper: { defaultProps: { elevation: 3 } },
  },
});

export default theme;