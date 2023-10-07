import { react, useState } from 'react'
import InputHolder from '../../UI/Input.jsx'
import img from './Profile.jpeg';
import { HiEllipsisVertical } from "react-icons/hi2";

function ProfilePage(){

    const [a, setA] = useState(false);
    const [b, setB] = useState(false);

    function fun(){
        return(
            <div className=' border py-1 px-2 w-fit absolute right-0 top-0'>
                Change Profile Photo
            </div>
        )
    }

    return(
        <div className=' flex justify-center h-[100vh]'>
            <div className='flex flex-col items-center justify-center w-[400px]'>
                <div className='w-fit p-5 text-3xl font-semibold'>User Profile</div>
                <div className=' flex py-5 relative top-0'>
                    <div className=' border rounded-full w-[200px] h-[200px] overflow-hidden'>
                        <img src={img} alt="profile image" className=' h-[250px] w-[250px] object-cover' />
                    </div>
                    <div className=' text-black text-3xl cursor-pointer rounded-full w-fit h-fit' onMouseLeave={()=>setB(false)} onMouseEnter={()=>setB(true)}><HiEllipsisVertical/></div>
                    <div className={` border px-2 py-1 absolute top-12 -right-20 cursor-pointer ${ b ? "visible" : "hidden"}`} onMouseLeave={()=>setB(false)} onMouseEnter={()=>setB(true)}>Edit Photo</div>
                </div>
                <InputHolder title={"Name"}/>
                <InputHolder title={"Email"}/>
                <InputHolder title={"Contact"}/>
                <InputHolder title={"Address"}/>
                <div className='py-5 w-full flex justify-end'>
                    <div className=' w-28 cursor-pointer text-center border-theme bg-theme px-4 py-2' onClick={()=>setA(!a)}>{a ? "Save" : "Edit profile"}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
