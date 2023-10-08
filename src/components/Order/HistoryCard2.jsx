import react, { useEffect, useState } from 'react'
import img from "../User/Profile.jpeg";
import { FaLocationDot } from 'react-icons/fa6';
import { deleteFile, readData } from '../../api/fb';
import { ref, getMetadata } from 'firebase/storage';
import  storage  from '../../firebase';
function HistoryCard2() {
    const [jobsData, setJobsData] = useState(null);
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
    const handleDeleteFile = async (jobData) => {
        try {
          const fileURL = jobData.fileURL;
      
          if (typeof fileURL !== 'string') {
            console.error('File URL is not a string.');
            return;
          }
      
          // Split the URL by '/' to get the file path
          const urlParts = fileURL.split('/');
          const filePath = urlParts.slice(3).join('/'); // Exclude the first 3 parts (https:, empty, and the Firebase storage bucket)
      
          console.log('Checking if file exists at path:', filePath);
      
          // Ensure filePath is not empty before checking existence
          if (filePath.trim() !== '') {
            // Check if the object (file) exists
            const metadata = await getMetadata(ref(storage, filePath));
            
            if (metadata) {
              console.log('File exists. Attempting to delete file at path:', filePath);
              
              // Delete the file
              const isDeleted = await deleteFile(filePath);
              if (isDeleted) {
                console.log('File deleted successfully.');
                // Update the state or perform any necessary actions after successful deletion
              } else {
                console.log('File deletion failed.');
              }
            } else {
              console.error('File does not exist at path:', filePath);
              // Handle the case when the file does not exist
            }
          } else {
            console.error('Invalid file path.');
          }
        } catch (error) {
          console.error('Error deleting file:', error);
        }
      };
      
    return (
        <>
            <div className='text-gray-500 text-xl font-bold p-4'>Open Jobs </div>
            <hr />
            {jobsData && Object.keys(jobsData).map((jobId) => (
                <>
                    < div key={jobId}>
                        <div className=' flex p-2 border m-3 justify-between bg-white '>
                            <div className=' flex flex-col justify-center'>
                                <div className=' w-[80px] h-[80px] rounded-full overflow-hidden border'>
                                    <img src={img} alt="profile photo" className=' w-[120px] h-[120px] object-cover' />
                                </div>
                            </div>
                            <div className=' w-2/3 space-y-2'>
                                <div className=' font-semibold text-lg'>Suraj Kumar</div>
                                <div className=' font-semibold'>{jobsData[jobId].jobDesctiption}</div>
                                <div className=' flex justify-between'>
                                    {/* <div><span className='font-semibold'>$125.00</span>/hr</div> */}
                                    <div><span className='font-semibold'>&#8377; {jobsData[jobId].price}</span>&nbsp;</div>
                                    <div>Finding</div>
                                    <div className='flex items-center'><FaLocationDot /> <span> &nbsp;Mumbai</span></div>
                                </div>
                                <div className='text-sm'>{jobsData[jobId].jobDescription}</div>
                            </div>
                            {/* {console.log(jobsData[jobId])} */}
                            <div className=' w-fit flex flex-col justify-center'>
                                {/* <div className=' py-1 px-2 bg-theme text-white'>Post Job to Invite</div> */}
                                <button
                               onClick={() => handleDeleteFile(jobsData[jobId])}
                                className='bg-theme text-white uppercase p-2 px-3 font-semibold rounded-none text-xs mr-10'>Delete</button>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}

export default HistoryCard2
