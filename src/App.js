import React,{Fragment,Component} from 'react'
import Login  from './pages/login'
import { Route,Switch, BrowserRouter  } from 'react-router-dom'
import auth from './firebase/index'
import {login} from './reducers/action'
import { connect } from 'react-redux'


//components
import Home from './pages/home'
import Regis from './pages/regis'



class App extends Component{
  
  constructor(props) {
    super(props)
    this.state = { 
    }
    this.dispatch = props.dispatch
  }

  componentDidMount() {
    console.log('APP mounted')
    auth.onAuthStateChanged(respond => {
      if (respond) {
        this.dispatch(login(respond.email))
        console.log('from App logined ' + respond.email)
        console.log(respond)
      }
    })
  }

  

  render(){
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/login" component={Login} />
            <Route  path="/signup" component={Regis} />
            <Route component={Home}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    message: 'This is message from mapStateToProps',
  }
}

const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect

