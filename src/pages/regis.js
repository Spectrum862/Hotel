import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import {Container,Button,TextField,Typography, Link, Paper, Grid} from '@material-ui/core/'


export default class Regis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    
    onChange = e =>{
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
        // if(this.state.username==="") this.plsId
        // if(this.state.password==="") this.plsPass
    }  

    onSummit = () =>{
        
    }

    plsId =()=>{

    }

    plsPass =()=>{

    }
    

    render(){

        return(
        
            <Container maxWidth="xs">
                <ThemeProvider theme={theme}>
                    <Paper elevation={0} className='margintop1'>                 
                        <Typography variant='h3' align='center'>Sign up</Typography> 
                        <form >
                            <TextField name='username' label="Email" fullWidth variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <TextField name= 'password'label="Password" fullWidth type='password' variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <Button className='margintop2' id="submit" variant="contained" color='primary' fullWidth >Sign in</Button>
                        </form>
                        <Grid container className="margintop3">
                            <Grid item xs>

                            </Grid>
                            <Grid item>
                            <Link href="/login" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                            </Grid>
                        </Grid>
                    </Paper>      

                </ThemeProvider>
            </Container>           
        )
    }
}
