import React,{Fragment,Component} from 'react'
import theme from '../../theme'
import { ThemeProvider,makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Typography, Toolbar, Link,Divider } from '@material-ui/core'
import {connect} from 'react-redux'
import auth from '../../firebase/index'
import {logout} from '../../reducers/action'

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,        
    },
    divider:{
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}));



function Nav ({dispatch,isLogin,email}){
    const classes = useStyles()
    
    const tologout = (e) =>{
        auth.signOut().then(respond =>{
            dispatch(logout())
        })
    }
    
    
    const checkLogin=()=>{
        if(isLogin===true) return(
            <Typography variant='subtitle1'>
                Welcome {email} | 
                <Button color="inherit" onClick={tologout}>Logout</Button>
            </Typography>        
        )
        else return <Button href='/login' color="inherit" >Login</Button>
    }


    return(
        <ThemeProvider theme={theme}>
            <AppBar position="static" color='secondary'>
                <Toolbar >
                    <Link href='/' variant='h6' color='inherit' underline='none' className={classes.title}>HOTELER</Link>
                    {checkLogin()}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    ) 
}
const mapStateToProps = function(state) {
    return {
      message: 'This is message from mapStateToProps',
      isLogin: state.session.isLogin,
      email: state.session.user.email
    }
  }
  
  const AppWithConnect = connect(mapStateToProps)(Nav)
  export default AppWithConnect