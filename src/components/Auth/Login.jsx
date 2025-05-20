import React from "react";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello form is submitted");
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
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-gray-400"
            type="email"
            placeholder="enter your eamil"
          />
          <input
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
