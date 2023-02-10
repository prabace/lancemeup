import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name:${name} Email:${email} Password: ${password}`);
  };

  return(
    <div className="mx-auto px-48 py-48 shadow-2xl rounded-3xl ">
    <h1 className="text-4xl  flex justify-center items-center">SignUp</h1>     
    <form
      onSubmit={handleSubmit}
      className=" flex mt-24 flex-col justify-center items-center"
    >
      
      <label>
        Name:
        <input
          className="shadow-xl rounded-md ml-8"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          className="shadow-xl rounded-md ml-8"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          className="shadow-xl rounded-md ml-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button
      className="mt-6 shadow-xl px-9 py-4 rounded-3xl"
      type="submit">
      Submit
      </button>
      <h2 className="mt-4">Already have an account?<Link to="/signin"> SignIn</Link></h2>
    </form>
  </div>
  
);
};

export default RegistrationForm;
