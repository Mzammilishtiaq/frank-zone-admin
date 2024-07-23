import { Breadcrumbs, Link, Switch, Typography } from '@mui/material';
import CustomCard from '@src/Shared/Card/CustomCard';
import React, { useState } from 'react'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import Profileimg from '@src/assets/icon/Profile-Menu.png'
import NavTabs from '@src/Shared/NavTabs/NavTabs';
import KFC from '@src/assets/image/kfc.png';
import RatingStar from '@src/Shared/RatingStar/RatingStar';

function UserManagmentProfile() {
    const [activeTabId, setactiveTabId] = useState(0)
    function handleTab(id: any): void {
        setactiveTabId(id)
    }

    return (
        <CustomCard styleClass={' p-5 min-h-screen'} >
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3] text-gray-500'>
                    <Link underline="hover" color="inherit" href='#' className=''>
                        Dashboard
                    </Link>
                    <Typography color="">User Management</Typography>
                </Breadcrumbs>
                <div className="flex items-center justify-between">
                    <h5 className='text-2xl font-semibold'>Users Management</h5>
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            </div>
            <SeperatorLine className='opacity-[0.1] -ml-[20px] -mt-2' />

            <div className="
            sm:flex-col sm:items-start sm:justify- sm:w-full
            w-full flex  items-center justify-center  
            ">
                <div className='
                sm:flex-col sm:border-r-0 sm:mx-0 sm:mb-4
                flex sm:w-full  items-center justify-center-center gap-2 w-3/6  border-r-2 border-opacity-[0.1] border-black-900 mx-5 '>
                    <img src={Profileimg} className='w-28 sm:w-20 ' alt="" />
                    <div className="flex flex-col gap-3 sm:w-full">
                        <div className=' flex gap-3 text-sm'> <span className='font-semibold text-black-900 text-opacity-[1] '>User Name:</span> <span className='text-gray-500'>Ali</span> </div>
                        <div className='flex gap-3 text-sm'><span className='font-semibold text-black-900 '> Phone Number:</span> <span className='text-gray-500'>091234555</span></div>
                    </div>
                </div>
                <div className='flex w-3/5 mx-5 sm:mx-0 gap-3 text-xs sm:w-full'>
                    <span className='font-semibold text-black-900 text-opacity-[1]'>Address:</span>
                    <span className='text-gray-900 text-opacity-[0.9]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae illum beatae ipsum veniam fugiat obcaecati labore id vitae nihil doloribus in, sed ad est voluptatibus! Natus consequuntur laborum modi.</span>
                </div>
            </div>
            <div className="text-left px-4 pt-4 flex">
                {
                    ['Review & Rating', 'Chat'].map((item: string, index: number) => (
                        <p
                            className={`text-gray-900  flex cursor-pointer mx-3 ${activeTabId === index
                                ? 'border-gray-500 border-b-2 !text-black-900 font-medium'
                                : null
                                }`}
                            onClick={() => handleTab(index)}
                        >
                            {item?.toUpperCase()}
                        </p>
                    ))
                }
            </div>

            <div className='grid sm:grid-cols-1 grid-cols-2 gap-4 overflow-y-auto min-h-full'>
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                        <CustomCard key={index} styleClass={'p-5 sm:p-1 sm:!shadow-xl !shadow-md !flex-row items-center justify-between w-[100%]'}>
                            <div className='flex flex-col items-center w-40'>
                                <img src={KFC} className='w-10 sm:w-6' alt="" />
                                <h5 className='text-black-900 opacity-1 font-semibold text-left text-sm'>KFC</h5>
                                <p className='text-black-900 opacity-0.3 text-left text-[10px]'>Berlin, Germany</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 sm:gap-[10px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-green-900 text-normal text-[10px] sm:flex sm:gap-[2px]'><span>Order ID :</span> <span>#2324324</span></p>
                                    <div>
                                        <RatingStar />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[14px] sm:text-[10px] text-black-900 opacity-0.3'>" If You Want A True Outback Experience, Or Perhaps An Experience That Feels As Though You Are On Mars, Then Look No Further."</p>
                                </div>
                                <div className='flex items-start justify-between'>
                                    <p className='text-black-900 font-normal text-[10px]'><span>Total Items: </span><span>5 Items</span></p>
                                    <p className='text-black-900 opacity-0.3 text-[10px]'>Jan 30,2023</p>
                                </div>
                            </div>
                        </CustomCard>
                    ))
                }
            </div>
        </CustomCard>
    )
}

export default UserManagmentProfile;