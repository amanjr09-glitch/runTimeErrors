import React from 'react'
import profilePic from '../../assets/Image/profilepic.jpg'

function OrderHistory() {
    return (
        <div className='mainJobHistory flex'>
            <div className="col1 profile">
                <img  className='w-[3rem] rounded-full border p-2' src={profilePic} alt="profile picture"/>
            </div>

            <div className="col2">
                <div className="nameofPerson">
                    <h2> Honey</h2>
                </div>
                <div className="jobTitle">
                    <h2>Job Title</h2>
                </div>
                <div className="prizing">
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
                <button className=''>Save</button>
            </div>
        </div>
    )
}

export default OrderHistory