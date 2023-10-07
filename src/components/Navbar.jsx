import React, { useEffect, useState } from 'react'
import DropDown from '../UI/DropDown'
import InputHolder from "../UI/Input"
import { cities } from '../data/cities';
import Modal from "../UI/Modal"
import { Checkbox } from 'rsuite';
// import { Textarea } from '@material-tailwind/react';
import TextArea from '../UI/TextArea';

function Navbar() {
  const [suggestions, setSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [modal, setModal] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobType: '',
    address: '',
    isDelivery: false,
    email: '',
    phoneNumber: '',
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
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


  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };


  const jobType = [
    { name: "Delivery" },
    { name: "Ride" },
    { name: "Gardening" },
    { name: "Coaching" },
    { name: "Households" },
    { name: "Fieldwork" },
    { name: "Pet Care" },
    { name: "Baby Sitter" },
    { name: "Driver" },
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
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Enter job title"
                required
              />
            </div>
            <div className="mb-4">
              {/* <Textarea
                type="text"
                title={"Job Title"}
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Enter job title"
                required */}
              {/* /> */}
            </div>


            <div className="mb-4">
              <InputHolder
                type="text"
                title={"Job Type"}
                value={formData.jobType}
                onChange={handleChange}
                placeholder="Enter job Type"
                required
              />
            </div>

            <div className="mb-4">
              <InputHolder
                type="text"
                title={"Address"}
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
                required
              />
            </div>
            <div className="mb-4">
              <InputHolder
                type={"file"}
                title={"Upload Picture"}
                value={formData.address}
                onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Phone Number"}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Weight"}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Weight"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Height"}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Height"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Length"}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Length"
                    required
                  />
                </div>
                <div className="mb-4">
                  <InputHolder
                    type="text"
                    title={"Breadth"}
                    value={formData.address}
                    onChange={handleChange}
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