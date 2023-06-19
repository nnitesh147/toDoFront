import {Route , Routes , BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import { Context, server } from "./main";
import axios from "axios";

function App() {

  const { setuser, setIsAuthenticated, setloading , isAuthenticated} = useContext(Context);

  useEffect(() => {
    setloading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setuser(res.data.user);
        setIsAuthenticated(true);
        setloading(false);
      })
      .catch((error) => {
        setuser({});
        setIsAuthenticated(false);
        setloading(false);
      });
  }, []);


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster/>
    </Router>
  );

}

export default App
