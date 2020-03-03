import React,{Fragment,Component} from 'react'
import theme from '../../theme'
import { ThemeProvider,makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Typography, Toolbar, Link,Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,        
    },
    divider:{
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}));


export default function Nav (){
    const classes = useStyles()


    return(
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='secondary'>
                <Toolbar >
                    <Link href='/' variant='h6' color='inherit' underline='none' className={classes.title}>HOTELER</Link>
                    <Button href='/login' color="inherit" orite>Login</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
    
}