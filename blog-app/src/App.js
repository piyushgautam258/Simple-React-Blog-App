import './App.css';
import {BrowserRouter as Router,Routes,Route,Link, useNavigate} from "react-router-dom";
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import {auth} from "./firebase-config"


function App() {
  const [isAuth,setisAuth] = useState(false);

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setisAuth(false)
      window.location.pathname='/login'
    })
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">CreatePost</Link>
      {!isAuth?  <Link to="/login">Login</Link>:<button onClick={signUserOut}>Logout</button>}

      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setisAuth={setisAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
