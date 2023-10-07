import react from 'react'
import img from "C:/Users/divan/Downloads/Profile.jpeg";

function HistoryCard2(){
    return(
        <div className=' flex p-5 space-y-2 border rounded-lg m-5 justify-between bg-white shadow-sm'>
            <div className=' flex flex-col justify-center'>
                <div className=' w-[100px] h-[100px] rounded-full overflow-hidden border'>
                    <img src={img} alt="profile photo" className=' w-[120px] h-[120px] object-cover' />
                </div>
            </div>
            <div className=' w-2/3 space-y-2'>
                <div className=' font-semibold'>CaraB</div>
                <div className=' font-semibold'>Landing Pages | Unbounce | Wordpress</div>
                <div className=' flex justify-between'>
                    <div><span className='font-semibold'>$125.00</span>/hr</div>
                    <div><span className='font-semibold'>$200k+</span>&nbsp; eranred</div>
                    <div>87% job success</div>
                    <div>Address</div>
                </div>
                <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse itaque eligendi in, asperiores aspernatur explicabo excepturi iure pariatur accusantium?</div>
                <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cum!</div>
            </div>
            <div className=' w-fit space-y-4 flex flex-col justify-center'>
                <div className=' py-1 px-2 bg-theme text-white'>Post Job to Invite</div>
                <div className=' py-1 px-2 text-theme w-full text-center shadow-md border '>Save</div>
            </div>
        </div>
    )
}

export default HistoryCard2
