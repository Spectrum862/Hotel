import React,{Fragment,Component} from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppBar, IconButton, Typography, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


export default class Nav extends Component{
    render(){
        return(
            <ThemeProvider theme={theme}>
                <AppBar position="static" color='secondary'>
                    <Toolbar >

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        )
    }
}