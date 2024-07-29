import { Breadcrumbs, Typography } from '@mui/material'
import CustomCard from '@src/Shared/Card/CustomCard'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine'
import React from 'react'
import { Link } from 'react-router-dom'
import { Status } from '@src/Shared/enum/enum'
import Listing_product_Logo from '@src/assets/image/listing_logo.png'
import Listing_product_img from '@src/assets/image/listing_img.png'

function ListingProfile() {
  return (
    <CustomCard styleClass={'sticky'}>
      <div role="presentation" className='mb-3 px-5 pt-5 pb-1'>
        <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3] '>
          <Link color="inherit" to='#' className='text-sm'>
            Dashboard
          </Link>
          <Typography color="" className='text-[10px]'>Vendor Managment</Typography>
        </Breadcrumbs>
        <div className="flex items-center justify-between">
          <h5 className='text-2xl sm:text-lg md:text-sm font-medium text-[rgba(5, 25, 23, 1)]'>Health & Beauty Orders Listing</h5>
        </div>
      </div>
      <SeperatorLine className='text-black-900 opacity-0.1' />
      <div className='px-5 pt-2'>
        <span className='text-sm md:text-xs sm:text-xs text-green-900 font-medium'>Order ID :</span>
        <span className='text-sm md:text-xs sm:text-xs text-green-900 font-medium'>487895566</span>
      </div>

      <div className="xl:h-screen lg:h-[30rem] md:h-[50rem] sm:h-97 overflow-y-auto">

        <div className='flex  justify-between gap-3 px-5 w-full sm:flex-col sm:gap-0 sm:px-5 sm:justify-start md:flex-col md:gap-0 md:px-5 md:justify-start'>
          <div className='w-full flex flex-col gap-2 border-r-2 py-5 sm:border-r-0 sm:py-1 md:border-r-0 md:py-1'>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Customer Name:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>John Doe</span>
            </p>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Phone Number:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>+(92) 9933559</span>
            </p>
          </div>

          <div className='w-full flex flex-col gap-2 border-r-2 py-5 sm:border-r-0 sm:py-1 md:border-r-0 md:py-1'>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Date:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>01-02-2024</span>
            </p>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Time:</span>
              <span className='text-black-900 sm:text-xs text-opacity-0.5 font-medium'>07:30 Pm</span>
            </p>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Delivery Type:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>Delivery</span>
            </p>
          </div>

          <div className='w-full py-5 sm:pt-1 sm:pb-5 md:pt-1 md:pb-5'>
            <p className='flex gap-3'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Address:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>Dr. John Doe Is Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyre</span>
            </p>
          </div>
        </div>

        <div className='px-5'>
          <h5 className='text-lg text-black-900 text-opacity-0.4 pb-2'>Order Details</h5>
          <div className='flex gap-3'>
            <h5 className='text-black-900 sm:text-sm md:text-sm font-semibold'>Order Status:</h5>
            <p className={
              Status.pending === 'PENDING' ? 'text-white bg-yellow-200  rounded px-3 sm:px-1 py-1 font-normal sm:text-xs md:text-xs'
                : Status.rejected === 'REJECTED' ? 'text-white  bg-red-500  rounded px-3 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
                  : Status.in_transit === 'IN TRANSIT' ? 'text-white  bg-blue-900  rounded px-3 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
                    : Status.shipped === 'SHIPPED' ? 'text-white  bg-pink-100  rounded px-5 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
                      : 'text-white bg-green-500  rounded px-3 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
            }>{Status.pending}</p>
          </div>


          {/* card */}
            {
              [1, 1, 1, 1].map((item: any) => (
                <div className='border-b-2 py-3'>
                <div className='flex sm:flex-col md:flex-col justify-between gap-3 w-full my-3'>
                  <div className='w-full flex sm:items-start sm:border-r-0 md:border-r-0 sm:py-0 md:py-0 flex-col gap-2 border-r-2 py-5'>
                    <p className=''>
                      <span className='text-black-900 font-medium'>Product Image:</span>
                    </p>
                    <div className='flex justify-between items-center'>
                      <div className='flex gap-3'>
                        <img src={Listing_product_Logo} className='w-10 h-10' alt="" />
                        <p className='flex flex-col gap-2'>
                          <span className='text-[15px] text-black-900 font-semibold'>Rouge</span>
                          <span className='text-xs w-full text-black-900 text-opacity-0.2'>Berlin, Germany</span>
                        </p>
                      </div>
                      <img src={Listing_product_img} className='w-36 sm:w-20 md:w-20' alt="" />
                    </div>
                  </div>

                  <div className='w-full flex flex-col items-start justify-center gap-2 sm:border-r-0 md:border-r-0 sm:py-0 md:py-0 border-r-2 py-5'>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Date:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>01-02-2024</span>
                    </p>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Time:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>07:30 Pm</span>
                    </p>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Delivery Type:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>Delivery</span>
                    </p>
                  </div>

                  <div className='w-full py-5 sm:py-0 md:py-0 flex flex-col items-start justify-center'>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Address:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>Dr. John Doe Is Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyre</span>
                    </p>
                  </div>
                </div>
                <></>
          </div>
              ))
            }
           
          {/* card */}
        </div>

      </div>
    </CustomCard>
  )
}

export default ListingProfile
