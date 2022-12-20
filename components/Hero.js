import Carousel from 'react-material-ui-carousel'
import heroNotebook from '../public/hero-notebook.jpg'
import heroShop from '../public/hero-shop.jpg'
import heroWeld from '../public/hero-weld.jpg'
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const imagenes = [heroNotebook, heroShop, heroWeld]
const frases = ["Credibilidad y exposición para tu negocio", "Sitio web profesional para agregar a tu tarjeta", "Siempre pensando en el cliente" ]



const Hero = () => { 
    return (
        <Carousel height={"100vh"} animation={"slide"} duration={1000} interval={8000} indicators={false} navButtonsAlwaysVisible>    
            {
                imagenes.map((item, i) => <Box key={i} sx={{height:"100%", width:"100%"}}>
                    <Image src={item} alt='Carousel item' fill style={{"objectFit": "cover", "filter": "brightness(0.6)"}}/>
                    <Box sx={{zIndex: 999, position: 'absolute', top: "40%", left: "10%", maxWidth: "40%", color: "white"}}>
                    <Typography variant="h4" component="h4" >{frases[i]}</Typography>
                    <Button variant="contained" size='large' sx={{marginTop: 3}}>contacto</Button>
                    </Box>
                </Box>)
            }    
        </Carousel>
    )
 }

export default Hero;