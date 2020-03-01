import React,{Fragment,Component} from 'react'
import Login  from './pages/login'
import { Route,BrowserRouter  } from 'react-router-dom'
import Home from './pages/home'

export default class App extends Component{
  
  constructor(props) {
    super(props)
    this.state = { 
    }
  }

  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
      </BrowserRouter>
    )
  }
}


