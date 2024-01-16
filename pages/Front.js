import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DoneIcon from '@mui/icons-material/Done';
// import Button from '@mui/material/Button';
import { Form, Button, Row, Col } from 'react-bootstrap';


function Front() {

    return (
        <>
            <div>
                <Grid >
                    <Box sx={{ height: '100vh' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }} >
                            <Box component="img" alt="Img." src={'./figma2.jpg'} sx={{ size: '100px', marginLeft: '10px' }} />
                            <Typography sx={{ marginLeft: '700px' }} >Home</Typography>
                            <Typography sx={{ marginLeft: '50px' }} >Service</Typography>
                            <Typography sx={{ marginLeft: '50px' }} >About Us</Typography>
                            <Typography sx={{ marginLeft: '50px' }} >Contact Us</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', marginLeft: '60px', marginTop: '80px' }}>
                            <Box>
                                <Typography variant="h2" sx={{ fontWeight: 'bold' }}> Tranforming Ideas</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 'bold' }}> Into <Typography component="span" variant="h2" sx={{ color: '#ff6f00', fontWeight: 'bold' }}>Powerful Solutions</Typography> </Typography>
                                <Typography variant='subtitle1' sx={{ fontSize: '11px' }}>FOR STARTUPS AND GRAWONG BUSINESS, WEB AND MOBILE SOLUTION, CLOUD EXPERTISE, AND DYNAMIC</Typography>
                                <Typography variant='subtitle1' sx={{ fontSize: '11px' }}>DIGITAL MARKETING STRATEGIES,PARTNER WITH US FOR A TRANSFORMATIVE JOURNEY INTO THE DIGITAL REALM.</Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <PhoneIcon sx={{ backgroundColor: '#ff6f00', height: '40px', width: '40px', borderRadius: '5px', marginTop: '20px' }} />
                                    <Typography size="small" sx={{ border: '2px', backgroundColor: '#212121', borderRadius: '5px', borderColor: 'white', marginTop: '20px', height: '40px', width: '200px', paddingTop: '5px', paddingLeft: '5px' }}>Get a Free Consultation</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Box component="img" alt="Img." src={'./figma1.jpg'} sx={{ marginLeft: '50px', width: '480px', height: '350px' }} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid>
                    <Box sx={{ height: '100vh' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '100px', marginLeft: '60px' }}>
                            <Box>
                                <Typography variant='h4' >We provide the best web services</Typography>
                                <Typography variant='subtitle1' sx={{ fontSize: '11px' }}>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT, CURAE POSUERE DONEC TELLUS EU</Typography>
                                <Typography variant='subtitle1' sx={{ fontSize: '11px' }}>EGESTAS ALIQUET LACINIA PARTURIENT FACILISI QUAM DICTUM SUSPENDISSE. TINCIDUNT GRAVIDA</Typography>
                                <Typography variant='subtitle1' sx={{ fontSize: '11px' }}>VIVAMUS</Typography>
                                <List variant='subtitle1' sx={{ fontSize: '11px' }} >
                                    <Box sx={{ display: 'flex' }}>
                                        <DoneIcon sx={{ color: '#9ccc65', backgroundColor: '#6e6e6e', borderRadius: '20px' }} /><ListItem>MOST EASY PREMIUM WEB DESIGN PROCESS</ListItem>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <DoneIcon sx={{ color: '#9ccc65', backgroundColor: '#6e6e6e', borderRadius: '20px' }} /><ListItem>RESEARCH & DEVELOPMENT BEFORE STARTING</ListItem>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <DoneIcon sx={{ color: '#9ccc65', backgroundColor: '#6e6e6e', borderRadius: '20px' }} /><ListItem>MAKING A QUALITY DESIGN IDEAS</ListItem>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <DoneIcon sx={{ color: '#9ccc65', backgroundColor: '#6e6e6e', borderRadius: '20px' }} /><ListItem>MAKING A QUALITY DESIGN IDEAS</ListItem>
                                    </Box>
                                    <Box sx={{ display: 'flex' }}>
                                        <DoneIcon sx={{ color: '#9ccc65', backgroundColor: '#6e6e6e', borderRadius: '20px' }} /><ListItem>MAKING A QUALITY DESIGN IDEAS</ListItem>
                                    </Box>
                                </List>
                            </Box>
                            <Box>
                                <Box component="img" alt="Img." src={'./figma3.png'} sx={{ marginLeft: '140px', width: '480px', height: '350px' }} />
                            </Box>
                        </Box>

                        <Typography variant='h2' sx={{ fontWeight: 'bold', marginLeft: '300px', marginTop: '100px' }}> Services We're Offering </Typography>
                        <Box sx={{ display: 'flex', marginTop: '80px' }}>
                            <Box component="img" alt="Img." src={'./figma4.png'} sx={{ marginLeft: '150px', width: '430px', height: '280px' }} />
                            <Box component="img" alt="Img." src={'./figma5.png'} sx={{ marginLeft: '150px', width: '430px', height: '280px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', marginTop: '80px' }}>
                            <Box component="img" alt="Img." src={'./figma6.png'} sx={{ marginLeft: '150px', width: '430px', height: '280px' }} />
                            <Box component="img" alt="Img." src={'./figma7.png'} sx={{ marginLeft: '150px', width: '430px', height: '280px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', marginTop: '80px' }}>
                            <Box component="img" alt="Img." src={'./figma8.png'} sx={{ marginLeft: '150px', width: '430px', height: '280px' }} />
                            <Box component="img" alt="Img." src={'./figma9.png'} sx={{ marginLeft: '150px', width: '430px', height: '280px' }} />
                        </Box>

                        <Typography variant='h2' sx={{ fontWeight: 'bold', marginLeft: '450px', marginTop: '100px' }}> Contact Us</Typography>
                        <Box component="img" alt="Img." src={'./figma10.png'} sx={{ marginLeft: '80px', width: '120px', height: '140px' }} />

                        <Box sx={{ display: 'flex' }}>
                            {/* <Box component="img" alt="Img." src={'./figma11.png'} sx={{ marginLeft: '150px', width: '350px', height: '450px', marginBottom: '10px' }} />

                            <Box component="img" alt="Img." src={'./figma12.png'} sx={{ marginLeft: '100px', width: '550px', height: '450px', marginBottom: '10px' }} /> */}
                            
                            <Box component="img" alt="Img." src={'./figma13.png'} sx={{ marginLeft: '70px', width: '1100px', height: '500px', marginBottom: '10px' }} />

                        </Box>

                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold', marginLeft: '400px', marginTop: '200px' }}>Copyright @ 2021 Micro Technologies All Right Reserved</Typography>

                    </Box>
                </Grid>
            </div>
        </>
    )
}

export default Front