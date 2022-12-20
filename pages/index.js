import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
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
          backgroundColor: '#64b5f6',
        }}>
        <Typography variant='p' component='p'>
          @ TuNegocioALaWeb 2022
        </Typography>
        <a href='mailto:contacto@tunegocioalaweb.com'>
          contacto@tunegocioalaweb.com
        </a>
      </Stack>
    </>
  );
}
