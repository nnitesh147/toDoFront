import React from 'react'
import { useContext } from 'react'
import {Context} from "../main"
import Loader from "./Loader"

const Profile = () => {

  const {loading , user , isAuthenticated} = useContext(Context);
  console.log(user);

  return (
    loading ? <Loader/> : (
      <div className='profile'>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
    )
  )
}

export default Profile