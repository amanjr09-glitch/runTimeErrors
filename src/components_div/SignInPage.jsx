import React from 'react'
import InputHolder from '.././UI/Input.jsx'
import { AiFillGoogleCircle } from "react-icons/ai";

function SignIn(){
    return (
        <div className=' flex items-center justify-center h-[100vh] bg-gray-200 backdrop-blur-3xl'>
            <div className='p-10 bg-white w-[25rem] rounded-md shadow-lg flex flex-col items-center justify-center space-y-4'>
                <div className=' font-semibold text-2xl text-left mb-4'>Sign In</div>
                <div className='w-full my-6'>
                    <InputHolder title={"Email"}/>
                    <InputHolder title={"Password"}/>
                </div>
                <div className=' w-full flex justify-end'>
                    <div className='border-theme text-gray-100 rounded-md bg-theme text-xs uppercase px-4 py-2'>Sign In</div>
                </div>
                <hr />
                {/* <div>
                    Other sign In options
                    <div className=' text-3xl flex justify-center my-2'><AiFillGoogleCircle/></div>
                </div> */}
            </div>
        </div>
    )
}

export default SignIn