import { Stack, Box, Typography, Chip, Avatar, Button } from '@mui/material';
import QuiltedImageList from './ImageList';

const Projects = () => {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      direction={{ md: 'row' }}
      spacing={{ xs: 5, sm: 5, md: 10 }}
      sx={{ paddingLeft: { xs: 1, sm: 2, md: 5, lg: 8 }, marginTop: 0.5 }}>
      <Stack spacing={3} sx={{ maxWidth: { md: '300px', lg: '700px' } }}>
        <Typography
          component='h1'
          variant='h4'
          sx={{ marginTop: { sm: 8, xs: 6 } }}>
          SUPER SENCILLO
        </Typography>
        <Typography component='p' variant='p'>
          Hablamos sobre tu negocio, definimos los objetivos y en unos días
          recibís tu sitio web registrado a tu nombre y funcionando.
        </Typography>
        <Stack spacing={2}>
          <Chip
            label='✅ Experiencia de usuario'
            variant='outlined'
            sx={{ alignSelf: 'flex-start' }}
          />
          <Chip
            label='🚀 Posicionamiento en buscadores'
            variant='outlined'
            sx={{ alignSelf: 'flex-start' }}
          />
          <Chip
            label='⚡ Máximo rendimiento'
            variant='outlined'
            sx={{ alignSelf: 'flex-start' }}
          />
        </Stack>
        <Button variant='contained' sx={{ alignSelf: 'flex-start' }}>
          comenzemos ahora
        </Button>
      </Stack>
      <QuiltedImageList />
    </Stack>
  );
};

export default Projects;
