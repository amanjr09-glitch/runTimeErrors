import React, { useEffect, useState } from 'react'
import DropDown from '../UI/DropDown'
import InputHolder from "../UI/Input"
import { cities } from '../data/cities';
import Modal from "../UI/Modal"
import { Checkbox } from 'rsuite';
// import { Textarea } from '@material-tailwind/react';
import TextArea from '../UI/TextArea';
import { createDB, readData, syncUpload, update, writeData } from "../api/fb"
import { v4 as uuidv4 } from 'uuid';



function Navbar() {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [modal, setModal] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const [fileData, setFileData] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobType: '',
    address: '',
    isDelivery: false,
    email: '',
    phoneNumber: '',
    weight: '', 
    length: '',
    breadth: '',
    height: '',
    price:''
  });

  const handleFileChange = (file) => {
    // Handle the file change and update the fileData state
    // Assuming fileData is a URL or relevant file data
    setFileData(file);
  };

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const handleJobTypeSelect = (value) => {
    // Update the jobType in formData when selected from the dropdown
    handleChange('jobType', value);
  };
  // console.log(jobId);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobId = uuidv4(); // Generate a new UUID for the job
    const {
      jobTitle,
      jobType,
      jobDescription,
      address,
      email,
      phoneNumber,
      weight,
      length,
      breadth,
      height,
      price,
    } = formData;

    const jobData = {
      id: jobId,  // Use the newly generated UUID as the job ID
      jobTitle,
      jobType,
      jobDescription,
      address,
      email,
      phoneNumber,
      weight,
      length,
      breadth,
      height,
      price,
      fileData: fileData || null,
    };
    const jobsid = uuidv4();
    try {
      const downloadURL = await syncUpload(fileData, `jobs/${jobsid}/${jobId}`);
      jobData.fileURL = downloadURL;
      await writeData(`jobs/${jobsid}`, jobData);
      console.log('Form data submitted:', jobData);
      alert('Form data submitted successfully!');
    } catch (error) {
      console.error('Error writing form data:', error);
      alert('An error occurred while writing form data.');
    }
  };

  const handleCheckboxChange = () => {
    setIsDelivery(!isDelivery);
  };

  const handleInputChange = (input) => {
    if (input.trim() !== '') {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else {
      setSuggestions([]);
    }
    setInputValue(input);  // Update the input value
  };

  const handleSuggestionClick = (city) => {
    setInputValue(city);
    setSuggestions([]);
  };



  // console.log(res);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };


  const jobType = [
    { name: "Pet Care" },
    { name: "Ride" },
    { name: "Gardening" },
    { name: "Coaching" },
    { name: "Households" },
    { name: "Fieldwork" },
    { name: "Baby Sitter" },
    { name: "Driver" },
    { name: "Delivery" },
  ]

  const range = [
    { name: "0-1 km" },
    { name: "1-5 km " },
    { name: "5-10 km" },
    { name: "10-20 km" },
    { name: "20-40 km" },
    { name: "40-100 km" },
  ]
  const bounty = [
    { name: "Under ₹50" },
    { name: "Under ₹100 " },
    { name: "Under ₹200" },
    { name: "Under ₹300" },
    { name: "Under ₹400" },
    { name: "Under ₹500" },
  ]

  return (
    <>
      <Modal open={modal} closeModal={closeModal}>
        <div className="w-[60rem] rounded-none p-6 bg-white max-h-[40rem] overflow-y-auto">
          <div className='text-2xl font-bold uppercase mb-1 text-gray-300'>Create a Job</div>
          <hr />
          <form onSubmit={handleSubmit} className='mt-5'>
            <div className="mb-4">
              <InputHolder
                type="text"
                title={"Job Title"}
                defaultValue={formData.jobTitle}
                onChange={(e) => handleChange('jobTitle', e.target.value)}
                placeholder="Enter job title"
                required
              />
            </div>
            <div className="mb-4">
              <InputHolder
                type="text"
                title={"Job Description"}
                defaultValue={formData.jobDescription}
                onChange={(e)=>handleChange('jobDescription', e.target.value)}
                placeholder="Enter job title"
                required
              />
            </div>
            <div className="mb-4">
              <DropDown
                title="Job Type"
                data={jobType}
                defaultValue=""
                onChange={handleJobTypeSelect}
              />
            </div>

            <div className="mb-4">
              <InputHolder
                type="text"
                title={"Address"}
                defaultValue={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Enter Address"
                required
              />
            </div>
            <div className="mb-4">
              <InputHolder
                type={"file"}
                title={"Upload Picture"}
                defaultValue=""
                onChange={(e) => handleFileChange(e.target.files[0])}
                required
              />
            </div>
            <div className="mb-4">
            <InputHolder
                type="text"
                title={"Price"}
                defaultValue={formData.price}
                onChange={(e) => handleChange('price', e.target.value)}
                placeholder="Enter Price"
                required
              />
            </div>
            <div className="mb-4">
              <div className='flex flex-row align items-center'>
                <Checkbox
                  checked={isDelivery}
                  onChange={handleCheckboxChange}
                />
                Is it a delivery job?
              </div>
            </div>

            {isDelivery && (
              <>
                <div className="mb-4">
                  <InputHolder
                    type="Email"
                    title={"Email"}
                    defaultValue={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Phone Number"}
                    defaultValue={formData.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    placeholder="Enter Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Weight"}
                    defaultValue={formData.weight}
                    onChange={(e) => handleChange('weight', e.target.value)}
                    placeholder="Enter Weight"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Height"}
                    defaultValue={formData.height}
                    onChange={(e) => handleChange('height', e.target.value)}
                    placeholder="Enter Height"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Length"}
                    defaultValue={formData.length}
                    onChange={(e) => handleChange('length', e.target.value)}
                    placeholder="Enter Length"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Breadth"}
                    defaultValue={formData.breadth}
                    onChange={(e) => handleChange('breadth', e.target.value)}
                    placeholder="Enter Breadth "
                    required
                  />
                </div>

              </>
            )}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="border-2 border-pallete-darkblue text-xs uppercase rounded-none text-pallete-darkblue font-semibold py-2 px-2 hover:text-white hover:bg-pallete-darkblue"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="flex bg-gray-100 dark:bg-gray-600 justify-between items-center gap-2 py-1 dark:border-gray-400 border-b-2 px-4 z-10 ">
        <div className="w-full flex flex-row gap-2">
          <DropDown
            title=""
            data={jobType}
            defaultValue={"Job Type"}
          />
          <DropDown
            title=""
            data={range}
            defaultValue={"Job Type"}
          />
          <DropDown
            title=""
            data={bounty}
            defaultValue={"Job Type"}
          />
          <InputHolder
            className='h-8'
            type='search'
            placeholder='Search Your Location'
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)} />
          {suggestions.length > 0 && (
            <ul className=" absolute mt-8 right-12 w-[25rem] bg-white">
              {suggestions.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => handleSuggestionClick(city)}  // Handle suggestion click
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className='text-xs bg-inherit border-2 border-theme rounded-none text-theme p-2  py-1 font-semibold uppercase hover:bg-theme hover:text-gray-100'>
          Save
        </button>
      </div>
      <div className='w-full flex flex-row'>
        <div className='text-2xl p-4 uppercase font-bold'>Latest Jobs</div>
        <button
          onClick={openModal}
          className='text-xs bg-inherit border-2  mt-5 absolute right-5 p-4 py-2 border-pallete-darkgreen rounded-none text-pallete-darkgreen font-semibold uppercase hover:bg-pallete-darkgreen hover:text-gray-100'>
          Create a job
        </button>
      </div>
    </>
  )
}
export default Navbar   