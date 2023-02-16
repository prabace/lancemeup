import React from "react";
import { Link, useNavigate } from "react-router-dom";

import justdoit from "../Assets/justdoit.png";
import useNameValidation from "../Hooks/useNameValidation";
import useEmailValidation from "../Hooks/useEmailValidation";
import usePasswordValidation from "../Hooks/usePasswordValidation";
import useLocalStorage from "../Hooks/useLocalStorage";

const RegistrationForm = () => {

  
  /**
   * Local Storage states
   */


  const [names, setNames] = useLocalStorage("name", "");
  const [emails, setEmails] = useLocalStorage("email", "");
  const [passwords, setPasswords] = useLocalStorage("password", "");

  const navigate = useNavigate()


  /**
   * Importing the custom hooks for form validation
   */

  const name = useNameValidation();
  const email = useEmailValidation();
  const password = usePasswordValidation();

  const user = [{
    names,
    emails,
    passwords,}]


    localStorage.setItem('user', JSON.stringify(user));

  const handleSubmit = (event) => {
    event.preventDefault();
    name.validate();
    email.validate();
    password.validate();
  
   
  };
 

  return (
    <div className="mx-auto shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] rounded-3xl ">
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 justify-center items-center">
        <div>
          <img className=" object-cover hidden laptop:block " src={justdoit} />
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            id="signUp"
            className="flex flex-col justify-center p-10 rounded-3xl items-center"
          >
            <div className="flex flex-col ">
              <h2 className="text-3xl font-extrabold mb-4">
                Create your account.
              </h2>
              <h2 className="mb-8 text-lg ">
                Already have an account?
                <Link to="/signin">
                  {" "}
                  <span className="font-bold text-primary">SignIn</span>
                </Link>
              </h2>
            </div>

            <div class="mb-2">
              <label className="font-bold inline-block text-left w-[20rem]">
                Name:
                <input
                  className=" border-b border-[#f9a826] appearance-none bg-main rounded w-full py-2 px-7 leading-tight focus:outline-none focus:shadow-outline "
                  type="text"

                  /**
                   * Validation and localstorage hooks
                   * implemented together since the inputs are 
                   * first validated and then stored 
                   */

                  onChange={(e) => {
                    name.onChange(e)
                    setNames(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                {name.error ? (
                  <p className="text-error text-sm font-bold">{name.error}</p>
                ) : (
                  <p className="text-sm font-bold text-success">{name.valid}</p>
                )}
              </label>
            </div>
            <br />
            <div class="mb-2">
              <label className="font-bold inline-block text-left w-[20rem]">
                Email:
                <input
                  className=" border-b border-[#f9a826] appearance-none bg-main rounded w-full py-2 px-7 leading-tight focus:outline-none focus:shadow-outline "
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
            <div class="mb-2 ">
              <label
                htmlFor="password"
                className="font-bold inline-block text-left w-[20rem]"
              >
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
            </div>
            <br />

            <button
              className="bg-secondary shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] hover:bg-white font-bold px-8 py-4 rounded-full "
              type="submit"
              form="signUp"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
