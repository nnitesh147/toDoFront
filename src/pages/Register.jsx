import React , { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import {Context, server} from "../main.jsx" 
import toast from "react-hot-toast"


const Register = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {isAuthenticated , setisAuthenticated , loading , setloading} = useContext(Context);


  const submitHandler = async (e)=>{
    e.preventDefault();
    setloading(true);
    try {
    const {data} = await axios.post(`${server}/users/new` , {name , email , password} , 
      {
        headers : {
          "Content-Type" : "application/json"
        },
        withCredentials:true,
      });
      toast.success(data.message);
      setisAuthenticated(true);
      setloading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      setisAuthenticated(false);
      setloading(false);
    }
  };

  if(isAuthenticated){
    return <Navigate to={"/"}/>
  }

  return (
    <div className="login">
    <section>
      <form onSubmit={submitHandler}>
      <input
      type='text'
      placeholder='Name'
      value={name}
      onChange={(e)=>setname(e.target.value)}
      required
      />
        <input 
        type='email'
        placeholder='E-mail'
        value={email}
        onChange={(e)=> setemail(e.target.value)}
        required
         />
        <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        required
        />
        <button disabled={loading} type='submit'>Sign-Up</button>
        <h4>Or</h4>
        <Link to={"/login"}>Login</Link>
      </form>
    </section>
  </div>
  )
}

export default Register