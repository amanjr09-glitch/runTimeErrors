import react from 'react'
import AddressCard from './AddressCard'

function Address(){

    const arr = [1,1,1,1,1,1];

    return(
        <div className=' w-full flex items-center justify-center p-5'>
            <div className=' w-fit'>
                <div className=' grid grid-cols-4 gap-5'>
                    <div className=' w-[300px] h-[240px] p-5 flex border rounded-lg flex-col items-center justify-center'>
                        <div className=' w-fit h-fit flex flex-col items-center justify-center'>
                            <div className='text-white w-fit h-fit px-[10px] pb-1 rounded-full text-3xl font-semibold bg-red-700'>+</div>
                            <div className=' w-fit h-fit p-2 text-2xl font-semibold'>Add Address</div>
                        </div>
                    </div>
                    {
                        arr.map((item, index)=>{
                            return <AddressCard key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Address