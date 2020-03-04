const init_state = {
    isLogin:false,
    user:{
        email:"",
    }
}

export default (state=init_state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return action.value
        case 'LOGOUT':
            return action.value
        default:
            return state
    }

}