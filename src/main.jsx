import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss'
import { createContext } from "react";
import { useState } from 'react';

export const server = "https://nodejstodobackend.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrappper = () =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setloading] = useState(false);
  const [user , setuser] = useState({});

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setloading,
        user,
        setuser,
      }}
    >
      <App />
    </Context.Provider>
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrappper/>
  </React.StrictMode>,
)
