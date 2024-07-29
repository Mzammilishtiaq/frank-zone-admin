import React, { useState } from 'react'
import { Breadcrumbs, Switch, Typography } from '@mui/material'
import CustomCard from '@src/Shared/Card/CustomCard'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine'
import { Link } from 'react-router-dom'
import Profileimg from '@src/assets/icon/Profile-Menu.png'
import UserManagmentRatingReview from './UserManagmentRatingReview'
import { usermanagement_type } from '@src/Shared/enum/enum'
import UserManagmentChat from './UserManagmentChat'

function UserManagmentProfile() {
    const [activeTabId, setactiveTabId] = useState("REVIEW & RATING")
    function handleTab(id: any): void {
        setactiveTabId(id)
    }
    return (
        <CustomCard styleClass='p-5 sticky'>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3] text-gray-500'>
                    <Link color="inherit" to='#' className=''>
                        Dashboard
                    </Link>
                    <Typography color="">User Management</Typography>
                </Breadcrumbs>
                <div className="flex items-center justify-between">
                    <h5 className='text-2xl font-medium'>Users Management</h5>
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            </div>
            <SeperatorLine className='opacity-[0.1] -ml-[20px] -mt-2' />

            <div className="
            sm:flex-col sm:items-start sm:justify-start  sm:w-full
            md:flex-col md:items-start md:justify-start md:w-full
            w-full flex  items-center justify-center  
            ">
                <div className='
                sm:flex-col sm:border-r-0 sm:mx-0 sm:mb-4 sm:w-full
                md:flex-col md:border-r-0 md:mx-0 md:mb-4 md:w-full
                flex items-center justify-center-center gap-2 w-3/6  border-r-2 border-opacity-[0.1] border-black-900 mx-5 '>
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
                    ['REVIEW & RATING', 'CHAT'].map((item: string, index: number) => (
                        <p
                            className={`text-gray-900  flex cursor-pointer mx-3 ${activeTabId === item
                                ? 'border-gray-500 border-b-2 !text-black-900 font-medium'
                                : null
                                }`}
                            onClick={() => handleTab(item)}
                        >
                            {item?.toUpperCase()}
                        </p>
                    ))
                }
            </div>


            <div className="overflow-y-auto h-[25rem] no-scrollbar">
                {activeTabId === usermanagement_type?.ratingreview && <UserManagmentRatingReview />}
               {activeTabId === usermanagement_type?.chat && <UserManagmentChat />}
            </div>
        </CustomCard>
    )
}

export default UserManagmentProfile
