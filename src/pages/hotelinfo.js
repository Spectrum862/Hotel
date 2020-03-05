import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container,Grid, Typography,CircularProgress, Card, CardContent } from '@material-ui/core/'
import Nav from './components/nav'
import Booking from './components/booking'
import Hotel from './components/hotel'
import Footer from './components/footer'
import axios from 'axios'
import Map from './components/map'


export default class Homelist extends Component{
    constructor(props){
        super(props)
        this.state = {
            hotel:null
        }
    }

    componentDidMount(){
        let id = this.props.location.pathname.split('/')[2];
        const url = 'https://e1b72086-1464-4573-899c-956b449e0094.mock.pstmn.io/hotel/'+id
        const header = {headers:{'x-api-key':'PMAK-5e6095308fb475003801ac87-1f2d0eaf1019985e857a01c765dd7254cc'}} 
        axios.get(url,header)
            .then(respond=>{
                this.setState({hotel:respond.data})
                console.log(this.state.hotel)
    
            })
            .catch(error=>{
                console.log(error)
            })
        
    }

    render() {
        return this.state.hotel !== null ?(
            <ThemeProvider theme={theme}>
                <Nav/>
                <Container maxWidth="md">
                    <Grid container className='margintop2' spacing={2}>
                        <Grid item xs={12} md={6} xl={6}>
                            <Typography variant="h4">About</Typography>
                            <Typography variant="subtitle1">{this.state.hotel.about}</Typography>
                            <Typography variant="h4" className="margintop2">Contact</Typography>
                            <Typography variant="subtitle1">{this.state.hotel.contact}</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <div className="iframe-container">
                            <Map lat={this.state.hotel.lat} lng={this.state.hotel.lng}/>
                            </div>                              
                        </Grid>
                    </Grid>
                </Container>
                
            </ThemeProvider>
        ):<div id='loader'><CircularProgress/></div>
    }

}