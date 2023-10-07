import { useState } from 'react'
import Home from './components_div/Home'
import SignIn from './components/Auth/SignInPage'
import ProfilePage from './components/User/ProfilePage'
import Address from './components/User/Address/Address'
import History from './components/User/Order/History'

function App() {

  return (
    <>
    {/* <ProfilePage/> */}
    {/* <SignIn/> */}
    {/* <Address/> */}
    <History/>
    </>
  )
}

export default App
