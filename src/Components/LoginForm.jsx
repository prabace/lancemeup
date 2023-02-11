import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "./LoginImage";
import logo from '../Assets/logo.png';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username:${username} Password: ${password}`);
  };
  return (
    <div className=" mx-auto px-48 py-48 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] rounded-3xl ">
      <div className="grid grid-cols-2 justify-center items-center"> 
        <div>
          <LoginImage/>
        </div>
        <div>
          <div className="flex flex-col text-4xl font-extrabold text-primary flex justify-center items-center">
        <img className="w-[15rem] h-[15rem] object-cover" src={logo}/>   
       
        </div> 
      <form
        onSubmit={handleSubmit}
        className="text-primary font-semibold flex flex-col justify-center items-center"
      >
        
        <label>
          Username:
          <input
            className="h-10 shadow-xl rounded-md ml-2"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            className="h-10 shadow-xl rounded-md ml-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button
        className="bg-[#A3CFCD] mt-6 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] px-9 py-4 rounded-3xl"
        type="submit">
        Submit
        </button>
        <h2 className="mt-4 text-secondary font-semibold">Don't have an account?<Link to ="/registration">  <span className="font-bold text-primary">SignUp</span></Link></h2>
      </form>
        </div>
      </div>
      
    </div>
    
  );
};

export default LoginForm;
