import React,{Fragment,Component} from 'react'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import {Container,Button,TextField,Typography, Link, Paper, Grid,Divider} from '@material-ui/core/'
import auth from '../firebase/index'


export default class Regis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            confirm:"",
            name:"",
        }
    }
    
    onChange = e =>{
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
        // if(this.state.username==="") this.plsId
        // if(this.state.password==="") this.plsPass
    }  

    async register() {
        const {name,email,password} = this.state
		await auth.createUserWithEmailAndPassword(email, password)
		auth.currentUser.updateProfile({displayName: name})
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
                        <Typography variant='h5' align='center'>Sign up</Typography> 
                        <form onSubmit={this.register}>
                            <TextField name='username' label="Email" fullWidth variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <TextField name= 'password'label="Password" fullWidth type='password' variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <TextField name= 'confirm'label="Confirm Password" fullWidth type='password' variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <TextField name='name' label="Name" fullWidth variant="outlined" margin="normal" required onChange={this.onChange}/>
                            <Button className='margintop2' type="submit" variant="contained" color='primary' fullWidth >Sign in</Button>
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
