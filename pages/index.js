import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tu Negocio en la Web | Marketing digital</title>
        <meta
          name='description'
          content='Crea un sitio web profesional para tu empresa, alcanza el siguiente nivel.'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Hero />
        <Projects />
        <Stack
          direction='row'
          justifyContent='center'
          spacing={9}
          sx={{
            paddingTop: 3,
            paddingBottom: 3,
            marginTop: 0.5,
            backgroundColor: theme.palette.primary.main,
          }}>
          <Typography variant='p' component='p' sx={{ color: 'white' }}>
            @ TuNegocioALaWeb 2022
          </Typography>
          <a
            href='mailto:contacto@tunegocioalaweb.com'
            style={{ color: 'white' }}>
            contacto@tunegocioalaweb.com
          </a>
        </Stack>
      </ThemeProvider>
    </>
  );
}
