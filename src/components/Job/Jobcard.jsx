import React, { useState } from 'react'
import Modal from '../../UI/Modal'

function Jobcard() {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false)
    }
    return (
        <>
            <Modal open={modal} closeModal={closeModal}>
                <div className='bg-white w-[40rem] p-4'>
                    <div className='uppercase text-xl text-gray-300 mb-1'>Job Info</div>
                    <hr />
                    <div className='flex flex-row font-semibold text-gray-400 mt-2'>JOB TITLE : saman lelo</div>
                    <div className='flex flex-row font-semibold text-gray-400 mt-2'>JOB TYPE : saman lelo</div>
                    <div className='flex flex-row font-semibold text-gray-400 mt-2'>ADDRESS: khara punjab 140301</div>
                    <div className='flex flex-row font-semibold text-gray-400 mt-2'>WEIGHT: 40KG &nbsp; LENGTH: 10cm &nbsp; HEIGHT: 10 cm  &nbsp; BREADTH: 5cm</div>
                    <div className='flex flex-row font-semibold text-gray-400 mt-2 mb-1'>JOB DESCRIPTION</div>
                    <div className='text-s'>
                        The Indian rupee sign ⟨₹⟩ is the currency symbol for the Indian rupee (ISO 4217: INR), the official currency of India.
                        Designed by D. Udaya Kumar, it was presented to the public by the Government of India on 15 July 2010,[1] following its selection through an open competition among Indian residents.
                        [2][3] Before its adoption, the most commonly used symbols for the rupee were ⟨Rs⟩, ⟨Re⟩ or, in texts in Indian languages, an appropriate abbreviation in the language used.
                        The design is based on the Devanagari letter ⟨र⟩ (ra) with a double horizontal line at the top and the Latin capital letter ⟨R⟩ without its vertical bar.[4]
                    </div>
                    <div className=' flex justify-end items-center'>
                        <div className='text-xl text-red-800 font-bold absolute left-10'>₹{1000}</div>
                        <button className='bg-theme text-white rounded-none mt-2 p-2 font-semibold uppercase'>Accept </button>
                    </div>
                </div>  
            </Modal>
            <div className='p-4'>
                <div className='w-[20rem] bg-gray-200 p-4'>
                    <img className="" src="https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-slideshow-1660779038818.jpg?crop=16%3A9&width=888&dpr=2" alt="" />
                    <hr />
                    <div class="py-1">
                        <span className='text-gray-400'>Suraj Kumar</span>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    <div className='flex flex-row gap-2 justify-end'>
                        <div className='text-xl text-red-800 font-bold mr-14'>₹{1000}</div>
                        <button
                            onClick={openModal}
                            className='bg-theme text-white uppercase font-semibold rounded-none text-xs'>Details</button>
                        <button className='bg-theme text-white uppercase font-semibold rounded-none text-xs'>Query</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Jobcard