import React from 'react'
import { useParams } from 'react-router'
import Sidebar from "./Sidebar"
import Home from "../Job/index"

function index() {
    const { field } = useParams();
    return (
        <div className="h-screen overflow-clip flex bg-white w-screen ">
            <Sidebar />
            <div className='w-full'>
                {field === "1" && <Home />}

            </div>
        </div>
    )
}

export default index