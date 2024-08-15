import { Breadcrumbs, Typography } from '@mui/material'
import CustomCard from '@src/Shared/Card/CustomCard'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Status } from '@src/Shared/enum/enum'
import Listing_product_Logo from '@src/assets/image/listing_logo.png'
import Listing_product_img from '@src/assets/image/listing_img.png'
import LazyImage from '@src/Shared/LazyImage/LazyImage'
import { backendCall } from '@src/Shared/utils/BackendService/backendCall'
import { handleToastMessage } from '@src/Shared/toastify'
import { OrderProfileManagement, VendorIdModel } from '@src/Shared/Models/OrderManage/OrderProfileManagment'
import NoImage from '@src/assets/image/NoImage.png';
import moment from 'moment'
import { Spinner } from '@src/Shared/Spinner/Spinner'

function ListingProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState() as any;
  const [vendorid, setVendorId] = useState() as any;

  const { id } = useParams();

  console.log('orderData ==', orderData)
  useEffect(() => {
    let delaytime = setTimeout(() => {
      Fetchprofileapi();
    }, 600)

    return () => clearTimeout(delaytime)
  }, [])


  console.log('vendor id ==', vendorid)
  useEffect(() => {
    let delaytime = setTimeout(() => {
      FetchVendorShop();
    }, 600)

    return () => clearTimeout(delaytime)
  }, [])
  const FetchVendorShop = () => {
    backendCall({
      url: `/api/admin/vendor_management/${orderData.vendor_id}`,
      method: 'GET',
      dataModel: VendorIdModel
    }).then((res) => {
      if (res != res.error) {
        setVendorId(res.data)
      }
    })
  }
  const Fetchprofileapi = () => {
    setIsLoading(true)
    backendCall({
      url: `/api/admin/order_management/${id}`,
      method: 'GET',
      dataModel: OrderProfileManagement
    }).then((res) => {
      if (res != res.error) {
        setIsLoading(false)
        setOrderData(res.data)
        // handleToastMessage('success', res.message);
      } else {
        setIsLoading(false)
        handleToastMessage('error', res.message)
      }
    })
  }

  return (
    <CustomCard styleClass={'sticky'}>
      <div role="presentation" className='mb-3 px-5 pt-5 pb-1'>
        <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3] '>
          <Link to='/dashboard' className='text-sm hover:border-b-2 hover:border-gray-500'>
            Dashboard
          </Link>
          <Typography color="" className='text-[10px]'>Orders Management</Typography>
          <Typography color="" className='text-[10px]'>Listing</Typography>
        </Breadcrumbs>
        <div className="flex items-center justify-between">
          <h5 className='text-2xl sm:text-lg md:text-sm font-medium text-[rgba(5, 25, 23, 1)]'>Health & Beauty Orders Listing</h5>
        </div>
      </div>
      <SeperatorLine className='text-black-900 opacity-0.1' />
      <Spinner isLoading={isLoading} />
      <div className='px-5 pt-2'>
        <span className='text-sm md:text-xs sm:text-xs text-green-900 font-medium'>Order ID :</span>
        <span className='text-sm md:text-xs sm:text-xs text-green-900 font-medium'> {orderData?.order_id || 'empty data'}</span>
      </div>

      <div className="xl:h-screen lg:h-[30rem] md:h-[50rem] sm:h-97 overflow-y-auto">

        <div className='flex  justify-between gap-3 px-5 w-full sm:flex-col sm:gap-0 sm:px-5 sm:justify-start md:flex-col md:gap-0 md:px-5 md:justify-start'>
          <div className='w-full flex flex-col gap-2 border-r-2 py-5 sm:border-r-0 sm:py-1 md:border-r-0 md:py-1'>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Customer Name:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{orderData?.customer_name || 'empty data'}</span>
            </p>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Phone Number:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{vendorid?.phone}</span>
            </p>
          </div>

          <div className='w-full flex flex-col gap-2 border-r-2 py-5 sm:border-r-0 sm:py-1 md:border-r-0 md:py-1'>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Date:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{moment(orderData?.date).utc().format('DD-MM-YYYY')}</span>
            </p>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Time:</span>
              <span className='text-black-900 sm:text-xs text-opacity-0.5 font-medium'>{moment(orderData?.time).utc().format('HH : MM A')}</span>
            </p>
            <p className='flex gap-5'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Delivery Type:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{orderData?.state || 'empty data'}</span>
            </p>
          </div>

          <div className='w-full py-5 sm:pt-1 sm:pb-5 md:pt-1 md:pb-5'>
            <p className='flex gap-3'>
              <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Address:</span>
              <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{orderData?.address || 'empty data'}</span>
            </p>
          </div>
        </div>

        <div className='px-5'>
          <h5 className='text-lg text-black-900 text-opacity-0.4 pb-2'>Order Details</h5>
          <div className='flex gap-3'>
            <h5 className='text-black-900 sm:text-sm md:text-sm font-semibold'>Order Status:</h5>
            <p className={
              orderData?.state === 'PENDING' ? 'text-white bg-yellow-200  rounded px-3 sm:px-1 py-1 font-normal sm:text-xs md:text-xs'
                : orderData?.state === 'REJECTED' ? 'text-white  bg-red-500  rounded px-3 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
                  : orderData?.state === 'IN TRANSIT' ? 'text-white  bg-blue-900  rounded px-3 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
                    : orderData?.state === 'SHIPPED' ? 'text-white  bg-pink-100  rounded px-5 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
                      : 'text-white bg-green-500  rounded px-3 py-1 font-normal sm:text-xs md:text-xs sm:px-1'
            }>{orderData?.state || 'NaN'}</p>
          </div>


          {/* card */}
          {
            orderData?.orderline && orderData?.orderline.map((item: any) => (
              <div className='border-b-2 py-3'>
                <div className='flex sm:flex-col md:flex-col justify-between gap-3 w-full my-3'>
                  <div className='w-full flex sm:items-start sm:border-r-0 md:border-r-0 sm:py-0 md:py-0 flex-col gap-2 border-r-2 py-5'>
                    <p className=''>
                      <span className='text-black-900 font-medium'>Product Image:</span>
                    </p>
                    <div className='flex justify-around items-center'>
                      <div className='flex gap-3'>
                        <LazyImage src={item?.image || NoImage} className='w-10 h-10 rounded-full' alt="" />
                        <p className='flex flex-col gap-2'>
                          <span className='text-[15px] text-black-900 font-semibold'>Rouge</span>
                          <span className='text-xs w-full text-black-900 text-opacity-0.2'>{orderData?.city || 'empty data'}, {orderData?.country || 'empty data'}</span>
                        </p>
                      </div>
                      <LazyImage src={item?.webimage || NoImage} className='w-24 sm:w-20 md:w-20 rounded-lg' alt="" />
                    </div>
                  </div>

                  <div className='w-full flex flex-col items-start justify-center gap-2 sm:border-r-0 md:border-r-0 sm:py-0 md:py-0 border-r-2 py-5'>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Quantity:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>x{item?.quantity || 'No data'}</span>
                    </p>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Total Price:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{item?.price}$</span>
                    </p>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Color:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>Red</span>
                    </p>
                  </div>

                  <div className='w-full flex flex-col items-start justify-center gap-2  sm:py-0 md:py-0  py-5'>
                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Product Name:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{item?.product_name || 'No data'}</span>
                    </p>

                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Category:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>{item?.category_name || 'No data'}</span>
                    </p>

                    <p className='flex gap-5'>
                      <span className='text-black-900 sm:text-xs md:text-xs font-medium'>Size:</span>
                      <span className='text-black-900 sm:text-xs md:text-xs text-opacity-0.5 font-medium'>Medium</span>
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
