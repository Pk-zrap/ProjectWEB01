import React from 'react'

function Regiter() {
    return (

  <div className="w-full h-screen flex justify-center items-start">
      <div className='relative w-full h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className=' text-4x1 text-white font-bold my-4'></h1>
          <p className='text-xl  text-white font-normal'></p>
        </div>
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-40 justify-between items-center'>
        <h1 className='w-[500px] mx-auto text-xl text-[#060606] font-semibold'></h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-4xl font-semibold mb-2 text-info'> Login</h3>
            <p className='text-base mb-2 '> Welcome back! Please enter your details.</p>
          </div>

          <div className='w-full flex flex-col'>
            <input
              type=" email"
              placeholder="Email"
              className='w-full text-black py-2 my-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none' />

            <input
              type="Password"
              placeholder="Password"
              className='w-full text-black py-2 my-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none' />
          </div>

          <div className='w-full flex justify-between'>
            <div className='w-full flex'>
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className='text-sm'>Remember Me</p>
            </div>
            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-info'>Forgot Password ?</p>
          </div>

        </div>
        <div className='w-full flex-col my-4'>
          <button className='w-full text-white my-2 font-semibold bg-info rounded-md p-4 texr-center flex items-center justify-center cursor-pointer' >
            Log in
          </button>
          <button className='w-full text-info my-2 font-semibold bg-white border border-info rounded-md p-4 texr-center flex items-center justify-center cursor-pointer'>
            Register
          </button>
        </div>

        <div className='w-full flex items-center justify-center relative py-3'>
          <div className='w-full h-[1px] bg-neutral-content'></div>
          <p className='text-lg  absolute text-neutral-content bg-[#f5f5f5]'>| or | </p>
        </div>

        <div className='w-full text-info my-10 font-semibold bg-white border border-info/40 rounded-md p-4 texr-center flex items-center justify-center cursor-pointer' >
          Sign In With Google
        </div>

        <div className='w-full items-center justify-center'>
          <p className='text-sm font-normal text-[#060606] '>Dont have a account? <span className='font-semibold underline underline-offset-2 cursor-pointer text-info'>Sign up for free</span></p>
        </div>

      </div >

    </div>
    )
}

export default Regiter