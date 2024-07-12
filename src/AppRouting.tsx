import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from '@src/Pages/Auth/Login';
import ForgotPassword from '@src/Pages/Auth/ForgotPassword';
import VerificationCode from '@src/Pages/Auth/verificationcode';
import NewPassword from '@src/Pages/Auth/NewPassword';
import Dashboard from '@src/Pages/Admin/Dashboard';


function AppRouting() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/verificationcode' element={<VerificationCode/>}/>
        <Route path='/newpassword' element={<NewPassword/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouting
