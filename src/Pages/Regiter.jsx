import React, { useState } from "react";
import COVER_IMAGE from "../../src/assets/t1.png";
//import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
}

function handleSubmit(event) {
  event.preventDefault();
  // You can add your axios post request here
  // Example: axios.post('/api/register', { firstName, lastName, email, password })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  console.log("Form submitted");
}

function Regiter() {
  return (
    <div className="flex flex-col md:flex-row h-screen pt-20
    ">
      {/* Image Panel */}
      <div className="md:w-1/2 overflow-hidden">
        <img
          src={COVER_IMAGE}
          alt="Cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Regiter Form Panel */}
      <div className="md:w-1/2 bg-gray-100 flex justify-center items-center p-4 ">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-semibold text-info mb-2">Welcome</h1>
          <p className="text-base mb-2">Register your account.</p>

          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info font-medium">
                  First Name
                </span>
              </label>

              <input
                type="text"
                placeholder="First Name"
                className=" form-control input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div class="form-control">
              <label class="label ">
                <span class="label-text text-info font-medium">Last Name</span>
              </label>

              <input
                type="LastName"
                placeholder="Last Name"
                class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-info font-medium">Email</span>
              </label>

              <input
                type="Email"
                placeholder="Email"
                class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-info font-medium">Password</span>
              </label>

              <input
                type="Password"
                placeholder="Password"
                class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-info font-medium">
                  Confirm Password
                </span>
              </label>

              <input
                type="ConfirmPassword"
                placeholder="Confirm Password"
                class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item"
                autoComplete="off"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center ">
              <input
                type="checkbox"
                id="terms-checkbox"
                className="h-4 w-4 mr-2 cursor-pointer "
                required
              />
              <label
                htmlFor="terms-checkbox"
                className="text-sm text-neutral-content cursor-pointer py-2"
              >
                I agree to the{" "}
                <a href="#" className="text-info">
                  terms of service
                </a>{" "}
                and{" "}
                <a href="#" className="text-info">
                  privacy policy
                </a>
              </label>
            </div>

            <div className="w-full flex-col my-4 py-2">
              <button className="w-full text-white my-2 font-semibold bg-info rounded-md p-4 texr-center flex items-center justify-center cursor-pointer">
                Create on account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regiter;
