import React, { useEffect, useState } from 'react'
import { VendorQuestionModel } from '@src/Shared/Models/UserVendor/VendorQuestionModel';
import Pagination from '@src/Shared/Table/Pagination'
import { handleToastMessage } from '@src/Shared/toastify';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import { Spinner } from '@src/Shared/Spinner/Spinner';
export interface filterType {
  offset?: number;
  limit?: number;
}
function Questionnare({ vendorid }: any) {
  const [isloading, setIsLoading] = useState(false)
  const [vendordetailquestionairepdata, setVendorDetailQuestionaireData] = useState([]) as any;
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


  console.log('vendordetailquestionairepdata === ', vendordetailquestionairepdata)
  useEffect(() => {
    FetchVendorQuestionnaireDetailApi();
  }, [])
  const FetchVendorQuestionnaireDetailApi = () => {
    setIsLoading(true)
    backendCall({
      url: `/api/admin/vendor_management/${vendorid.id}/shop/questionnaire?limit=${filterValue.limit}&offset=${filterValue.offset}`,
      method: 'GET',
      dataModel: VendorQuestionModel
    }).then((res) => {
      if (res != res.error) {
        // console.log('res question ventor', res)
        setIsLoading(false)
        setVendorDetailQuestionaireData(res.data)
        handleToastMessage('success', res.message);
      } else {
        setIsLoading(false)
        handleToastMessage('error', res?.message)
      }
    })
  }

  return (
    <div className="ecommerceshop-question">
      <h5 className='font-semibold xs:text-sm text-xl'>Ecommerces Shop Question</h5>
      <Spinner isLoading={isloading} classname='ms-auto me-auto'/>
      {
        vendordetailquestionairepdata.rows && vendordetailquestionairepdata.rows.map((item: any) => (
          <div className='my-5' key={item?.id}>
            <div className='text-black-900  mb-2 xs:text-[10px] text-[18px] font-normal'><span>Question :</span> <span>{item?.question_name}</span></div>
            <p className='text-gray-500 font-normal mb-2 xs:text-[8px] text-[16px]'><span>Answer :</span> <span>{item?.answer}</span></p>
          </div>
        ))
      }

      <Pagination
       handleChangePage={handleChangePage}
       handleChangeRowsPerPage={handleChangeRowsPerPage}
       totalCount={vendordetailquestionairepdata.count}
      />
    </div>
  )
}

export default Questionnare
