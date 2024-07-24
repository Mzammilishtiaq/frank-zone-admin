import React, { useState } from 'react';
import { Breadcrumbs, Checkbox, Link, Switch, Typography } from '@mui/material';
import CustomCard from '@src/Shared/Card/CustomCard';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import { profileTypes } from '@src/Shared/enum/enum';
import ProfileDetail from './profiledetail';
import EcommerceQueston from './ecommercequestion';
import DocumentVerfication from './documnetverfication';
import Product from './product';
import ReviewRating from './ReviewRating';


function VendorManagmentDetail() {
  const [activeTab, setActiveTab] = useState('Vendor Details');

  const handleTab = (item: string) => {
    setActiveTab(item)
  }
  const ProfileTab = [
    "Vendor Details",
    "Questionnaire",
    "Documents Verification",
    "Products",
    "Reviews & Ratings"
  ]


  return (
    <>
      <CustomCard styleClass={'p-4 mx-4'}>
        <div role="presentation flex flex-col gap-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href='/dashboard' className=''>
              Dashboard
            </Link>
            <Typography color="" className='text-[10px]'>Vendor Managment</Typography>
          </Breadcrumbs>
          <div className="flex items-center justify-between">
            <h5 className='text-2xl sm:text-lg font-semibold text-[rgba(5, 25, 23, 1)]'>Ecommerce Vendor Managment</h5>
          </div>
        </div>
        <SeperatorLine className='!border !border-black-900 !border-opacity-0.1 -ml-5' />
        <div className="flex item-start">
          {

            ProfileTab.map((item,index) => (
              <p className={`text-gray-900  flex cursor-pointer mx-3 pb-[5px]
                      ${activeTab === item ? 'border-black-900 border-b-2 text-black font-medium' : null}`}
                onClick={() => handleTab(item)} key={index}
              >{item}</p>
            ))
          }
        </div>
        <SeperatorLine className='!border !border-black-900 !border-opacity-0.1 -mt-[13px]  -ml-5' />

        {activeTab === profileTypes?.vendor_details && < ProfileDetail />}
        {activeTab === profileTypes?.questionnaire && < EcommerceQueston />}
        {activeTab === profileTypes?.documents_verification && < DocumentVerfication />}
        {activeTab === profileTypes?.products && < Product />}
        {activeTab === profileTypes?.reviews_ratings && < ReviewRating />}

      </CustomCard>
    </>
  )
}

export default VendorManagmentDetail
