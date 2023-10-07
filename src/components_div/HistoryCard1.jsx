import react from 'react'
import img from './Profile.jpeg'

function HistoryCard(){
    return(
        <div className=' flex p-5 space-y-2 border rounded-lg m-5 justify-between bg-white shadow-sm'>
            <div className=' w-[150px] h-[150px] rounded-full overflow-hidden border'>
                <img src={img} alt="profile photo" className=' w-[180px] h-[180px] object-cover' />
            </div>
            <div className=' flex flex-col items-center justify-center w-2/3'>
                <div className='flex justify-between w-full items-center text-2xl font-semibold pb-4 px-40'>
                    <div className=''>Job Title</div>
                    <div className=''>Job Type</div>
                    <div className=' text-base'>Is delivery included</div>
                </div>
                <hr className='border border-slate-200 w-full'/>
                <div className=' flex flex-col justify-between items-center pt-2'>
                    <div className=' text-2xl font-semibold gap-1'>
                        Job description
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusamus tempora voluptatem ullam illo! Nihil illum recusandae doloribus, distinctio debitis eos provident quae. Quae, neque mollitia omnis molestias rem quis accusantium fugiat aliquam dolorem, voluptates, qui sunt expedita consequatur! Nostrum.
                    </div>
                </div>
            </div>
            <div className=' text-3xl font-semibold align-middle flex flex-col justify-center'>
                <div className=''>Bounty Money</div>
            </div>
        </div>
    )
}

export default HistoryCard
