import React, { useState } from "react";
import LoginCard from "../../components/Cards/LoginCard";

const Login = () => {
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", payload.username);
    localStorage.setItem("password", payload.password);
    window.location.replace("/")
  };

  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-gray-200/40">
      <LoginCard title={"Login"}>
        <div className="grid grid-col-2"></div>
        <div>
          <h4 className="font-semibold text-2xl">Sign In</h4>
          <p className="text-gray-400">A username and password away to go.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <span>Username</span>
            <input
              id="username"
              name="username"
              type="text"
              value={payload.username}
              onChange={(e) =>
                setPayload({ ...payload, username: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 focus:border focus:border-indigo-400
            focus:shadow-md focus:shadow-indigo-200 px-4 py-2
            outline-none is-dirty peer"
              required
            />
            <div className="peer-[.is-dirty]:peer-required:block hidden">
              This field is required.
            </div>
          </div>
          <div>
            <span>Password</span>
            <input
              id="password"
              name="password"
              type="password"
              value={payload.password}
              onChange={(e) =>
                setPayload({ ...payload, password: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 focus:border focus:border-indigo-400
              focus:shadow-md focus:shadow-indigo-200 px-4 py-2
              outline-none is-dirty peer"
            />
            <div className="peer-[.is-dirty]:peer-required:block hidden">
              This field is required.
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-1">
              <input type="checkbox" className="accent-purple-300 bg-white" />
              <p>Remember Me</p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-300 to-purple-700 rounded-md py-2 px-4 font-medium text-white"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex w-full justify-center space-x-1 pb-4">
          <p>Don't have an account?</p>
          <a className="text-indigo-600 font-medium" href="/login">
            Sign up
          </a>
        </div>
      </LoginCard>
    </div>
  );
};

export default Login;
