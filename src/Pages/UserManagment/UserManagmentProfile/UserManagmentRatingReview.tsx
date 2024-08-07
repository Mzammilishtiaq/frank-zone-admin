import CustomCard from '@src/Shared/Card/CustomCard';
import KFC from '@src/assets/image/kfc.png';
import RatingStar from '@src/Shared/RatingStar/RatingStar';
import LazyImage from '@src/Shared/LazyImage/LazyImage';
import React, { useState } from 'react';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import { handleToastMessage } from '@src/Shared/toastify';
import { Spinner } from '@src/Shared/Spinner/Spinner';
import NoImage from '@assets/image/NoImage.png'
import moment from 'moment';


function UserManagmentRatingReview({ data, isloading,noRecord }: any) {
    const [isLoading, setIsLoading] = useState(false)

    console.log('data rating =====', data)


    const DataRating = [
        {
            "order_id": 1,
            "rating": 5,
            "review": "great testing",
            "vendor": {
                "business_name": "CodesOrbit",
                "image_url": "https://frankzone-assets.s3.amazonaws.com/profile/7B9D5046-DE48-479B-A5FD-8B6D41C5260A_1699624966.jpg",
                "VendorShops": [
                    {
                        "city": null,
                        "country": null
                    }
                ]
            },
            "order": {
                "total_items": 1
            }
        }, {
            "order_id": 1,
            "rating": 5,
            "review": "great testing",
            "vendor": {
                "business_name": "CodesOrbit",
                "image_url": "https://frankzone-assets.s3.amazonaws.com/profile/7B9D5046-DE48-479B-A5FD-8B6D41C5260A_1699624966.jpg",
                "VendorShops": [
                    {
                        "city": null,
                        "country": null
                    }
                ]
            },
            "order": {
                "total_items": 1
            }
        }, {
            "order_id": 1,
            "rating": 5,
            "review": "great testing",
            "vendor": {
                "business_name": "CodesOrbit",
                "image_url": "https://frankzone-assets.s3.amazonaws.com/profile/7B9D5046-DE48-479B-A5FD-8B6D41C5260A_1699624966.jpg",
                "VendorShops": [
                    {
                        "city": null,
                        "country": null
                    }
                ]
            },
            "order": {
                "total_items": 1
            }
        }, {
            "order_id": 1,
            "rating": 5,
            "review": "great testing",
            "vendor": {
                "business_name": "CodesOrbit",
                "image_url": "https://frankzone-assets.s3.amazonaws.com/profile/7B9D5046-DE48-479B-A5FD-8B6D41C5260A_1699624966.jpg",
                "VendorShops": [
                    {
                        "city": null,
                        "country": null
                    }
                ]
            },
            "order": {
                "total_items": 1
            }
        }, {
            "order_id": 1,
            "rating": 5,
            "review": "great testing",
            "vendor": {
                "business_name": "CodesOrbit",
                "image_url": "https://frankzone-assets.s3.amazonaws.com/profile/7B9D5046-DE48-479B-A5FD-8B6D41C5260A_1699624966.jpg",
                "VendorShops": [
                    {
                        "city": null,
                        "country": null
                    }
                ]
            },
            "order": {
                "total_items": 1
            }
        },
    ];
    // const ratingData = data.data.data;

    return(


    <div className='grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-4 relative'>
        <Spinner isLoading={isloading} />
        {
            data && data?.map((item: any, index: number) => (
                <CustomCard key={index} styleClass={'p-5 sm:p-1 sm:!shadow-xl !shadow-md !flex-row items-center justify-between w-[100%]'}>
                    <div className='flex flex-col items-center w-40'>
                        <LazyImage src={item?.vendorimageurl || NoImage} className='w-10 md:w-6' alt="" />
                        <h5 className='text-black-900 opacity-1 font-semibold text-left text-sm'>{item?.vendorbusinessname}</h5>
                        <p className='text-black-900 opacity-0.3 text-left text-[10px]'>{item?.vendorshops.city}, {item?.vendorshops.country}</p>
                    </div>
                    <div className='w-full flex flex-col gap-2 sm:gap-[10px]'>
                        <div className='flex items-center justify-between'>
                            <p className='text-green-900 text-normal text-[10px] sm:flex sm:gap-[2px]'><span>Order ID :</span> <span>#{item?.orderid}</span></p>
                            <div className='flex items-start gap-1'>
                                <RatingStar value={item?.rating} />
                            </div>
                        </div>
                        <div>
                            <p className='text-[14px] sm:text-[10px] text-black-900 opacity-0.3'>{item?.review}</p>
                        </div>
                        <div className='flex items-start justify-between'>
                            <p className='text-black-900 font-normal text-[10px]'><span>Total Items: </span><span>{item.order} Items</span></p>
                            <p className='text-black-900 opacity-0.3 text-[10px]'>{moment(item.date).utc().format('DD-MM-YYYY')}</p>
                        </div>
                    </div>
                </CustomCard>
            ))

        }
        <h1 className='text-black-900 text-xl font-semibold text-center my-2 w-full absolute'>{noRecord}</h1>
    </div>
    )
    
}

export default UserManagmentRatingReview;