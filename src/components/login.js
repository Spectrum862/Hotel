import React,{Fragment,Component} from 'react'
import {Container,Button,TextField} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';

import CloseIcon from '@material-ui/icons/Close';
 
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
        if(this.state.username===null) console.log("asdasd")
    }

    render(){

        return(
        
            <Container maxWidth="xs">
                <form >
                    <TextField name='username' label="Email" fullWidth variant="outlined" margin="normal" required onChange={this.onChange}/>
                    <TextField name= 'password'label="Password" fullWidth type='password' variant="outlined" margin="normal" required onChange={this.onChange}/>
                    <Button id="submit">Sign in</Button>
                </form>
                {this.state.password}
            </Container>
            
            
        )
    }
}
