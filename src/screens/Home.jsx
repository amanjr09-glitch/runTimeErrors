import React from 'react';
// import Login from '../Components/Auth/Login';

// import JobCard from '../Components/Job/JobCard';

import OrderHistory from '../Components/profile/OrderHistory';

function Home() {
  return (
    <div className='text-xl text-black'>
      {/* <Login/> */}
        <OrderHistory/>
      {/* <JobCard/> */}
    </div>
  )
}

export default Home