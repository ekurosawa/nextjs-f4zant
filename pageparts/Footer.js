import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {' © '}
      {new Date().getFullYear()}
      {'  '}
      <Link sx={{fontWeight: "bold"}} color="inherit" href="https://mui.com/" style={{ textDecoration: 'none' }}>
        F4SANT 
        </Link>{'  '}
        All Rights Reserved.
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider  theme={defaultTheme}>
      <CssBaseline />
      
      <Container  component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      </Container>
      <Box
        className='footer'
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography color="white" variant="body1">
            Nakazuba
          </Typography>
          <Copyright />
        </Container>
      </Box>

    </ThemeProvider>
  );
}
