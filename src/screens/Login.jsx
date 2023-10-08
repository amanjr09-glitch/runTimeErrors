import React, { useState } from 'react';
import InputHolder from "../UI/Input";
import { useAuth } from "../context/auth";
import { AiFillGoogleCircle } from "react-icons/ai";
import { database } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    signInWithEmailAndPassword(database, email, password).then(data => {
      console.log(data);
      console.log("Successfully logged in");
      navigate('/1');
    });
  };

  return (
    <div className='flex items-center justify-center h-[100vh] bg-gray-200 backdrop-blur-3xl'>
      <div className='p-10 bg-white w-[25rem] shadow-lg flex flex-col items-center justify-center space-y-4'>
        <div className='font-semibold text-2xl text-left mb-4'>Sign In</div>
        <div className='w-full my-6'>
          <InputHolder title={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputHolder title={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='w-full flex justify-end'>
          <button
            onClick={handleSubmit}
            className='border-theme text-gray-100 bg-theme text-xs uppercase px-4 py-2 font-bold'>Sign In</button>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Login;
