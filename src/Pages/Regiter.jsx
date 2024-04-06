import React from 'react'
import COVER_IMAGE from '../../src/assets/t1.png';


function Regiter() {
  return (

    <div className="w-full h-screen flex justify-center items-start">
      <div className='relative w-full h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className=' text-4x1 text-white font-bold my-4'></h1>
          <p className='text-xl  text-white font-normal'></p>
        </div>
        <img src={COVER_IMAGE} className="w-[887px] h-[825px]" />

      </div>

      <div className='w-1/2 h-[825px] bg-[#f5f5f5] flex flex-col p-40 justify-between items-center'>
        <h1 className='w-[500px] mx-auto text-xl text-[#060606] font-semibold'></h1>

        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-4xl font-semibold mb-2 text-info'> Welcome </h3>
            <p className='text-base mb-2 '>Register your account .</p>
          </div>

          <div className='w-full flex flex-col'>
            <form>

              <div class="form-control">
                <label class="label">
                  <span class="label-text text-info font-medium">First Name</span>
                </label>

                <input type="First Name"
                  placeholder="First Name"
                  class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item" required />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text text-info font-medium">Last Name</span>
                </label>

                <input type="Last Name"
                  placeholder="Last Name"
                  class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item" required />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text text-info font-medium">Email</span>
                </label>

                <input type="Email"
                  placeholder="Email"
                  class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item" required />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text text-info font-medium">Password</span>
                </label>

                <input type="Password"
                  placeholder="Password"
                  class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item" required />
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text text-info font-medium">Confirm Password</span>
                </label>

                <input type="Confirm Password"
                  placeholder="Confirm Password"
                  class="input input-bordered w-full text-black py-2 bg-transparent border-b border-neutral-content outline-none focus:outline-none join-item" required />
              </div>
            </form>

          </div>

          <div className='w-full flex justify-between'>
            <div className='w-full flex'>
              <input type="checkbox" className="w-4 h-4 mr- my-2" />
              <p className='text-sm my-2 mx-2 text-info font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>I agree to the terms of service and privacy policy</p>
            </div>
          </div>

        </div>
        <div className='w-full flex-col my-4'>
          <button className='w-full text-white my-2 font-semibold bg-info rounded-md p-4 texr-center flex items-center justify-center cursor-pointer' >
            Create on account
          </button>
        </div>

      </div >

    </div>
  )
}

export default Regiter