import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(e){
        handleLogin(email, password)
        setEmail('')
        setPassword('')
        e.preventDefault()
    }
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-green-600 px-4 py-10 bg-zinc-800 rounded-md w-80">
        <h1 className="text-2xl font-semibold text-center mb-10">Login Here</h1>
        <form onSubmit={submitHandler}
        className="flex flex-col items-center justify-center gap-3 ">
          <input
            className="border-2 border-emerald-600 rounded-full py-2 px-4 text-white placeholder:text-grey-400 bg-transparent"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            className="border-2 border-emerald-600 rounded-full py-2 px-4 text-white placeholder:text-grey-400 mt-2 bg-transparent"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <input
            className="bg-green-600 px-8 py-2 rounded-full  mt-5 cursor-pointer"
            type="submit"
            value={"Log in"}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
