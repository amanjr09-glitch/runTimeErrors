import React from 'react'
import profilePic from '../../assets/Image/profilepic.jpg'

function OrderHistory() {
    return (
        <div className='mainJobHistory flex border items-center'>
            <div className="col1 profile">
                <img  className='w-[3rem] rounded-full border p-2' src={profilePic} alt="profile picture"/>
            </div>

            <div className="col2">
                <div className="nameofPerson">
                    <h2> Honey</h2>
                </div>
                <div className="jobTitle">
                    <h2>Job Title : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, aspernatur.</h2>
                </div>
                <div className="prizing flex">
                    <div className="earnfromJob">
                        <span>Rs.100 earned</span> 
                    </div>

                    <div className="jobSucess">
                        <span>100% Complete</span>
                    </div>

                    <div className="jobSucess">
                        <span> Mumbai</span>
                    </div>
                </div>
            </div>

            <div className="col3">
                <button className=' border-2 border-green-700 px-2 py-1 text-green-700'>Save</button>
            </div>
        </div>
    )
}

export default OrderHistory