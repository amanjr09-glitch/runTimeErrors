import react from 'react'

function AddressCard(){
    return(
        <div className=' w-[300px] h-[240px] flex-col p-5 space-y-2 border rounded-lg'>
            <div className=' text-lg font-semibold'>Address Name</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem alias labore temporibus reiciendis magni iste quidem, fugit tenetur obcaecati incidunt?</div>
            <div className=' flex justify-between'>
                <div className=' text-red-700'>Edit</div>
                <div className=' text-gray-300'>Delete</div>
            </div>
        </div>
    )
}

export default AddressCard