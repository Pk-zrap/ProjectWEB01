
import React from 'react'
import COVER_IMAGE from '../../src/assets/t1.png';

function Login() {
  return (

    <div className="w-full h-screen flex justify-center items-start">
      <div className='relative w-full h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className=' text-4x1 text-white font-bold my-4'></h1>
          <p className='text-xl  text-white font-normal'></p>
        </div>
        <img src={COVER_IMAGE} className="w-[887px] h-[825px]" />
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-40 justify-between items-center'>
        <h1 className='w-[500px] mx-auto text-xl text-[#060606] font-semibold'></h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-4xl font-semibold mb-2 text-info'> Login</h3>
            <p className='text-base mb-2 '> Welcome back! Please enter your details.</p>
          </div>

          <div className='w-full flex flex-col'>
            <form>


              <div class="form-control">
                <label class="label">
                  <span class="label-text text-info font-medium">Email</span>
                </label>

                <label class="input input-bordered flex items-center gap-2 w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                  <input type="text"
                    class="grow"
                    placeholder="Email" required />
                </label>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text text-info font-medium">Password</span>
                </label>

                <label class="input input-bordered flex items-center gap-2 w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                  <input type="text"
                    class="grow"
                    placeholder="Password" required />
                </label>
              </div>
            </form>



            <div className='w-full flex justify-between my-3'>
              <div className='w-full flex'>
                <input type="checkbox" className="w-4 h-4 mr-2" />

                <p className='text-sm'>Remember Me</p>
              </div>
              <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-info'>Forgot Password ?</p>
            </div>

            <div className='w-full flex-col my-1'>
              <button className='w-full text-white my-2 font-semibold bg-info rounded-md p-4 texr-center flex items-center justify-center cursor-pointer' >
                Log in
              </button>
            </div>

          </div>
        </div>

        <div className='w-full flex items-center justify-center relative py-3'>
          <div className='w-full h-[0.1px] bg-neutral-content'></div>
          <p className='text-lg  absolute text-neutral-content bg-[#f5f5f5]'>
            | or | </p>
        </div>

        <button className='w-full text-info my-2 font-semibold border-info/40 bg-white border border-info rounded-md p-4 texr-center flex items-center justify-center cursor-pointer'>
          Sign In With Google
        </button>

        <div className='w-full items-center justify-center my-2'>
          <p className='text-sm font-normal text-[#060606]'>Dont have a account ? <span className='font-semibold underline underline-offset-2 cursor-pointer text-info'>Sign up for free</span></p>
        </div>

      </div >

    </div>
  )
}

export default Login

