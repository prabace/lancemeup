import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";

import avatar from "../Assets/avatar.svg";
import wave from "../Assets/wave.png";
import unlock from "../Assets/unlock.svg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username:${username} Password: ${password}`);
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
          id="sign-in-form"
          className="flex flex-col justify-center p-10 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] rounded-3xl items-center"
        >
          <div className="flex justify-center">
            <img className="w-[15rem] h-[10rem] mb-5" src={logo} alt="avatar" />
          </div>

          <div class="mb-6 border-b border-[#f9a826]">
            <label>
              Username:
              <input
                className=" appearance-none bg-main border-none rounded w-full py-2 px-7 leading-tight focus:outline-none focus:shadow-outline "
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <br />
          <div class="mb-6 border-b border-[#f9a826]">
            <label>
              Password:
              <input
                className="appearance-none bg-main border-none rounded w-full py-2 px-7 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
          </div>

          <div class="flex items-center justify-between relative flex flex-col">
            <button
              form="sign-in-form"
              class="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white font-bold w-full p-3 mr-5 mb-4 rounded-full "
              type="submit"
            >
              <h2 className="text-gray"> Sign In </h2>
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              <h2 className="text-md"> Forgot Password?</h2>
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs mt-5">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
