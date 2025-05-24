import React, { useState } from "react";

const Login = () => {
  const [loginstate, setLoginState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="min-h-[70vh] flex items-center">
      <div className="flex flex-col gap-2.5 m-auto items-start p-8 min-w-[22rem] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold text-gray-800">
          {loginstate === "Sign Up" ? "Create an Account" : "Login"}{" "}
        </p>

        <p>
          Please {loginstate === "Sign Up" ? "sign up " : "login "}
          to book an Appointment
        </p>
        {loginstate === "Sign Up" && (
          <div className="mt-2 flex flex-col w-full">
            <label htmlFor="fullname">Full Name</label>
            <input
              className="border border-zinc-300 rounded p-2 mt-1 focus:outline-none"
              id="fullname"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div className="mt-4 flex flex-col  w-full">
          <label htmlFor="email">Email</label>
          <input
            className="border border-zinc-300 rounded p-2 mt-1 focus:outline-none"
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Enter your email address"
          />
        </div>
        <div className="mt-2 flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input
            className="border border-zinc-300 rounded p-2 mt-1 focus:outline-none"
            id="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={name}
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-primary w-full text-white rounded-md text-base py-2 hover:bg-deep transition-all duration-300">
          {loginstate === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {loginstate === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setLoginState("Login")}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setLoginState("Sign Up")}
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
