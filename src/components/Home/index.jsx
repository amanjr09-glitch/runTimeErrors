import React from 'react'
import { useParams } from 'react-router'
import Sidebar from "./Sidebar"
import Home from "../Job/index"
import OrderHistory from '../History/HistoryCard2';
import Profile from '../User/ProfilePage';
import CurrentJob from '../Order/HistoryCard2';
import { useAuth  } from '../../context/auth';      
function index() {
    const { field } = useParams();
    // const {
    //     state: { user },
    //   } = useAuth();
    return (
        <div className="h-screen overflow-clip flex bg-white w-screen ">
            <Sidebar />
            <div className='w-full'>
                {field === "1" && <Home />}
                {field === "3" && <OrderHistory />}
                {field === "2" && <Profile/>}
                {field === "4" && <CurrentJob/>}

            </div>
        </div>
    )
}

export default index