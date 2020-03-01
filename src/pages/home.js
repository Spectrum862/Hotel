import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Typography , Grid, Paper, TextField} from '@material-ui/core/'
import Nav from './components/nav'
import Booking from './components/booking'

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
                            <Container maxWidth="md" className="textwhite">
                                <Typography variant="h2" align="center" className>WELCOME</Typography>
                            </Container>            
                        </Grid>
                </Container>
                <Container maxWidth="md">
                    <Container className='content'>
                        
                        <Booking/>
                    </Container>
                </Container>
            </ThemeProvider>
        )
    }
}