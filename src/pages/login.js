import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import {Container,Button,TextField,Typography, Link, Paper, Grid, Divider} from '@material-ui/core/'
import auth from '../firebase/index'
import { connect } from 'react-redux'
import { login,logout} from '../reducers/action'
import { Redirect, Route } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props)
        this.session = props.session
        this.state = {
            email: "",
            password: "",
            message:""
        }
        this.dispatch = props.dispatch
        this.isLogin = props.isLogin
        if(this.isLogin) props.history.replace('/')
    }
    

    onChange = e =>{
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
        // if(this.state.email==="") this.plsId
        // if(this.state.password==="") this.plsPass
    }  

    onSubmit = (e) =>{
        e.preventDefault()
        console.log('submit')
        auth
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(respond=>{
            this.props.history.replace('/')
        })
        .catch(error=>{
            this.setState({ message:error.message})
            console.log(this.state.message)
        })

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
                        <Link href='\' underline='none' color='inherit'> <Typography variant='h2' align='center'>HOTELER</Typography></Link>
                        <Divider></Divider>
                        <Typography variant='h5' align='center'>Sign in</Typography> 
                        <form  onSubmit={this.onSubmit}>
                            <TextField name='email' label="Email" fullWidth variant="outlined" margin="normal" required onChange={this.onChange}/>
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
const mapStateToProps = function(state) {
    return {
      message: 'This is message from mapStateToProps',
      session : state.session,
      isLogin : state.session.isLogin
    }
}

const AppWithConnect = connect(mapStateToProps)(Login)
export default AppWithConnect
