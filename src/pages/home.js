import Navbar from '../components/navbar.js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import './home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  imageSrc from '../assets/images/LF.png';
import  cardImg1 from '../assets/images/homecard1.png';
import  cardImg2 from '../assets/images/homecard2.png';
import  cardImg3 from '../assets/images/homecard3.png';
import  imageSrc2 from '../assets/images/batangpinoy.png';
import googlePlay from '../assets/images/playstore.png';
import applePlay from '../assets/images/apple.png';
 
const Item = styled(Paper)(({ theme, height, bgcolor }) => ({
    backgroundColor: bgcolor,
    color: theme.palette.text.secondary,
    height: height,
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));
 
function home() {
    return (
        <>
            <center>
                <Navbar />
            </center>
            <Box className='hometext' sx={{ flexGrow: 1 }}>
                <Grid container >
                    <Grid item xs={12}>
                        <Item className='homeItem1' bgcolor="#9dadd2">
                            <div className='homeRow1'>
                                <span className='textVariant1'>Discover the</span> Filipino <br /> Sign Language <br />
                            </div>
                            <div>
                                <span className='textVariant1 textVariant2'>start to learn and connect!</span>
                            </div>
                            <br />
                            <br />
                            <Fab variant="extended" className='homeButton'>
                                Get early access!
                            </Fab>
                            <img className="image"  src={imageSrc} alt='Batang Pinoy'/>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item className='homeItem2' bgcolor="#ffffff">
                            <div className='homeRow2'>
                                What to learn?
                            </div>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={4}>
                                    <Card >
                                        <img  src={cardImg1} alt='Alphabets' className='homecard' />
                                        <CardContent>
                                            <Typography gutterBottom className='cardText' component="div">
                                                Alphabets
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Card>
                                        <img  src={cardImg2} alt='Common Words'className='homecard' />
                                        <CardContent>
                                            <Typography gutterBottom className='cardText' component="div">
                                                Common Words
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Card>
                                        <img  src={cardImg3} alt='Alphabets'className='homecard' />
                                        <CardContent>
                                            <Typography gutterBottom className='cardText' component="div">
                                                Greetings
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <div className='connectingButtonPos'>
                                <Fab variant="extended" className='homeButton' >
                                    Start Connecting Now!
                                </Fab>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item className='homeItem3-1' bgcolor="#141D48">
                            <div className='homeRow3Col1Padding'>
                                <span className='homeRow3Col1'>
                                    E-Kumpas
                                </span>
                                <br />
                                <span className='homeRow3Col2'>
                                    Filipino Sign Language
                                </span>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item className='homeItem3-2' bgcolor="#141D48">
                            <div className='aboutUsText1'>
                                ABOUT US
                            </div>
                            <div className='aboutUsText2'>
                                OUR STORY
                            </div>
                            <div className='aboutUsText3'>
                                The sole idea of E-Kumpas is inspired from a kDrama titled “Twinkling-twinkling Watermelon” it is about a girl with hard-of-hearing and a boy, they didn’t understand each other and had a lot of misunderstanding in the early stage. We’ve come up with this idea to have a starting point in learning sign language with  aphabets, basic words and common greetings written in Filipino language to increse the speed in learning sign language and to connect exclusively with them with this simple words they can form a bond, friendship, etc.
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item className='homeItem4'>
                            <img className="image2"  src={imageSrc2} alt='Batang Pinoy'/>
                            <div className='homeItem4Container'>
                                <span className='homeItem4ContainerText'>Download the E-Kumpas App now for Free and learn </span>
                                <br/>
                                <span className='homeItem4ContainerText'>Filipino Sign Language</span>
                                <div className='homeItem4Button'>
                                    <div className='homeItem4Button1'>
                                        <img  src={googlePlay} alt='Google Play'className='homeItem4ButtonImg'/>
                                        Download on the Google Play
                                    </div>
                                    <div className='homeItem4Button1'>
                                        <img  src={applePlay} alt='Google Play'className='homeItem4ButtonImg'/>
                                        Get it on <br/>App Store
                                    </div>
                                </div>
                            </div>
                            <div className='homeItem4Container2'></div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default home;