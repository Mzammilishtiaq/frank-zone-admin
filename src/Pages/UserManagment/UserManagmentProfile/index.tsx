import React, { useState } from 'react'
import { Breadcrumbs, Switch, Typography } from '@mui/material'
import CustomCard from '@src/Shared/Card/CustomCard'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine'
import { Link, useParams } from 'react-router-dom'
import Profileimg from '@src/assets/icon/Profile-Menu.png'
import UserManagmentRatingReview from './UserManagmentRatingReview'
import { usermanagement_type } from '@src/Shared/enum/enum'
import UserManagmentChat from './UserManagmentChat'
import LazyImage from '@src/Shared/LazyImage/LazyImage'
import { backendCall } from '@src/Shared/utils/BackendService/backendCall'
import { Spinner } from '@src/Shared/Spinner/Spinner'
import DeleteCut from '@src/assets/icon/delete-cut.svg'
import { handleToastMessage } from '@src/Shared/toastify'
import { UserManagmentDetailModel } from '@src/Shared/Models/UserManage/UserManagmentDetailModel'
import { UserManagmentRatingModel } from '@src/Shared/Models/UserManage/UserManagmentRatingModel';

import NoImage from '@assets/image/NoImage.png';
import Popup from '@src/Shared/Popup/Popup'
import CustomButton from '@src/Shared/CustomButton'
interface userDeailType {
    status: string
    id: number,
    name: string,
    phone: string,
    email: string,
    image: string,
    address: string,
}
function UserManagmentProfile() {
    const [activeTabId, setactiveTabId] = useState("REVIEW & RATING");
    const [isLoading, setIsLoading] = useState(false);
    const [ratingdata, setRatingData] = useState([]);
    const [emptymessage,setEmptyMessage]= useState('')
    const [actionvalue, setActionValue] = React.useState('')
    const [disableid, setDisableId] = React.useState('')
    const [isdeletepop, setisDeletePop] = React.useState(false);
    const [userdetaildata, setUserDetailData] = useState<userDeailType>({
        id: 0,
        name: '',
        phone: '',
        email: '',
        image: '',
        address: '',
        status:''
    });

    function handleTab(navtab: any): void {
        setactiveTabId(navtab)
    }
    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            FetchUserManagmentDetailData();
        }, 600);

        return () => clearTimeout(delayDebounceFn);
    }, [])
    console.log('userdetaildata ==', userdetaildata)


    let { id } = useParams()
    const FetchUserManagmentDetailData = () => {
        setIsLoading(true)

        backendCall({
            url: `/api/admin/user_management/${id}`,
            method: 'GET',
            dataModel: UserManagmentDetailModel
        }).then((res) => {
            if (res && !res.error) {
                // console.log('user detail', res)
                setIsLoading(false)
                setUserDetailData(res.data)
                // handleToastMessage('success', res?.message)
            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }

    // const userDetaildemi= {
    //     "id": 176,
    //     "name": "Customer Test",
    //     "phone": "+92_3335131833",
    //     "email": "kfc@yopmail.com",
    //     "image": "https://frankzone-assets.s3.amazonaws.com/profile/1310CF08-38C2-412E-B67D-BED9B1726F1C_1695733336.jpg",
    //     "status": "ACTIVE",
    //     "guest_uid": null,
    //     "notification_enabled": 1,
    //     "social_media_platform": null,
    //     "fcm_token": null,
    //     "otp": 123456,
    //     "is_verified": 1,
    //     "stripe_customer_id": "cus_OgWcDUxcrBcAHn",
    //     "createdAt": "2023-09-22T08:38:27.000Z",
    //     "updatedAt": "2024-05-15T05:15:42.000Z",
    //     "address": [
    //         {
    //             "location": "H2FX+F58, 9 Main Harley Rd, Harley Street, Rawalpindi, Punjab, Pakistan"
    //         },
    //         {
    //             "location": "H2FX+F58, 9 Main Harley Rd, Harley Street, Rawalpindi, Punjab, Pakistan"
    //         }
    //     ]
    // }


    React.useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            FetchUserManagmentRatingData();
        }, 600);

        return () => clearTimeout(delayDebounceFn);
    }, [id])
    // console.log('userratingdata ==', ratingdata)

    const FetchUserManagmentRatingData = () => {
        setIsLoading(true)
        backendCall({
            url: `/api/admin/user_management/${id}/ratings`,
            method: 'GET',
            dataModel: UserManagmentRatingModel
        }).then((res) => {
            if (res && !res.error) {
                if (res.data.data && res.data.data.length > 0) {
                    setIsLoading(false)
                    setRatingData(res.data.data);
                    handleToastMessage('success', res?.message);
                } else {
                    setEmptyMessage('No record found.');
                    handleToastMessage('info', 'No record found.');
                    setRatingData([]); // Clear the current data if no records are found
                }
            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }


    const activePopoup = (event: any, id: any) => {
        setisDeletePop(true)
        const action = event.target.checked ? 'ACTIVE' : 'INACTIVE';
        setDisableId(id);
        setActionValue(action);
    }

    const handletoggle = () => {
        backendCall({
            url: `/api/admin/user_management/${disableid}/status?action=${actionvalue}`,
            method: 'PUT',
        }).then((res) => {
            console.log('user managment TOGGLE ==', res)
            if (res && !res.error) {
                setIsLoading(false)
                FetchUserManagmentRatingData();
                // handleToastMessage('success', res?.message)
            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }


    return (
        <>
        <Popup isOpen={isdeletepop} handleClose={() => setisDeletePop(false)} isShowHeader={true} >
        <div className={``}><div className="flex flex-col justify-center items-center gap-3 ">
            <img src={DeleteCut} className="h-[100px] mt-6" />
            <h4 className="font-[900] font-sans mt-5 text-[20px]">Are you sure?</h4>
            <div className="flex flex-col justify-center items-center ">
                <p className="font-medium ">
                    Are you sure you want to <span className="font-[900]">disable</span>{' '}
                </p>
                <p className="font-semibold ">This User?</p>
                <p className="text-sm font-[900] mt-2">User ID {disableid}</p>
            </div>

            <div className="space-y-3 mt-8 flex justify-around w-4/5">
                <CustomButton
                    handleButtonClick={() => setisDeletePop(false)}
                    label={'Cancel'}
                    type={'button'}
                    styleClass={'btn-gray-light w-full  !rounded-xl !font-medium mr-2 bg-gray-400 text-white py-5 px-4 font-semibold '}
                />
                <CustomButton
                    handleButtonClick={handletoggle}
                    label={'Yes, Disable'}
                    type={'button'}
                    styleClass={'btn-red w-full !mt-0 !rounded-xl !font-medium ml-2 bg-red-600 text-white py-4 px-4 font-semibold'}
                />
            </div>
        </div>
        </div>
         </Popup>
        <CustomCard styleClass='p-5 sticky'>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3] text-gray-500'>
                    <Link to='/dashboard' className='text-sm xs:text-[10px] hover:border-b-2 hover:border-gray-500'>
                        Dashboard
                    </Link>
                    <p color="" className='xs:text-[10px]'>User Management</p>
                </Breadcrumbs>
                <div className="flex items-center justify-between">
                    <h5 className='text-2xl font-medium xs:text-xs'>Users Management</h5>
                    <Switch
                        checked={userdetaildata?.status == 'ACTIVE'}
                        onChange={(e) => activePopoup(e, userdetaildata.id)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            </div>
            <SeperatorLine className='opacity-[0.1] -ml-[20px] -mt-2' />
            {<Spinner size='25' isLoading={isLoading} />}
            <div className=" xs:flex-col xs:items-start xs:justify-start  xs:w-full
            sm:flex-col sm:items-start sm:justify-start  sm:w-full
            md:flex-col md:items-start md:justify-start md:w-full
            w-full flex  items-center justify-center  
            ">

                <div className='xs:flex-col xs:border-r-0 xs:mx-0 xs:mb-4 xs:w-full
                sm:flex-col sm:border-r-0 sm:mx-0 sm:mb-4 sm:w-full
                md:flex-col md:border-r-0 md:mx-0 md:mb-4 md:w-full
                flex items-center justify-center-center gap-2 w-3/6  border-r-2 border-opacity-[0.1] border-black-900 mx-5 '>
                    <LazyImage src={userdetaildata?.image || NoImage} className='w-28 h-28 sm:w-20 sm:h-20 xs:w-10 xs:h-10 rounded-full' alt="" />
                    <div className="flex flex-col gap-3 sm:w-full xs:w-full">
                        <div className=' flex gap-3 text-sm xs:text-xs'> <span className='font-semibold text-black-900 text-opacity-[1] '>User Name:</span> <span className='text-gray-500'>{userdetaildata?.name || 'Null'}</span> </div>
                        <div className='flex gap-3 text-sm xs:text-xs'><span className='font-semibold text-black-900 '> Phone Number:</span> <span className='text-gray-500'>{userdetaildata?.phone || 'Null'}</span></div>
                    </div>
                </div>
                <div className='flex w-3/5 mx-5 sm:mx-0 xs:mx-0 gap-3 text-xs sm:w-full xs:w-full'>
                    <span className='font-semibold text-black-900 text-opacity-[1]'>Address:</span>
                    <span className='text-gray-900 text-opacity-[0.9]'>{userdetaildata?.address || 'Null'}</span>
                </div>
            </div>

            <div className="text-left px-4 xs:px-0 pt-4 flex xs:gap-2">
                {
                    ['REVIEW & RATING', 'CHAT'].map((item: string) => (
                        <p
                            className={`text-gray-900  flex xs:gap-2 cursor-pointer mx-3 xs:mx-0 xs:text-xs ${activeTabId === item
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
                {activeTabId === usermanagement_type?.ratingreview && <UserManagmentRatingReview data={ratingdata} isloading={isLoading} noRecord={emptymessage} />}
                {activeTabId === usermanagement_type?.chat && <UserManagmentChat />}
            </div>
        </CustomCard>
        </>
    )
}

export default UserManagmentProfile
