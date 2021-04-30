import React,{useState} from 'react'
import "../css/login.css"
import { auth } from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
      setEmail("")
      setPassword("")
  };
    return (
        <div className="loginbox">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div className="login">
            <div className="logo">
                <img src="https://www.cbit.ac.in/wp-content/themes/CBIT/images/logo.png" alt="cbitlogo"></img>
            </div>
            <div className="credentials">
                <h1>login</h1>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 type="text" 
                 placeholder="EMAIL"></input>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="passwoed"
                placeholder="PASSWORD"></input>
                <button onClick={handleSignIn} type="submit">login</button>
            </div>
        </div>
        </div>
    )
}

export default Login
