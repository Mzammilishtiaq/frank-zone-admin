import CustomCard from '@src/Shared/Card/CustomCard';
import React from 'react';
import Profileimg from '@src/assets/icon/Profile-Menu.png';
import Bannerimg from '@src/assets/image/banner.png';


function ProfileDetail() {
  return (
    <>
      <div className="profiledetail">
        <div className=" flex flex-col gap-2 py-5">
          <h5 className='font-semibold text-black-900 text-xl'>Profile Details</h5>
          <div className="flex items-center justify-start gap-5">
            <img src={Profileimg} className='w-40' alt="" />
            <div className='flex flex-col gap-3 px-14 border-r-2 border-black-900 border-opacity-0.1'>
              <div className='text-black-900'><span className='text-lg font-medium '> First Name:</span> <span className=' text-gray-500 font-medium ml-4'>Admin</span></div>
              <div className='text-black-900'><span className='text-lg font-medium '>Last Name:</span> <span className=' text-gray-500 font-medium ml-4'>Panel.</span></div>
            </div>
            <div className='flex flex-col gap-3 px-14'>
              <p className='text-black-900'><span className='text-lg font-medium '>Email:</span> <span className=' text-gray-500 font-medium ml-4'>John Doe</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Phone Number:</span> <span className=' text-gray-500 font-medium ml-4'>+49 878493483</span></p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 py-5">
          <h5 className='font-semibold text-2xl text-black-900'>Ecommerce Shop Details</h5>
          <img src={Bannerimg} className='w-full my-2' alt="" />
          <div className="flex items-center justify-start gap-5">
            <div className='flex flex-col gap-3 pl-2 pr-14 border-r-2 border-gray-400'>
              <p className='text-black-900'><span className='text-lg font-medium '>Shop Name:</span> <span className=' text-gray-500 font-medium ml-4'>Clarks</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Landline Number:</span> <span className=' text-gray-500 font-medium ml-4'>+(48) 889998889</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>City:</span> <span className=' text-gray-500 font-medium ml-4'>Berlin</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Country:</span> <span className=' text-gray-500 font-medium ml-4'>Germany</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Quote:</span> <span className=' text-gray-500 font-medium ml-4'>"There is No Success Without Hard Work".</span></p>
            </div>
            <div className='flex flex-col gap-3 px-14'>
              <p className='text-black-900'><span className='text-lg font-medium '>Business Email:</span> <span className=' text-gray-500 font-medium ml-4'>Admin@codesorbit.com</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Postal Code:</span> <span className=' text-gray-500 font-medium ml-4'>4344</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Tax No:</span> <span className=' text-gray-500 font-medium ml-4'>2344</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Phone Number:</span> <span className=' text-gray-500 font-medium ml-4'>+49 878493483</span></p>
            </div>
          </div>
        </div>

        <div>
          <h5 className='font-semibold text-xl mb-4'>Branches Details</h5>
         {
          [1,1,1,1,1,1].map((item)=>(
            <CustomCard styleClass={'p-4 !flex-row items-center my-3'}>
            <div className='flex flex-col items-center'>
              <p className='text-green-900 font-medium'>Branch 01</p>
              <img src={Profileimg} className='w-40' alt="" />
            </div>
            <div className='flex flex-col gap-3 px-14'>
              <p className='text-black-900'><span className='text-lg font-medium '>Business Email:</span> <span className='text-gray-500 font-medium ml-4'>Admin@codesorbit.com</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Bussiness Address:</span> <span className='text-gray-500 font-medium ml-4'>Berlin, Germeny</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Country:</span> <span className='text-gray-500 font-medium ml-4'>Germeny</span></p>
            </div>
            <div className='flex flex-col gap-3 px-14'>
              <p className='text-black-900'><span className='text-lg font-medium '>Phone Number:</span> <span className='text-gray-500 font-medium ml-4'>+49 878493483</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>Postal Code:</span> <span className='text-gray-500 font-medium ml-4'>4344</span></p>
              <p className='text-black-900'><span className='text-lg font-medium '>City:</span> <span className='text-gray-500 font-medium ml-4'>Berlin</span></p>
            </div>
          </CustomCard>
          ))
         }
        </div>
      </div>
    </>
  )
}

export default ProfileDetail;
