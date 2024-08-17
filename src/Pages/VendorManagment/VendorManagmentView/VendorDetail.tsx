import CustomCard from '@src/Shared/Card/CustomCard';
import React, { useEffect, useState } from 'react';
import Profileimg from '@src/assets/icon/Profile-Menu.png';
import Bannerimg from '@src/assets/image/banner.png';
import LazyImage from '@src/Shared/LazyImage/LazyImage';
import Noimage from '@assets/image/NoImage.png';
import { Spinner } from '@src/Shared/Spinner/Spinner';
import { VendorDetailShopModel } from '@src/Shared/Models/UserVendor/VendorDetailShopModel';
import { handleToastMessage } from '@src/Shared/toastify';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import NoRecored from '@src/Shared/NoRecored/NoRecored';


function VendorDetail({ vendordetail, vendordetailid, loading }: any) {
  const [emptymessage, setEmptyMessage] = useState(false)
  const [vendorshopdetail, setVendorShopDetail] = useState<any[]>([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('VendorDetailShoppageData ==', vendorshopdetail)
  }, [vendorshopdetail])
  // const [isdefault, setIsDefault] = useState('');
  useEffect(() => {
    let dounpot = setTimeout(() => {
      FetchVendorShopDetailApi();
    }, 600)

    return () => clearTimeout(dounpot)

  }, [vendordetailid])
  const data1 = [
    {
      "id": 20,
      "business_name": "Burger Khan",
      "VendorShops": [
        {
          "id": 29,
          "business_email": "foodkhan@yopmail.com",
          "landline_number": "+9233351318",
          "address": "Islamabad, Pakistan",
          "city": "Islamabad",
          "country": "Pakistan",
          "country_code": null,
          "postal_code": "44000",
          "tax_no": "444",
          "quotes": null,
          "image_url": null,
          "cover_url": null,
          "is_default": 1
        }, {
          "id": 29,
          "business_email": "foodkhan@yopmail.com",
          "landline_number": "+9233351318",
          "address": "Islamabad, Pakistan",
          "city": "Islamabad",
          "country": "Pakistan",
          "country_code": null,
          "postal_code": "44000",
          "tax_no": "444",
          "quotes": null,
          "image_url": null,
          "cover_url": null,
          "is_default": 0
        }, {
          "id": 29,
          "business_email": "foodkhan@yopmail.com",
          "landline_number": "+9233351318",
          "address": "Islamabad, Pakistan",
          "city": "Islamabad",
          "country": "Pakistan",
          "country_code": null,
          "postal_code": "44000",
          "tax_no": "444",
          "quotes": null,
          "image_url": null,
          "cover_url": null,
          "is_default": 0
        }
      ]
    }
  ]

  const FetchVendorShopDetailApi = () => {
    setIsLoading(true)
    backendCall({
      url: `/api/admin/vendor_management/${vendordetailid}/shop`,
      method: 'GET',
      dataModel: VendorDetailShopModel
    }).then((res) => {
      // console.log('resdetailventorshop ==', res)
      if (!res.error) {
        if (res.data?.rows?.length > 0) {
          setIsLoading(false)
          setVendorShopDetail(res.data.rows)
          // handleToastMessage('success', res.message);
        } else {
          setEmptyMessage(true)
        }
      } else {
        setIsLoading(false)
        handleToastMessage('error', res?.message)
      }
    })
  }
  return (
    <>
      <div className="profiledetail" >
        <div className=" flex flex-col gap-2 py-5">
          <h5 className='font-semibold text-black-900 text-xl sm:text-lg xs:text-sm'>Profile Details</h5>
          <Spinner isLoading={loading} />
          <div className="flex sm:flex-col xs:flex-col md:flex-col items-center justify-start gap-5" key={vendordetail.id}>
            <LazyImage src={vendordetail.image || Noimage} className='w-40 h-40 rounded-full xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-20 md:h-20' alt="" />
            <div className='xs:items-start xs:justify-start xs:px-0 xs:border-r-0 xs:w-full
            sm:items-start sm:justify-start sm:px-0 sm:border-r-0 sm:w-full
            md:items-start md:justify-start md:px-0 md:border-r-0 md:w-full
              flex flex-col gap-3 px-14 border-r-2 border-black-900 border-opacity-0.1'>
              <div className='text-black-900'><span className='text-lg xs:text-xs sm:text-sm md:text-sm font-medium '> First Name:</span> <span className=' text-gray-500 font-medium ml-4 sm:text-sm md:text-sm xs:text-xs'>{vendordetail?.firstname || 'Empty data'}</span></div>
              <div className='text-black-900'><span className='text-lg xs:text-xs sm:text-sm md:text-sm font-medium '>Last Name:</span> <span className=' text-gray-500 font-medium ml-4 sm:text-sm md:text-sm xs:text-xs'>{vendordetail?.lastname || 'Empty data'}.</span></div>
            </div>
            <div className=' sm:items-start sm:justify-start sm:w-full sm:px-0
            md:items-start md:justify-start md:w-full md:px-0
             flex flex-col gap-3 px-14'>
              <p className='text-black-900 '><span className='text-lg xs:text-xs sm:text-sm md:text-sm font-medium '>Email:</span> <span className=' sm:text-sm md:text-sm text-gray-500 font-medium ml-4 xs:text-xs'>{vendordetail?.email || 'Empty data'}</span></p>
              <p className='text-black-900 '><span className='text-lg xs:text-xs sm:text-sm md:text-sm font-medium '>Phone Number:</span> <span className=' sm:text-sm md:text-sm text-gray-500 font-medium ml-4 xs:text-xs'>{vendordetail?.phone || 'Empty data'}</span></p>
            </div>
          </div>
        </div>


        {/* vendor shop  */}
        <div className="flex items-center justify-center w-full"><Spinner isLoading={loading} /></div>
        <h1 className='text-black-900 text-xl font-semibold text-center my-2 w-full absolute'>{emptymessage && <NoRecored/>}</h1>
        {
          vendorshopdetail && vendorshopdetail.map((items: any) => (
          // data1 && data1.map((items: any) => (
            <div className=" flex flex-col gap-2 py-5">
              {
                items?.vendorShop.map((item: any) => {
                  console.log('isdefault', item?.isdefault)
                  if (item?.isdefault === 1) {

                    return (
                      <>
                        <h5 className='font-semibold text-2xl xs:text-sm sm:text-lg md:text-lg text-black-900'>Ecommerce Shop Details</h5>
                        <div className="w-full">
                          <LazyImage src={item?.coverUrl || Noimage} className='w-full h-96 my-2 rounded-md' alt="" />
                          <p className='text-black-900 my-2'><span className='text-lg xs:text-[10px] sm:text-xs md:text-xs font-medium '>Shop Name:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{items?.businessName || 'Empty Data'}</span></p>

                          <div className="flex items-center justify-start gap-5
                                xs:flex-col xs:gap-3 xs:p-0 xs:m-0
                                sm:flex-col sm:gap-3 sm:p-0 sm:m-0
                                md:flex-col md:gap-5 md:p-0 md:m-0">
                            <div className='flex flex-col gap-3 pr-14 border-r-2 border-gray-400
                           xs:pl-0 xs:pr-0 xs:gap-1 xs:border-r-0 xs:items-start xs:justify-start xs:w-full xs:px-0
                           sm:pl-0 sm:pr-0 sm:gap-1 sm:border-r-0 sm:items-start sm:justify-start sm:w-full sm:px-0
                           md:pl-0  md:pr-0 md:border-r-0 md:items-start md:justify-start md:w-full md:px-0 '>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>Landline Number:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.landlineNumber || 'Empty Data'}</span></p>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>City:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.city || 'Empty Data'}</span></p>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>Country:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.country || 'Empty Data'}</span></p>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>Quote:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.quotes || 'Empty Data'}</span></p>
                            </div>
                            <div className='flex flex-col px-14 gap-3 
                              xs:items-start xs:justify-start  xs:pr-0  xs:px-0 xs:w-full
                              sm:items-start sm:justify-start  sm:pr-10  sm:px-0 sm:w-full
                              md:items-start md:justify-start  md:w-full md:px-0'>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>Business Email:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.businessEmail || 'Empty Data'}</span></p>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>Postal Code:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.postalCode || 'Empty Data'}</span></p>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>Tax No:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.tax_no || 'Empty Data'}</span></p>
                              <p className='text-black-900'><span className='text-lg sm:text-xs xs:text-[10px] md:text-xs font-medium '>Phone Number:</span> <span className='xs:text-[10px] sm:text-xs md:text-xs text-gray-500 font-medium ml-4'>{item?.landlineNumber || 'Empty Data'}</span></p>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  } else {
                    {/* vendor branches */ }
                    <>
                      <h5 className='font-semibold text-xl xs:text-sm sm:text-lg md:text-lg mb-4'>Branches Details</h5>
                      <CustomCard styleClass={'p-4 !flex-row xs:!flex-col sm:!flex-col md:!flex-col items-center  my-3'}>
                        <div className='flex flex-col xs:items-center sm:items-center md:items-center w-full'>
                          <p className='text-green-900 xs:me-auto xs:ms-auto xs:text-xs sm:me-auto sm:text-xs md:me-auto md:text-xs ml-10 sm:ml-0 md:ml-0  font-medium'>Branch 01</p>
                          <LazyImage src={item?.image_url || Noimage} className='w-40 xs:w-14 sm:w-20 md:w-20' alt="" />
                        </div>
                        <div className='flex flex-col gap-3 xs:items-start sm:items-start md:items-start w-full'>
                          <p className='text-black-900'><span className='text-lg xs:text-[7px] sm:text-[10px] md:text-[15px] font-medium '>Business Email:</span> <span className='xs:text-[7px] sm:text-[15px] md:text-[10px] text-gray-500 font-medium ml-4 sm:ml-0'>{item?.business_email || 'empty data'}</span></p>
                          <p className='text-black-900'><span className='text-lg xs:text-[7px] sm:text-[10px] md:text-[15px] font-medium '>Bussiness Address:</span> <span className='xs:text-[7px] sm:text-[15px] md:text-[10px] text-gray-500 font-medium ml-4 sm:ml-0'>{item?.address || 'empty data'}</span></p>
                          <p className='text-black-900'><span className='text-lg xs:text-[7px] sm:text-[10px] md:text-[10px] font-medium '>Country:</span> <span className='xs:text-[7px] sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4 sm:ml-0'>{item?.country || 'empty data'}</span></p>
                        </div>
                        <div className='flex flex-col gap-3 xs:px-0 sm:px-0 md:px-0 px-14 w-full'>
                          <p className='text-black-900'><span className='text-lg font-medium xs:text-[7px] sm:text-[10px] md:text-[15px] '>Phone Number:</span> <span className='xs:text-[7px] sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4'>{item?.landline_number || 'empty data'}</span></p>
                          <p className='text-black-900'><span className='text-lg font-medium xs:text-[7px] sm:text-[10px] md:text-[15px] '>Postal Code:</span> <span className='xs:text-[7px] sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4'>{item?.postal_code || 'empty data'}</span></p>
                          <p className='text-black-900'><span className='text-lg font-medium xs:text-[7px] sm:text-[10px] md:text-[15px] '>City:</span> <span className='xs:text-[7px] sm:text-[10px] md:text-[15px] text-gray-500 font-medium ml-4'>{item?.city || 'empty data'}</span></p>
                        </div>
                      </CustomCard>
                    </>
                  }
                })
              }
            </div>
          ))}
      </div>
    </>
  )
}

export default VendorDetail;
