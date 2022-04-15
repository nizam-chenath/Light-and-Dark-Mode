import React from 'react'
import '../App.css'
function login() {
  return (
  
      <div className="login">
        <p className="signin">Sign-in</p>
        <form action="" className="form1">
          <input type="text" className="username" placeholder="Username" />
          <input type="password" className="password" placeholder="Password"/>
          <a  className="submit">Sign-in</a>
          <p className="forgot"><a href="">Forgot Password?</a></p>
        </form>
       
      </div>
   
  )
}

export default login