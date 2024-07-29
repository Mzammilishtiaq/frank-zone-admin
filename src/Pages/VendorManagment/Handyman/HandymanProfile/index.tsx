import React, { useState } from 'react'
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomCard from '@src/Shared/Card/CustomCard';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import Employees from './Employees';
import HandyDetail from './HandyDetail';
import DocumentVerfication from './HandyDocumentVerfication';
import HandyProduct from './HandyProduct';
import HandyQuestion from './HandyQuestion';
import HandyRatingReview from './HandyRatingReview';
import { profileTypes } from '@src/Shared/enum/enum';
import HandyDocumentVerfication from './HandyDocumentVerfication';
import HandySpecialities from './HandySpecialities';

function HandymanProfile() {
    const [activeTab, setActiveTab] = useState('Vendor Details');

    const handleTab = (item: string) => {
      setActiveTab(item)
    }
    const ProfileTab = [
      "Vendor Details",
      "Specialities",
      "Questionnaire",
      "Documents Verification",
      "Products",
      "Reviews & Ratings",
      "Employees"
    ]
  return (
    <div>
      <CustomCard styleClass={'p-5 sticky'}>
      <div role="presentation" className='mb-3'>
          <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
          <Link   to='/dashboard' className='text-sm hover:border-b-2 hover:border-gray-500'>
          Dashboard
            </Link>
            <Typography color="" className='text-[10px]'>Vendor Managment</Typography>
          </Breadcrumbs>
          <div className="flex items-center justify-between">
            <h5 className='text-xl sm:text-lg font-medium text-[rgba(5, 25, 23, 1)]'>Handyman Vendor Managment</h5>
          </div>
        </div>
        <SeperatorLine className='!border !border-black-900 !border-opacity-0.1 -ml-5' />

        <div className="flex gap-5 sm:gap-1 sm:overflow-auto md:overflow-auto sm:w-[100vw]">
          {

            ProfileTab.map((item,index) => (
              <div className={`text-gray-900 flex sm:text-[6px] md:text-[10px]  cursor-pointer pb-[5px] 
                      ${activeTab === item ? 'border-black-900 border-b-2 text-black-900 font-medium' : null}`}
                onClick={() => handleTab(item)} key={index}
              >{item}</div>
            ))
          }
        </div>
        <SeperatorLine className='!border !border-black-900 !border-opacity-0.1 -mt-[13px]  -ml-5' />
        <div className="overflow-y-auto lg:h-[30rem] xl:h-screen md:h-97 sm:h-[30rem] no-scrollbar p-3">
        {activeTab === profileTypes?.vendor_details && <HandyDetail/>}
        {activeTab === profileTypes?.products && <HandyProduct/>}
        {activeTab === profileTypes?.questionnaire && <HandyQuestion/>}
        {activeTab === profileTypes?.documents_verification && <HandyDocumentVerfication/>}
        {activeTab === profileTypes?.reviews_ratings && <HandyRatingReview/>}
        {activeTab === profileTypes?.employees && <Employees/>}
        {activeTab === profileTypes?.Specialities && <HandySpecialities/>}
        </div>
      </CustomCard>
    </div>
  )
}

export default HandymanProfile;