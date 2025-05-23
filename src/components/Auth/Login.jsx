import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-2xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value = {email}
          onChange={(e) =>{
            setEmail(e.target.value)
          }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400"
            type="email"
            placeholder="enter your eamil"
          />
          <input
           value = {password}
          onChange={(e) =>{
            setPassword(e.target.value)
          }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400 mt-4"
            type="password"
            placeholder="enter your password"
          />
          <button className="text-white outline-none  border-none bg-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-white mt-4">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
