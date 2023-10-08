import React, { useEffect, useState } from 'react'
import Modal from '../../UI/Modal'
import { readData } from '../../api/fb';

function Jobcard() {
  const [modal, setModal] = useState(false);
  const [jobsData, setJobsData] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsData = await readData('jobs');
        setJobsData(jobsData);
      } catch (error) {
        console.error('Error reading job data:', error);
      }
    };

    fetchData();
  }, [])


  const openModal = (jobId) => {
    setSelectedJobId(jobId);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false)
  }


  console.log(jobsData);
  return (
    <>
      <Modal open={modal} closeModal={closeModal}>
        <div className='bg-white w-[40rem] p-4'>
          <div className='uppercase text-xl text-gray-300 mb-1'>Job Info</div>
          <hr />
          {selectedJobId && jobsData && (
            <>
              <div className='flex flex-row font-semibold text-gray-400 mt-2'>JOB TITLE : {jobsData[selectedJobId].jobTitle}</div>
              <div className='flex flex-row font-semibold text-gray-400 mt-2'>JOB TYPE : {jobsData[selectedJobId].jobType}</div>
              <div className='flex flex-row font-semibold text-gray-400 mt-2'>ADDRESS: {jobsData[selectedJobId].address}</div>
              <div className='flex flex-row font-semibold text-gray-400 mt-2'>WEIGHT: {jobsData[selectedJobId].weight || 0} &nbsp; LENGTH:{jobsData[selectedJobId].length || 0} &nbsp; HEIGHT: {jobsData[selectedJobId].hieght || 0}  &nbsp; BREADTH: {jobsData[selectedJobId].breadth}</div>
              <div className='flex flex-row font-semibold text-gray-400 mt-2 mb-1'>JOB DESCRIPTION</div>
              <div className='text-s'>
                {jobsData[selectedJobId].jobDescription}
              </div>
              <div className=' flex justify-end items-center'>
                <div className='text-xl text-red-800 font-bold absolute left-10'>₹{jobsData[selectedJobId].price}</div>
                <button className='bg-theme text-white rounded-none mt-2 p-2 font-semibold uppercase'>Accept </button>
              </div>
            </>

          )}
        </div>
      </Modal>
      <div className='p-4 grid grid-cols-1 md:grid-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-screen '>
        {jobsData && Object.keys(jobsData).map((jobId) => (
          <div key={jobId} className='w-[25rem] bg-gray-200 p-4'>
            <img className="w-full object-cover" src={jobsData[jobId].fileURL} alt="" />
            <hr />
            <div className="py-1">
              <span className='text-gray-400'>Suraj Kumar</span>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobsData[jobId].jobTitle}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{jobsData[jobId].job}</p>
              <div className='text-xl text-red-800 font-bold mr-12'>₹{jobsData[jobId].price}</div>
            </div>
            <div className='flex flex-row gap-2 justify-end align items-center'>
              <button
                onClick={() => openModal(jobId)}
                className='bg-theme text-white uppercase p-2 font-semibold rounded-none text-xs'>Details</button>
              <button className='bg-theme text-white uppercase p-2  font-semibold rounded-none text-xs'>Query</button>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Jobcard  