import React from 'react'

import profileImage from '../../assets/Image/profilepic.jpg'

function JobCard() {

    const cardInfo=[
        {
            name : "Suraj Kumar",
            jobType : "Delivery",
            location : 
                {
                    from : "Morden Valley",
                    to : "Aura",
                },
            disp : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos distinctio maxime quae itaque cum rem labore blanditiis nemo consequatur',            
        }
    ]

    return (
        <div>

            <div className="cardContainer w-96 px-5 border shadow-md">
                <div className="row1 flex justify-between text-base my-3">
                    <div className="dp">
                        <img className='w-[3rem] rounded-full border p-2' src={profileImage} alt="Dp_ofjob" />
                    </div>
                    <div className="nameAndJobType">
                        <h3>Name : Suraj Kumar</h3>
                        <h5>Job type : Delivery</h5>
                    </div>
                </div>

                <div className="row4 mt-4">
                    <h1>Location</h1>
                    <div className="locationAnd flex text-sm justify-between">
                        <div className="from">
                            <h1 >From</h1>
                            <span> Kharar </span>
                        </div>
                        <div className="To">
                            <span >To</span>
                            <span> Chandigarh University </span>
                        </div>
                    </div>
                </div>
                <div className="row2 text-base my-8">
                    <div >Description : </div>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos distinctio maxime quae itaque cum rem labore blanditiis nemo consequatur.</p>
                </div>


                <div className="row3 flex justify-between my-4">
                    <button className='border border-green-500 px-3 py-1 hover:bg-gray-300 hover:text-white'>Later</button>
                    <button className='border border-green-500 px-3 py-1 hover:bg-gray-300 hover:text-white'>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default JobCard