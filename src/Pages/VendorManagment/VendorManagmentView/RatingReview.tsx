import CustomCard from '@src/Shared/Card/CustomCard'
import RatingStar from '@src/Shared/RatingStar/RatingStar'
import React, { useEffect, useState } from 'react'
import Profileimg from '@src/assets/icon/Profile-Menu.png';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import { handleToastMessage } from '@src/Shared/toastify';
import Pagination from '@src/Shared/Table/Pagination';
import { VendorRatingModel } from '@src/Shared/Models/UserVendor/VendorRatingModel';

export interface filterType {
  offset?: number;
  limit?: number;
}
function RatingReview({ vendorid }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [vendorratingdata, setVendorRatingData] = useState([]) as any;
  const [filterValue, setFilterValue] = React.useState<filterType>({
    offset: 0,
    limit: 10,
});

const handleChangePage = (event:any)=>{
setFilterValue({...filterValue, offset:event})
}

const handleChangeRowsPerPage = (event:any)=>{
  setFilterValue({...filterValue, limit:event})
}
// console.log('vendorratingdata ==', vendorratingdata)
  useEffect(() => {
    fetchvendorRatingApi();
  }, [])
  const fetchvendorRatingApi = () => {
    setIsLoading(true);
    backendCall({
      url:`/api/admin/vendor_management/${vendorid}/shop/reviews?limit=10&offset=0`,
      method: 'GET',
      dataModel: VendorRatingModel
    }).then((res) => {
      if (res != res.error) {   
        setIsLoading(false)
        handleToastMessage('success', res.message)
        setVendorRatingData(res.data);
      } else {
        setIsLoading(false)
        handleToastMessage('error', res.message)
      }
    })
  }



  return (
    <div className='Ratings&Reviews py-5'>
      <h5 className='text-black-900 font-semibold text-[20px] py-1'>Ratings & Reviews</h5>
      <div className="grid grid-col-12 overflow-y-auto">
        {
          [1, 1, 1, 1, 1].map((item) => (
            <CustomCard styleClass='p-3 my-3 '>
              <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                  <img src={Profileimg} className='w-20' alt="" />
                  <div>
                    <p className='text-black-901 font-medium'>John Doe</p>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-2'><RatingStar value={2} /></div>
                      <p className='text-black-901 font-semibold'>4.0</p>
                    </div>
                  </div>
                </div>
                <div className='text-gray-400 text-sm sm:text-xs'>08-03-2020</div>
              </div>
              <div className='text-black-900 text-sm md:text-xs sm:text-xs'>I recently purchased a product from your e-commerce store, and I couldn't be happier with my experience. The entire process, from browsing the website to receiving my order, was seamless. The website's user-friendly design made it easy to find the product I was looking for, and the detailed product descriptions helped me make an informed choice.</div>
            </CustomCard>
          ))
        }
      </div>
      <Pagination
      //  handleChangePage={handleChangePage}
      //  handleChangeRowsPerPage={handleChangeRowsPerPage}
      //  totalCount={vendordetailquestionairepdata.count}
      />
    </div>
  )
}

export default RatingReview
