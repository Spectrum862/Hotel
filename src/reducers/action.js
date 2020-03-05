export const login = (getmail,getname) =>({
  type:'LOGIN',
  value:{
    isLogin:true,
    user: {
      email:getmail,
      name:getname
    }
  }
})

export const logout = () =>({
  type:'LOGOUT',
  value:{
    isLogin:false,
    user: {
      email:"",
      name:""
    }
  }

})