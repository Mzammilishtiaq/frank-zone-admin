import React from 'react';
import Sidebar from '@src/Shared/Siderbar/Sidebar';
import { Outlet } from 'react-router-dom';

function HomeContainer() {
    return (
        <div className='flex'>
            <Sidebar  />
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default HomeContainer
