import CustomCard from '@src/Shared/Card/CustomCard';
import KFC from '@src/assets/image/kfc.png';
import RatingStar from '@src/Shared/RatingStar/RatingStar';

function UserManagmentRatingReview() {
  

    return (
            <div className='grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-4 '>
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                        <CustomCard key={index} styleClass={'p-5 sm:p-1 sm:!shadow-xl !shadow-md !flex-row items-center justify-between w-[100%]'}>
                            <div className='flex flex-col items-center w-40'>
                                <img src={KFC} className='w-10 md:w-6' alt="" />
                                <h5 className='text-black-900 opacity-1 font-semibold text-left text-sm'>KFC</h5>
                                <p className='text-black-900 opacity-0.3 text-left text-[10px]'>Berlin, Germany</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 sm:gap-[10px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-green-900 text-normal text-[10px] sm:flex sm:gap-[2px]'><span>Order ID :</span> <span>#2324324</span></p>
                                    <div>
                                        <RatingStar size={20} />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[14px] sm:text-[10px] text-black-900 opacity-0.3'>" If You Want A True Outback Experience, Or Perhaps An Experience That Feels As Though You Are On Mars, Then Look No Further."</p>
                                </div>
                                <div className='flex items-start justify-between'>
                                    <p className='text-black-900 font-normal text-[10px]'><span>Total Items: </span><span>5 Items</span></p>
                                    <p className='text-black-900 opacity-0.3 text-[10px]'>Jan 30,2023</p>
                                </div>
                            </div>

                            
                        </CustomCard>
                    ))
                }
            </div>
    )
}

export default UserManagmentRatingReview;