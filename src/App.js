import React,{Fragment,Component} from 'react'
import Login  from './components/login'


export default class App extends Component{
  
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <Fragment>
        <Login/>
      </Fragment>
    )
  }
}


