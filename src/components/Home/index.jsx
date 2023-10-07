import React from 'react'
import { useParams } from 'react-router'
import Sidebar from "./Sidebar"
import Home from "../Job/index"
import OrderHistory from '../User/Order/History';
import Profile from '../User/ProfilePage';

function index() {
    const { field } = useParams();
    return (
        <div className="h-screen overflow-clip flex bg-white w-screen ">
            <Sidebar />
            <div className='w-full'>
                {field === "1" && <Home />}
                {field === "3" && <OrderHistory/>}
                {field === "2" && <Profile/>}

            </div>
        </div>
    )
}

export default index