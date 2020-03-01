import React,{Fragment,Component} from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppBar, Icon, Typography, Toolbar, Button, Container } from '@material-ui/core'

export default class Footer extends Component{
    render(){
        return(
            <Container maxWidth={false} className='dark'>
                <Container maxWidth='xs' className='content'>
                <Typography className='textwhite' align='center'>THIS IS A FOOTER</Typography>
                <Typography align='center'>
                    <Icon></Icon>
                </Typography>
                </Container>
            </Container>
        )
    }
}