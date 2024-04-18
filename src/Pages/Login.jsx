import React, { useState } from "react";
import COVER_IMAGE from "../../src/assets/t1.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event){
    event.preventDegault();
    axios.post('',{email,password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  return (
    <div className="flex flex-col md:flex-row h-screen pt-20">
      {/* Image Panel */}
      <div className="md:w-1/2 overflow-hidden">
        <img
          src={COVER_IMAGE}
          alt="Cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Login Form Panel */}
      <div className="md:w-1/2 bg-gray-100 flex justify-center items-center p-8  ">
        <div className="w-full max-w-md ">
          <h1 className="text-4xl font-semibold text-info mb-2  ">Login</h1>
          <p className="text-base mb-2 ">
            {" "}
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit}
          className="space-y-6" >
            <div>
              <label class="label">
                <span class="label-text text-info font-medium ">Email</span>
              </label>

              <label
                htmlFor="email"
                class="input input-bordered flex items-center gap-2 w-full text-black py-5 px-5 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>

                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  className='form-control'
                  onChange={e=>setEmail(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label class="label ">
                <span class="label-text text-info font-medium">Password</span>
              </label>

              <label
                htmlFor="password"
                class="input input-bordered flex items-center gap-2 w-full text-black py-5 px-5 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  className='form-control'
                  onChange={e=>setPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 " />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm  text-neutral-content bg-[#f5f5f5]"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-info hover:text-neutral"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-info hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-info-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2  text-neutral-content bg-[#f5f5f5]">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                type="button"
                className="w-full py-2 px-4 border border-info/40 bg-white  border-info rounded-md flex items-center justify-center text-sm font-medium text-info  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-info-200"
              >
                <svg
                  className="h-5 w-5 text-info-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.116 4.884a3.5 3.5 0 1 1 4.95 4.95l-4.95-4.95zM10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">Google</span>
              </button>
            </div>
          </div>

          <p className="mt-2 text-center text-sm  text-neutral-content bg-[#f5f5f5]">
            Don't have an account?{" "}
            <Link>
              <a href="#" className="font-medium text-info hover:text-neutral">
                Sign up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
