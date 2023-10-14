import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Dashboard from "../../Assets/Projects/Dasboard.jpg";
import Mobl from "../../Assets/Projects/mobl.png"
import MoblRes from "../../Assets/Projects/home-res.png"
import Port from "../../Assets/Projects/App.png"
import Auth from "../../Assets/Projects/Auth.png"
import Register from "../../Assets/Projects/Register.png"
import FullStack from "../../Assets/Projects/FullStack.png"
import Contact from "../../Assets/Projects/Contact.png"
import MoblCont from "../../Assets/Projects/MoblContact.png"
import Branding from "../../Assets/Projects/Branding.png"
import Digital from "../../Assets/Projects/Digital.png"
import SignlePage from "../../Assets/Projects/SinglePage.png"


const Work=()=> {
    const itemData = [
        {
          img: `${Mobl}`,
          title: 'resposive',
          author: 'Profile Responsive View',
        },
        {
          img: `${Contact}`,
          title: 'Contact',
          author: 'Contact Form',
        },
        {
          img: `${Digital}`,
          title: 'Digital',
          author: 'Digital Inventions',
        },
        {
          img: `${Dashboard}`,
          title: 'Dashboard',
          author: 'Dashboard Design',
        },
        {
          img: `${FullStack}`,
          title: 'Full Stack',
          author: 'Portfolio',
        },
        {
          img: `${Port}`,
          title: 'Dashboard',
          author: 'Dashboard Design',
        },
        {
          img: `${Branding}`,
          title: 'Branding',
          author: 'Branding Site',
        },
        {
          img: `${MoblCont}`,
          title: 'Contact Form',
          author: 'Contact Form',
        },
        {
          img: `${Register}`,
          title: 'Register',
          author: 'Register User Info',
        },
        {
          img: `${MoblRes}`,
          title:'Home Responsive View',
          author: 'Home Responsive View',
        },
        {
          img: `${Auth}`,
          title: 'Authentication Screen',
          author: 'Authentication Screen',
        },
        
        {
          img: `${SignlePage}`,
          title: 'Single Page',
          author: 'Single Page Application',
        },
      ];
  return (
    <Box  sx={{display:"flex",justifyContent:"center",padding:"20px 0px"}}>
    <Box sx={{ width: '80%', height: 450}}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar sx={{color:"white"}} position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Box>
  );
}
export default Work;

