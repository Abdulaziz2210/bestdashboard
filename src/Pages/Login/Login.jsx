import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const handClick=(e)=>{
    e.preventDefault()
    if(username=== 'admin' && password ===123)
    console.log(username,password);
    navigate('/')
    
  }

  return (
    <div className="login-container">
  <div className="frame">
    <div className="ring">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <form onSubmit={handClick}>
        <h2>Enter Your Password And UserName !!!</h2>
        <div className="inputBx">
          <input onClick={(e)=>setUsername(e.target.value)} id="type" type="text" placeholder="👤UserName" required />
        </div>
        <div className="inputBx">
          <input onClick={(e)=>setPassword(e.target.value)} id="model" type="text" placeholder="🔑Password " required />
        </div>
        <div className="inputBx">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login
