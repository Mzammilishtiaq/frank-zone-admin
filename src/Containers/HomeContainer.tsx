import React from 'react';
import Sidebar from '@src/Shared/Siderbar/Sidebar';
import { Outlet } from 'react-router-dom';
import { IsLoggedin } from '@src/Shared/utils/authService/authService';

function HomeContainer() {
    return (
        <div className='flex'>
           {/* <Sidebar  />  */}
            {IsLoggedin() ? <Sidebar  /> : null}
            {/* {!IsLoggedin() ?  : null} */}
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default HomeContainer
