// import { Link } from "react-router-dom";
import axios from "axios";
import "./contact.css";
import { useState } from "react";



export default function Contact() {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
  
    const handleSubmit =async (e) =>{
      e.preventDefault();
      setError(false);
      try{
        const res = await axios.post("/auth/register",{
          username,
          email,
          password,
        });
        res.data && window.location.replace("/login");
      }catch(err){
        setError(true);
      }
     
        }
  
    return (
      <div className="register">
          <span className="registerTitle">Contact Us</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
          <input type="text" className="registerInput" 
          placeholder="Enter your username...."
          onChange={e=>setUsername(e.target.value)}
          />
  
          <label>Email</label>
          <input type="text" className="registerInput"
           placeholder="Enter your email...."
           onChange={e=>setEmail(e.target.value)}
           />
          <label>Review</label>
          <input type="text" className="registerInput"  
          placeholder="Enter your password...."
          onChange={e=>setPassword(e.target.value)}
          />
          <button className="registerButton" type="submit">Send</button>
        </form>
        {error && <span style={{color:"red",marginTop:"10px"}}>something went wrong</span>}
      </div>
    );
  }
  