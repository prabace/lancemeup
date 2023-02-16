import React, { useState } from "react";

import logo from "../Assets/logo.png";

import useEmailValidation from "../Hooks/useEmailValidation";
import usePasswordValidation from "../Hooks/usePasswordValidation";
import useLocalStorage from "../Hooks/useLocalStorage";




const LoginForm = () => {

  const [emails, setEmails] = useLocalStorage("email", "");
  const [passwords, setPasswords] = useLocalStorage("password", "")

  const[admin, setAdmin] = useLocalStorage("admin","")

  const email = useEmailValidation();
  const password = usePasswordValidation();
  
  const getuserArr = localStorage.getItem("user")
  console.log(getuserArr)




  const handleSubmit = (event) => {
    event.preventDefault();

    email.validate();
    password.validate();

    if (email.value === 'admin@admin.com' && password.value === 'password'){
          setAdmin(true)
          
          return
    }else{
      setAdmin(false)
      console.log('helloo', admin)
    }

    if (getuserArr && getuserArr.length) {
      const userdata = JSON.parse(getuserArr);
     
      const userlogin = Object.keys(userdata).filter(user => {
          return userdata[user].emails === email.value && userdata[user].passwords === password.value
         
      }).map(user => userdata[user]);
      
      console.log(userlogin);
      if (userlogin.length == 0) {
        alert("invalid details")
    } else {
        console.log("user login succesfulyy");
  
        localStorage.setItem("user_login", JSON.stringify(userlogin))
    }
  }
  };

 
  

  return (
   

    <div className="w-full h-screen mx-auto flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
      <div className="w-1/2 h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Log In
        </h1>
        <h2 className="mb-5 text-gray-500 text-lg">
          Don't have an account?{" "}
          <a className="text-secondary font-bold" href="/registration">
            Signup
          </a>
        </h2>
        <form
          onSubmit={handleSubmit}
          id="signIn"
          className="flex flex-col justify-center p-10 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] rounded-3xl items-center"
        >
          <div className="flex justify-center">
            <img className="w-[15rem] h-[10rem] mb-5" src={logo} alt="avatar" />
          </div>

          <div class="mb-2">
            <label className="font-bold inline-block text-left w-[20rem]">
              Email:
              <input
                className=" border-b border-[#f9a826] appearance-none bg-main rounded w-full py-2 px-7 leading-tight focus:outline-none focus:shadow-outline  "
                type="text"
                onChange={(e) => {
                  email.onChange(e)
                  setEmails(e.target.value);
                  console.log(e.target.value);
                }}
              />
               {email.error ? (
                  <p className="text-error text-sm font-bold">{email.error}</p>
                ) : (
                  <p className="text-sm font-bold text-success">
                    {email.valid}
                  </p>
                )}
            </label>
          </div>
          <br />
          <div class="mb-2">
            <label
              htmlFor="password"
              className="font-bold inline-block text-left w-[20rem]">
              Password:
              <input
                className="border-b border-[#f9a826] appearance-none bg-main rounded w-full py-2 px-7 leading-tight focus:outline-none focus:shadow-outline "
                type="password"
                onChange={(e)=>{
                  password.onChange(e)
                  setPasswords(e.target.value);
                  console.log(e.target.value)
                }}
              />
                {password.error ? (
                  <p className="text-error text-sm font-bold">
                    {password.error}
                  </p>
                ) : (
                  <p className="text-sm font-bold text-success">
                    {password.valid}
                  </p>
                )}
            </label>
            <br />
          </div>

          <br />

            <button
              className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white font-bold px-8 py-4 rounded-full "
              type="submit"
              form="signIn"
            >
              Submit
            </button>
        </form>
       
      </div>
    </div>
  );
};

export default LoginForm;
