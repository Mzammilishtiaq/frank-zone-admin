import { Breadcrumbs, Link, Switch, Typography } from '@mui/material';
import CustomCard from '@src/Shared/Card/CustomCard';
import React, { useState } from 'react'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import Profileimg from '@src/assets/icon/Profile-Menu.png'
import NavTabs from '@src/Shared/NavTabs/NavTabs';
import KFC from '@src/assets/image/kfc.png';

function UserManagmentProfile() {
    const [activeTabId, setactiveTabId] = useState(1)
    return (
        <CustomCard styleClass={'px-5 py-4'} >
            <div role="presentation flex flex-col gap-2">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href='/dashboard' className=''>
                        Dashboard
                    </Link>
                    <Link underline="hover" color="inherit" href='/user_management' className=''>
                        User Management
                    </Link>
                    <Typography color="text-sm">User Detail</Typography>
                </Breadcrumbs>
                <div className="flex items-center justify-between">
                    <h5 className='text-2xl font-semibold font-sans'>User Detail</h5>
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            </div>
            <SeperatorLine />
            <div className="flex items-center justify-center">
                <div className='flex items-center gap-2 w-3/6 border-r-2 border-gray-500 mx-5 '>
                    <img src={Profileimg} className='w-28' alt="" />
                    <div className="flex flex-col gap-3">
                        <p className='font-sans font-bold text-gray-700 shadow-gray-600'> User Name: <span className='text-gray-500'>Ali</span> </p>
                        <p className='font-sans font-bold text-gray-700 shadow-gray-600'> Phone Number: <span className='text-gray-500'>091234555</span></p>
                    </div>
                </div>
                <div className="w-3/5 mx-5">
                    <p className='font-sans font-bold text-gray-700 shadow-gray-600'>Address:
                        <span className='text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae illum beatae ipsum veniam fugiat obcaecati labore id vitae nihil doloribus in, sed ad est voluptatibus! Natus consequuntur laborum modi.</span> </p>
                </div>
            </div>
            <div className="text-left px-4 pt-4 flex">
                {/* <p
                    className={`text-gray-900  flex cursor-pointer mx-3 ${activeTabId === deal?.id
                            ? 'border-red-300 border-b-2 !text-black-900 font-medium'
                            : null
                        }`}
                    onClick={() => handleTab(deal?.id)}
                >
                    {' '}
                    {deal?.image_url ? <LazyImage src={deal?.image_url} className="w-6 h-6 mr-1" /> : <LazyImage src={NoImage} className="w-6 h-6" />}
                    {deal?.label?.toUpperCase()}
                </p> */}
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <CustomCard styleClass={'px-5 py-5 !shadow-md'}>
                    <div className='flex items-center gap-3 w-[708px]'>
                        <div>
                            <img className='w-20 ' src={KFC} alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-green-400 font-medium'>Order ID : <span>#2324324</span></p>
                            <p className='text-gray-500 text-sm font-medium w-[400px]'>If You Want A True Outback Experience, Or Perhaps An Experience That Feels As Though You Are On Mars, Then Look No Further."</p>
                            <p className='text-black font-medium'>Total Items: 5 Items</p>
                        </div>
                    </div>
                </CustomCard>
            </div>
        </CustomCard>
    )
}

export default UserManagmentProfile;