import react from 'react'
import img from '../../User/Profile.jpeg';
import { FaLocationDot } from 'react-icons/fa6';

function HistoryCard2() {
    return (
            <div className=' flex p-2 border m-3 justify-between bg-white shadow-sm '>
                <div className=' flex flex-col justify-center'>
                    <div className=' w-[80px] h-[80px] rounded-full overflow-hidden border'>
                        <img src={img} alt="profile photo" className=' w-[120px] h-[120px] object-cover' />
                    </div>
                </div>
                <div className=' w-2/3 space-y-2'>
                    <div className=' font-semibold text-lg'>CaraB</div>
                    <div className=' font-semibold'>Landing Pages | Unbounce | Wordpress</div>
                    <div className=' flex justify-between'>
                        {/* <div><span className='font-semibold'>$125.00</span>/hr</div> */}
                        <div><span className='font-semibold'>&#8377; 200</span>&nbsp; earned</div>
                        <div>100% Job Successfull</div>
                        <div className='flex items-center'><FaLocationDot /> <span> &nbsp;Mumbai</span></div>
                    </div>
                    <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse itaque eligendi in, asperiores aspernatur explicabo excepturi iure pariatur accusantium?</div>
                    <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cum!</div>
                </div>
                <div className=' w-fit flex flex-col justify-center'>
                    {/* <div className=' py-1 px-2 bg-theme text-white'>Post Job to Invite</div> */}
                    <button className='bg-theme text-white uppercase p-2 px-3 font-semibold rounded-none text-xs mr-10'>Save</button>
                </div>
            </div>
    )
}

export default HistoryCard2
