import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 border rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-black'>
          Sign Up <span className='text-blue-500'>Albums</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full name</span>
            </label>
            <input type='text' placeholder='Input name' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Input username' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm password</span>
            </label>
            <input type='password' className='w-full input input-bordered h-10'></input>
          </div>

          <a className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block' href='#'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign up</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup;