import React from 'react'
import { useParams } from 'react-router'
import Sidebar from "./Sidebar"
import Home from "../Job/index"
import OrderHistory from '../User/Order/History';
import Profile from '../User/ProfilePage';
import CurrentJob from '../Job/CurrentJob/CurrentJob';
import Address from '../User/Address/Address';

function index() {
    const { field } = useParams();
    return (
        <div className="h-screen overflow-clip flex bg-white w-screen ">
            <Sidebar />
            <div className='w-full'>
                {field === "1" && <Home />}
                {field === "2" && <OrderHistory field={"Order History"}/>}
                {field === "3" && <CurrentJob/>}
                {field === "4" && <Profile/>}
                {field === "5" && <Address/>}
            </div>
        </div>
    )
}

export default index