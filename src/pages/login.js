import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import {Container,Button,TextField,Typography, Link, Paper, Grid} from '@material-ui/core/'


export default class Login extends Component {
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

    onSubmit = (e) =>{
        e.preventDefault()
        console.log('submit')
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
                        <Typography variant='h3' align='center'>Sign in</Typography> 
                        
                        <form  onSubmit={this.onSubmit}>
                            <TextField name='username' label="Email" fullWidth variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <TextField name= 'password'label="Password" fullWidth type='password' variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <Button type='submit'className='margintop2' variant="contained" color='primary' fullWidth >Sign in</Button>
                        </form>
                        <Grid container className="margintop3">
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                            </Grid>
                        </Grid>
                    </Paper>      

                </ThemeProvider>
            </Container>           
        )
    }
}
