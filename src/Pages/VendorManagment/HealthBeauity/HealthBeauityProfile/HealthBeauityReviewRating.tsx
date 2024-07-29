import CustomCard from '@src/Shared/Card/CustomCard'
import RatingStar from '@src/Shared/RatingStar/RatingStar'
import React from 'react'
import Profileimg from '@src/assets/icon/Profile-Menu.png';


function HealthBeauityReviewRating() {
  return (
    <div className='Ratings&Reviews py-5'>
    <h5 className='text-black-900 font-semibold text-[20px] py-1'>Ratings & Reviews</h5>
    <div className="grid grid-col-12">
      {
        [1, 1, 1, 1, 1].map((item) => (
          <CustomCard styleClass='p-3 my-3 '>
            <div className='flex justify-between'>
              <div className='flex items-center gap-3'>
                <img src={Profileimg} className='w-20' alt="" />
                <div>
                  <p className='text-black-901 font-medium'>John Doe</p>
                  <div className='flex items-center gap-2'>
                    <div><RatingStar size={20} /></div>
                    <p className='text-black-901 font-semibold'>4.0</p>
                  </div>
                </div>
              </div>
              <div className='text-gray-400 text-sm sm:text-xs'>08-03-2020</div>
            </div>
            <div className='text-black-900 text-sm'>I recently purchased a product from your e-commerce store, and I couldn't be happier with my experience. The entire process, from browsing the website to receiving my order, was seamless. The website's user-friendly design made it easy to find the product I was looking for, and the detailed product descriptions helped me make an informed choice.</div>
          </CustomCard>
        ))
      }
    </div>
  </div>
  )
}

export default HealthBeauityReviewRating
