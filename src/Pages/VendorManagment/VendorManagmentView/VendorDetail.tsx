import CustomCard from '@src/Shared/Card/CustomCard';
import React from 'react';
import Profileimg from '@src/assets/icon/Profile-Menu.png';
import Bannerimg from '@src/assets/image/banner.png';
import LazyImage from '@src/Shared/LazyImage/LazyImage';
import Noimage from '@assets/image/NoImage.png';


function VendorDetail({vendordetail}:any) {
  console.log('VendorDetailData ==', vendordetail)

  return (
    <>
      <div className="profiledetail">
        <div className=" flex flex-col gap-2 py-5">
          <h5 className='font-semibold text-black-900 text-xl sm:text-lg'>Profile Details</h5>
          <div className="flex sm:flex-col md:flex-col items-center justify-start gap-5">
            <LazyImage src={vendordetail.image || Noimage} className='w-40 h-40 rounded-full sm:w-20 sm:h-20 md:w-20 md:h-20' alt="" />
            <div className='sm:items-start sm:justify-start sm:px-0 sm:border-r-0 sm:w-full
            md:items-start md:justify-start md:px-0 md:border-r-0 md:w-full
              flex flex-col gap-3 px-14 border-r-2 border-black-900 border-opacity-0.1'>
              <div className='text-black-900'><span className='text-lg sm:text-sm md:text-sm font-medium '> First Name:</span> <span className=' text-gray-500 font-medium ml-4 sm:text-sm md:text-sm'>{vendordetail.firstname || 'Empty data'}</span></div>
              <div className='text-black-900'><span className='text-lg sm:text-sm md:text-sm font-medium '>Last Name:</span> <span className=' text-gray-500 font-medium ml-4 sm:text-sm md:text-sm'>{vendordetail.lastname || 'Empty data'}.</span></div>
            </div>
            <div className=' sm:items-start sm:justify-start sm:w-full sm:px-0
            md:items-start md:justify-start md:w-full md:px-0
             flex flex-col gap-3 px-14'>
              <p className='text-black-900 '><span className='text-lg sm:text-sm md:text-sm font-medium '>Email:</span> <span className=' sm:text-sm md:text-sm text-gray-500 font-medium ml-4'>{vendordetail.email || 'Empty data'}</span></p>
              <p className='text-black-900 '><span className='text-lg sm:text-sm md:text-sm font-medium '>Phone Number:</span> <span className=' sm:text-sm md:text-sm text-gray-500 font-medium ml-4'>{vendordetail.phone || 'Empty data'}</span></p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 py-5">
          <h5 className='font-semibold text-2xl sm:text-lg md:text-lg text-black-900'>Ecommerce Shop Details</h5>
          <LazyImage src={Bannerimg} className='w-full my-2' alt="" />
          <div className="flex items-center justify-start gap-5
           sm:flex-col sm:gap-3 sm:p-0 sm:m-0
           md:flex-col md:gap-5 md:p-0 md:m-0">
            <div className='flex flex-col gap-3 pr-14 border-r-2 border-gray-400
             sm:pl-0 sm:pr-0 sm:gap-1 sm:border-r-0 sm:items-start sm:justify-start sm:w-full sm:px-0
              md:pl-0  md:pr-0 md:border-r-0 md:items-start md:justify-start md:w-full md:px-0 '>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Shop Name:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>Clarks</span></p>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Landline Number:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>+(48) 889998889</span></p>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>City:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>Berlin</span></p>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Country:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>Germany</span></p>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Quote:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>"There is No Success Without Hard Work".</span></p>
            </div>
            <div className='flex flex-col px-14 gap-3 
             sm:items-start sm:justify-start  sm:pr-10  sm:px-0 sm:w-full
             md:items-start md:justify-start  md:w-full md:px-0'>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Business Email:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>Admin@codesorbit.com</span></p>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Postal Code:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>4344</span></p>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Tax No:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>2344</span></p>
              <p className='text-black-900'><span className='text-lg sm:text-xs md:text-xs font-medium '>Phone Number:</span> <span className='sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>+49 878493483</span></p>
            </div>
          </div>
        </div>

        <div>
          <h5 className='font-semibold text-xl sm:text-lg md:text-lg mb-4'>Branches Details</h5>
          {
            [1, 1, 1, 1, 1, 1].map((item) => (
              <CustomCard styleClass={'p-4 !flex-row sm:!flex-col md:!flex-col items-center  my-3'}>
                <div className='flex flex-col sm:items-center md:items-center w-full'>
                  <p className='text-green-900 sm:me-auto sm:text-xs md:me-auto md:text-xs ml-10 sm:ml-0 md:ml-0  font-medium'>Branch 01</p>
                  <LazyImage src={Profileimg} className='w-40 sm:w-20 md:w-20' alt="" />
                </div>
                <div className='flex flex-col gap-3 sm:items-start md:items-start w-full'>
                  <p className='text-black-900'><span className='text-lg sm:text-[10px] md:text-[15px] font-medium '>Business Email:</span> <span className='sm:text-[15px] md:text-[10px] text-gray-500 font-medium ml-4 sm:ml-0'>Admin@codesorbit.com</span></p>
                  <p className='text-black-900'><span className='text-lg sm:text-[10px] md:text-[15px] font-medium '>Bussiness Address:</span> <span className='sm:text-[15px] md:text-[10px] text-gray-500 font-medium ml-4 sm:ml-0'>Berlin, Germeny</span></p>
                  <p className='text-black-900'><span className='text-lg sm:text-[10px] md:text-[10px] font-medium '>Country:</span> <span className='sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4 sm:ml-0'>Germeny</span></p>
                </div>
                <div className='flex flex-col gap-3 sm:px-0 md:px-0 px-14 w-full'>
                  <p className='text-black-900'><span className='text-lg font-medium sm:text-[10px] md:text-[15px] '>Phone Number:</span> <span className='sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4'>+49 878493483</span></p>
                  <p className='text-black-900'><span className='text-lg font-medium sm:text-[10px] md:text-[15px] '>Postal Code:</span> <span className='sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4'>4344</span></p>
                  <p className='text-black-900'><span className='text-lg font-medium sm:text-[10px] md:text-[15px] '>City:</span> <span className='sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4'>Berlin</span></p>
                </div>
              </CustomCard>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default VendorDetail;
