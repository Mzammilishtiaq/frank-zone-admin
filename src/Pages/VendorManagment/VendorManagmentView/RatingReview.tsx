import CustomCard from '@src/Shared/Card/CustomCard'
import RatingStar from '@src/Shared/RatingStar/RatingStar'
import React, { useEffect, useState } from 'react'
import Profileimg from '@src/assets/icon/Profile-Menu.png';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import { handleToastMessage } from '@src/Shared/toastify';
import Pagination from '@src/Shared/Table/Pagination';
import { VendorRatingModel } from '@src/Shared/Models/UserVendor/VendorRatingModel';
import { Spinner } from '@src/Shared/Spinner/Spinner';
import NoImage from '@src/assets/image/NoImage.png';
import moment from 'moment';
import NoRecored from '@src/Shared/NoRecored/NoRecored';

export interface filterType {
  offset?: number;
  limit?: number;
}
function RatingReview({ vendorid }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [vendorratingdata, setVendorRatingData] = useState([]) as any;
  const [emptymessage, setEmptyMessage] = useState(false)
  const [filterValue, setFilterValue] = React.useState<filterType>({
    offset: 0,
    limit: 10,
  });

  const handleChangePage = (event: any) => {
    setFilterValue({ ...filterValue, offset: event })
  }

  const handleChangeRowsPerPage = (event: any) => {
    setFilterValue({ ...filterValue, limit: event })
  }
  // console.log('vendorratingdata ==', vendorratingdata)
  useEffect(() => {
    fetchvendorRatingApi();
  }, [vendorid])
  const fetchvendorRatingApi = () => {
    setIsLoading(true);
    backendCall({
      url: `/api/admin/vendor_management/${vendorid}/shop/reviews?limit=${filterValue.limit}&offset=${filterValue.offset}`,
      method: 'GET',
      dataModel: VendorRatingModel
    }).then((res) => {
      if (res != res.error) {
  console.log('vendorratingdata ==', res)
        if (res?.data?.rows?.length > 0) {
          setIsLoading(false)
          // handleToastMessage('success', res.message)
          setVendorRatingData(res?.data?.rows);
        } else {
          setIsLoading(false)
          setEmptyMessage(true)
        }
      } else {
        setIsLoading(false)
        handleToastMessage('error', res.message)
      }
    })
  }



  return (
    <div className='Ratings&Reviews py-5'>
      <div className="flex justify-center w-full"></div>
      <h5 className='text-black-900 font-semibold text-[20px] py-1'>Ratings & Reviews</h5>
      <h1 className='text-black-900 text-xl font-semibold text-center my-2 w-full absolute'>{emptymessage && <NoRecored/>}</h1>
      <div className="flex justify-center w-full">
      <Spinner isLoading={isLoading}/>
      </div>
      <div className="grid grid-col-12 overflow-y-auto">
        {
          vendorratingdata && vendorratingdata?.map((item: any) => (
            <CustomCard styleClass='p-3 my-3 '>
              <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                  <img src={item?.user_image || NoImage} className='w-20' alt="" />
                  <div>
                    <p className='text-black-901 font-medium'>{item?.user_name || 'empty data'}</p>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-2'><RatingStar value={item?.rating || null} /></div>
                      <p className='text-black-901 font-semibold'>{item?.rating || 'empty data'}</p>
                    </div>
                  </div>
                </div>
                <div className='text-gray-400 text-sm sm:text-xs'>{moment(item?.date || 'DD-MM-YYYY').utc().format('DD-MM-YYY')}</div>
              </div>
              <div className='text-black-900 text-sm md:text-xs sm:text-xs'>{item?.review || 'empty data'}</div>
            </CustomCard>
          ))
        }
      </div>
     <div className="my-10">
     <Pagination
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        totalCount={vendorratingdata.count}
      />
     </div>
    </div>
  )
}

export default RatingReview
