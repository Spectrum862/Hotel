import React,{Fragment,Component} from 'react'
import Login  from './pages/login'
import { Route,Switch, BrowserRouter  } from 'react-router-dom'
import auth from './firebase/index'
import {login} from './reducers/action'
import { connect } from 'react-redux'


//components
import Home from './pages/home'
import Regis from './pages/regis'
import { CircularProgress } from '@material-ui/core'



class App extends Component{
  
  constructor(props) {
    super(props)
    this.state = { 
      firebaseInit:false,
    }
    this.dispatch = props.dispatch
  }

  componentDidMount() {
    auth.onAuthStateChanged(respond => {
      if (respond) {
        this.dispatch(login(respond.email,respond.displayName))
        console.log('from App logined ' + respond.email+' name: '+respond.displayName)
        console.log(respond)
      }
      this.setState({firebaseInit:true})
    })
  }

  

  render(){
    return this.state.firebaseInit !== false ? (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/login" component={Login} />
            <Route  path="/signup" component={Regis} />
            <Route component={Home}/>
          </Switch>
        </BrowserRouter>
    ) :<div id='loader'><CircularProgress/></div>
  }
}

const mapStateToProps = function(state) {
  return {
    message: 'This is message from mapStateToProps',
  }
}

const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect

