import React, { useState } from 'react'

const Login = () => {
  const [currentState, setcurrentState] = useState("Login");

  const onSubmitHandler=(e)=>{
   e.preventDefult();

  }
  return (
    <form onSubmit={onSubmitHandler}>

      <div className='flex flex-col items-center justify-center text-center mx-auto my-20 w-full sm:max-w-96'>

      <div className=' inline-flex items-center gap-2 mb-8 text-center'>
        <h3 className='font-bold text-xl text-gray-900 '>{currentState}
        </h3>
        <hr className="w-8 border-none h-[1.5px] bg-gray-700 " />
      </div>



      <div className=' flex flex-col w-full gap-4 '>
        {currentState==="Login"? "":<input type="text" className='border border-gray-300 rounded shadow px-3 py-2'placeholder='Enter your name' />}
        <input type="email" className='border border-gray-300 rounded shadow px-3 py-2' placeholder='Enter your email'/>

        <input type="password" className='border border-gray-300 rounded shadow px-3 py-2' placeholder='Enter password' />

        {
          currentState==="Login"? "":<input type="password" className='border border-gray-300 rounded shadow px-3 py-2' placeholder='Confirm password' />
        } 
      </div>
      <div className='flex justify-between items-center m-2 w-full'>
        <p className='cursor-pointer text-sm text-gray-500 hover:text-gray-900'>Forget Password ?</p>
        {
          currentState==="Login"?
          <p onClick={()=>setcurrentState("Sign Up")} className='cursor-pointer text-sm  text-gray-500 hover:text-gray-900'>Create account</p>
          :
          <p onClick={()=>setcurrentState("Login")} className='cursor-pointer text-sm  text-gray-500 hover:text-gray-900' >
            Login
          </p>
        }
      </div>

      <button className='bg-black text-white px-20 py-2 rounded-xl '>
        {
          currentState
        }
      </button>

    </div>

    </form>
    
  )
}

export default Login
