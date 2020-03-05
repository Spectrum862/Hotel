import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container,Grid, Typography,CircularProgress, Link } from '@material-ui/core/'
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
        const url = 'https://e1b72086-1464-4573-899c-956b449e0094.mock.pstmn.io/hotel'
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



    render(){
        console.log('render')
        return this.state.hotel !== null ?(
            <ThemeProvider theme={theme}>
                <Nav/>
                <Typography variant='h3' className='margintop2' align='center'>This is Hotel list</Typography>
                    <Container maxWidth='md'> 
                    <Grid container spacing={2}>    
                        {Array.from(this.state.hotel).map((object,id) => {
                            console.log(object)
                            return(
                                <Grid item xs={12} lg={4} sm={6}>
                                    <Hotel name={object.name} price={object.price} image={object.image} location={object.location} id={object.id}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                    </Container>
            </ThemeProvider>
        ):<div id='loader'><CircularProgress/></div>
    }
}
