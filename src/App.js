import React,{Fragment,Component} from 'react'
import Login  from './pages/login'
import { Route,Switch, BrowserRouter  } from 'react-router-dom'
import Home from './pages/home'
import Regis from './pages/regis'

export default class App extends Component{
  
  constructor(props) {
    super(props)
    this.state = { 
    }
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


