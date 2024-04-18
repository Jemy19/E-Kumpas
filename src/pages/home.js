import Navbar from '../components/navbar.js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import '../components/home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme, height, bgcolor }) => ({
    backgroundColor: bgcolor,
    color: theme.palette.text.secondary,
    height: height,
    padding: '100px',

}));

function home() {
    return (
        <>
            <center>
                <Navbar />

            </center>
            <Box className='hometext' sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Item className='homeItem1'>
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
                            <img src="/assets/images/LF 1.png" alt="Batang Pinoy" className="image" />

                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item className='homeItem2'>
                            <div className='homeRow2'>
                                What to learn?
                            </div>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={4}>
                                    <Card >
                                        <CardMedia
                                            component="img"
                                            className='homeCard'
                                            image="https://via.placeholder.com/300"
                                            alt="Card 1"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom className='cardText' component="div">
                                                Alphabets
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            className='homeCard'
                                            image="https://via.placeholder.com/300"
                                            alt="Card 2"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom className='cardText' component="div">
                                                Common Words
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            className='homeCard'
                                            image="https://via.placeholder.com/300"
                                            alt="Card 3"
                                        />
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
                        <Grid container>
                            <Grid item xs={12}>
                                <Item className='homeItem3'>
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
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Item className='homeItem3'>
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
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Item className='homeItem4'>
                            <div className='homeItem4Container'>
                                <span className='homeItem4ContainerText'>Download the E-Kumpas App now for Free and learn <br/>Filipino Sign Language</span>
                            </div>
                            <div className='homeItem4Container2'>

                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default home;