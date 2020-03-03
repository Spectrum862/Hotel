import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Typography , Grid,Button, Card, CardActionArea,CardActions,CardMedia,CardContent,Grow  } from '@material-ui/core/'
import Nav from './components/nav'
import Booking from './components/booking'
import Hotel from './components/hotel'
import Footer from './components/footer'
export default class Home extends Component{
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Nav/>
                <Container maxWidth={false} className='mainbg'>

                        <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                            <Grow timeout={1500}in={true}>
                                <Container maxWidth="md" className="textwhite">
                                    <Typography variant="h2" align="center" >WELCOME</Typography>
                                    <Typography variant="subtitle2" align="center">
                                        เทสข้อความ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </Typography>
                                </Container>    
                            </Grow >        
                        </Grid>
                </Container>
                <div className='contentbg'>
                    <Container className='content' maxWidth="md" >                 
                        <Booking/>
                    </Container >
                </div>
                <div className='contentbg' > 
                    <Container className='content'maxWidth="md" >                 
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={4} md={6}>
                                <Hotel/>
                            </Grid>
                            <Grid item xs={12} lg={4} md={6}>
                                <Hotel/>
                            </Grid>
                            <Grid item xs={12} lg={4} md={6}>
                                <Hotel/>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Footer/>
            </ThemeProvider>
        )
    }
}