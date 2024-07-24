import React from 'react'

function EcommerceQuestion() {
  return (
    <div className="ecommerceshop-question">
      <h5 className='font-semibold text-xl'>Ecommerces Shop Question</h5>
      {
        [1,1,1,1].map((item) => (
          <div className='my-5'>
            <div className='text-black-900  mb-2 text-[18px] font-normal'><span>Question :</span> <span>When Would you like us to start?</span></div>
            <p className='text-gray-500 font-normal mb-2 text-[16px]'><span>Answer :</span> <span>Information Is Good For Now</span></p>
          </div>
        ))
      }
    </div>
  )
}

export default EcommerceQuestion
