import React,{useState,useEffect} from 'react'
import '../Pages/Styles/login.css'

import {login} from '../Redux/Action/authAction'
import {useDispatch}  from 'react-redux'
import { Link } from 'react-router-dom'


const Login = () => {
const initialData = {email : '', password : ''}
const [userData,stUserdata] = useState(initialData);
const {email,password} = userData;


const dispatch = useDispatch();

const HandleUserData = (e)=>{
  const {name, value} = e.target;
  stUserdata({...userData, [name]:value});
}
const handleSubmit = (e) =>{
  e.preventDefault();
  // console.log(userData);
  dispatch(login(userData));
}
const [typePassword , settypePassword] = useState(false);

  return (
    <>
    <div className='loginform '>
    <form className='login shadow-lg p-4' onSubmit={handleSubmit}>
    <h1 className='text-center text-warning text-uppercase'>Login</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} name='email' onChange={HandleUserData} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type={typePassword ? "text" : "password"} className="form-control" onChange={HandleUserData} value ={password} name='password' id="exampleInputPassword1"/>
  </div>
  <p className='password text-muted '>
    <small onClick={(()=> settypePassword(!typePassword))} >{typePassword? "show" : "Hide"}</small>
  </p>
  <button type="submit" className="btn btn-secondary w-100" disabled ={email && password ? false : true}>Login</button>
  <p>
    You don't have an account ? <Link to='/register' className='link'>Register Now </Link>
  </p>
</form>
    </div>
    </>
  )
}

export default Login