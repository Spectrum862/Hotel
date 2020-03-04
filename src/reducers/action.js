export const login = (getmail) =>({
  type:'LOGIN',
  value:{
    isLogin:true,
    user: {
      email:getmail,
    }
  }
})

export const logout = () =>({
  type:'LOGOUT',
  value:{
    isLogin:false,
    user: {
      email:""
    }
  }

})