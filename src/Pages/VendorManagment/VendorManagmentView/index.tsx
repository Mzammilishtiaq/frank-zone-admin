import React, { useEffect, useState } from 'react'
import { Breadcrumbs, Typography } from '@mui/material';
import CustomCard from '@src/Shared/Card/CustomCard';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import { profileTypes } from '@src/Shared/enum/enum';
import Detail from './VendorDetail';
import DocumentVerfication from './DocumentVerfication';
import Product from './Products';
import Question from './Questionnare';
import RatingReview from './RatingReview';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Spinner } from '@src/Shared/Spinner/Spinner';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import { handleToastMessage } from '@src/Shared/toastify';
import { VendorDetailModel } from '@src/Shared/Models/UserVendor/VendorDetailModel';
import { VendorDetailShopModel } from '@src/Shared/Models/UserVendor/VendorDetailShopModel';

interface vendordetaildatatype {
  id: number,
  firstname: string,
  lastname: string,
  phone: string,
  email: string,
  image: string
}
function VendorManagmentProfile() {
  const [activeTab, setActiveTab] = useState('Vendor Details');
  const [searchParams, setSearchParams] = useSearchParams();
  const [vendordetailshopdata, setVendorDetailShopData] = useState([]) as any;
  const [vendordetaildata, setVendorDetailData] = useState<vendordetaildatatype>({
    id: 1,
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    image: ''
  });
  const [isloading, setIsLoading] = useState(false);

  const handleTab = (item: string) => {
    setActiveTab(item)
  }
  const ProfileTab = [
    "Vendor Details",
    "Questionnaire",
    "Documents Verification",
    "Products",
    "Reviews & Ratings",
  ]
  const { id} = useParams();
  const moduleid = searchParams.get('module_id')
  console.log('use parems',id,moduleid)


  // console.log('vendordetailquestionairepdata === ', vendordetailquestionairepdata)


  // console.log('vendordetailshopdata === ', vendordetailshopdata)
  useEffect(() => {
    let dounpot = setTimeout(() => {
      FetchVendorShopDetailApi();
    }, 600)

    return () => clearTimeout(dounpot)
  }, [])

  const FetchVendorShopDetailApi = () => {
    setIsLoading(true)
    backendCall({
      url: `/api/admin/vendor_management/${vendordetaildata.id}/shop`,
      method: 'GET',
      dataModel: VendorDetailShopModel
    }).then((res) => {
      // console.log('res detail ventor shop ==', res)
      if (res != res.error) {
        setIsLoading(false)
        setVendorDetailShopData(res.data)
        handleToastMessage('success', res.message);
      } else {
        setIsLoading(false)
        handleToastMessage('error', res?.message)
      }
    })
  }

  // vendor detail api 
  useEffect(() => {
    let dounpot = setTimeout(() => {
      FetchVendorDetailApi();
    }, 600)

    return () => clearTimeout(dounpot)
    
  }, [])

  const FetchVendorDetailApi = () => {
    setIsLoading(true)
    backendCall({
      url: `/api/admin/vendor_management/${id}`,
      method: 'GET',
      dataModel: VendorDetailModel
    }).then((res) => {
      if (res != res.error) {
        console.log('res detail ventor', res)
        setIsLoading(false)
        setVendorDetailData(res.data)
        handleToastMessage('success', res.message);
      } else {
        setIsLoading(false)
        handleToastMessage('error', res?.message)
      }
    })
  }


  return (
    <div>
      <CustomCard styleClass={'p-5 sticky'}>
        <div role="presentation" className='mb-3'>
          <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
            <Link to='/dashboard' className='text-sm hover:border-b-2 xs:text-xs hover:border-gray-500'>
              Dashboard
            </Link>
            <p  className='text-[10px] xs:text-xs'>Ecommerce Vendors Management</p>
          </Breadcrumbs>
          <div className="flex items-center justify-between">
            <h5 className='text-2xl sm:text-lg xs:text-xs font-medium text-[rgba(5, 25, 23, 1)]'>{searchParams.get('module_id') == '1' ? 'Ecommerce' : searchParams.get('module_id') == '2' ? 'Food' : searchParams.get('module_id') == '3' ? 'Health & Beauty' : 'Handyman'} Vendors Management</h5>
          </div>
        </div>
        <SeperatorLine className='!border !border-black-900 !border-opacity-0.1 -ml-5 ' />

        <div className="flex gap-5 sm:gap-1 xs:overflow-x-auto sm:overflow-x-auto md:overflow-x-auto sm:w-[100vw] xs:w-[100vw]">
          {

            ProfileTab.map((item, index) => (
              <div className={`text-gray-900 flex sm:text-[8px] md:text-[10px] xs:text-[6px]  cursor-pointer pb-[5px] 
                      ${activeTab === item ? 'border-black-900 border-b-2 text-black-900 font-medium' : null}`}
                onClick={() => handleTab(item)} key={index}
              >{item}</div>
            ))
          }
        </div>
        <SeperatorLine className='!border !border-black-900 !border-opacity-0.1 -mt-[13px]  -ml-5' />
        {/* <Spinner isLoading={isloading} classname='my-3' /> */}

        <div className="overflow-y-auto lg:h-96 md:h-97 sm:h-[30rem]  no-scrollbar">
          {activeTab === profileTypes?.vendor_details && <Detail vendordetail={vendordetaildata} vendordetailshop={vendordetailshopdata} />}
          {activeTab === profileTypes?.products && <Product />}
          {activeTab === profileTypes?.questionnaire && <Question vendorid={vendordetaildata} />}
          {activeTab === profileTypes?.documents_verification && <DocumentVerfication vendorid={vendordetaildata} />}
          {activeTab === profileTypes?.reviews_ratings && <RatingReview vendorid={vendordetaildata} />}
        </div>
      </CustomCard>
    </div>
  )
}

export default VendorManagmentProfile;