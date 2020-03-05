import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container,Grid, Typography } from '@material-ui/core/'
import Nav from './components/nav'
import Booking from './components/booking'
import Hotel from './components/hotel'
import Footer from './components/footer'
import axios from 'axios'



export default class Homelist extends Component{
    constructor(props){
        super(props)
        this.state = {
            hotel:null
        }
    }

    componentDidMount(){
        const url = 'https://db5b37a9-3487-41a9-9800-12027a0d3e39.mock.pstmn.io/hotellist'
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


    listHotel=()=>{
        
    }

    render(){
        return(
            <ThemeProvider theme={theme}>
                <Nav/>
                <Typography>This is Hotel list</Typography>
            </ThemeProvider>
            
        )
    }
}
