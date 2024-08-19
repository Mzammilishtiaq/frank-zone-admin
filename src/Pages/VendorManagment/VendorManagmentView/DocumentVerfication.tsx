import CustomButton from '@src/Shared/CustomButton'
import Popup from '@src/Shared/Popup/Popup'
import { Table } from '@src/Shared/Table/Table'
import React, { useEffect, useState } from 'react'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'
import frontcard from '@src/assets/image/front.jpeg'
import backcard from '@src/assets/image/back.jpeg'
import passport from '@src/assets/image/passport.jpg'
import CircleCross from '@src/assets/icon/circlecross-icon.svg'
import LazyImage from '@src/Shared/LazyImage/LazyImage'
import TextArea from '@src/Shared/TextArea/TextArea'
import { backendCall } from '@src/Shared/utils/BackendService/backendCall'
import { handleToastMessage } from '@src/Shared/toastify'
import { VendorDocumentModel } from '@src/Shared/Models/UserVendor/VendorDocumentModel'
import moment from 'moment'
import { Spinner } from '@src/Shared/Spinner/Spinner'
import NoImage from '@assets/image/NoImage.png'
import NoRecored from '@src/Shared/NoRecored/NoRecored'
interface imgpopupdataType {
    img: string;
    name: string;
}

function DocumentVerfication({ vendorid }: any) {
    const [deletepopup, setDeletePopup] = useState(false);
    const [imgpopup, setImgPopup] = useState(false);
    const [emptymessage, setEmptyMessage] = useState(false)
    const [imgpopupdata, setImgPopupData] = useState<imgpopupdataType>({
        img: '',
        name: ''
    });
    const [documentverficationdata, setDocumentVerficationData] = useState([]) as any;
    const [isLoading, setIsLoading] = useState(false);
    const handlepopimg = (imgurl: any, item: any) => {
        setImgPopupData({
            ...imgpopupdata, img: imgurl, name: item
        })
        setImgPopup(true)
    }


    console.log('resdetailventordocumentverfication ==', documentverficationdata)
    useEffect(() => {
        let dounpot = setTimeout(() => {
            FetchVendorShopDetailApi();
        }, 600)

        return () => clearTimeout(dounpot)
    }, [vendorid])

    const handleupdateVendorShop = (id: any, type: any, action: any) => {
        setIsLoading(true);
        backendCall({
            url: `/api/admin/vendor_management/documents/${id}/status?documentType=${type}&action=${action}`,
            method: 'PUT',
        }).then((res) => {
            if (res != res.error) {
                console.log(res)
                FetchVendorShopDetailApi()
            } else {

            }
        })
    }
    const FetchVendorShopDetailApi = () => {
        setIsLoading(true)
        backendCall({
            url: `/api/admin/vendor_management/${vendorid}/documents`,
            method: 'GET',
            dataModel: VendorDocumentModel
        }).then((res) => {
            //   console.log('resdetailventordocumentverfication ==', res)
            if (!res.error) {
                setDocumentVerficationData(res.data.rows)
                setIsLoading(false)
                // handleToastMessage('success', res.message);

            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }


    // const Data1 = [
    //     {
    //         docname: "Front(Card)",
    //         date: "04-06-2024",
    //         status: "APPROVED",
    //         filelabel: '@src/assets/image/front.jpeg',
    //         img: frontcard
    //     }, {
    //         docname: "Back(Card)",
    //         date: "04-06-2024",
    //         status: "PENDING",
    //         filelabel: '@src/assets/image/back.jpeg',
    //         img: backcard
    //     }, {
    //         docname: "Passport(Card)",
    //         date: "04-06-2024",
    //         status: "APPROVED",
    //         filelabel: '@src/assets/image/passport.jpg',
    //         img: passport
    //     }
    // ]


    const DocumentColumn = [
        {
            title: (
                <div className="w-full flex items-start justify-start">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Document Name'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => (
                <div className='w-full flex items-start justify-start'>
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]' title={row.name}>{row.name}</p>
                </div>
            ))
        }, {
            title: (
                <div className=" w-full flex items-start justify-start">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Date'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => (
                <div className='w-full flex items-start justify-start'>
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{moment(row?.date).utc().format('DD-MM-YYYY')}</p>
                </div>
            ))
        }, {
            title: (
                <div className="w-full flex items-start justify-start">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Document'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className={
                        row.status && row.status === 'PENDING'
                            ? 'text-white bg-orange-500  rounded px-3 font-medium py-1'
                            : row.status == 'REJECTED'
                                ? 'text-white  bg-red-500  rounded px-3 font-medium py-1'
                                : 'text-white bg-green-500  rounded px-3 font-medium py-1'
                    }>
                        {row.status?.charAt(0).toUpperCase() + row.status?.slice(1)?.toLowerCase()}
                    </p>
                </div>
            ))
        }, {
            title: (
                <div className="w-full flex items-start justify-start">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Files'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => (
                <div className='w-40 gap-1 flex items-center justify-around'>
                    <LazyImage src={row?.image || NoImage} alt={row?.name} className='h-7 w-7 cursor-pointer' handleClick={() => handlepopimg(row.image, row.name)} />
                    <CustomButton type={"button"} handleButtonClick={() => handlepopimg(row.image, row.name)} styleClass='hover:border-b-2 border-gray-300 rounded-none text-[10px] cursor-pointer' label={row.name + ' Url'} />
                </div>
            ))
        }, {
            title: (
                <div className="w-full flex items-center justify-end -ml-5">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Actions'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => {
                return (
                    <div className={`w-full flex items-center justify-end gap-1 -ml-5`}>
                        <VscCheck className={` bg-green-500 text-white text-[20px] rounded-full p-1 w-6 h-6 cursor-pointer ${row.status !== 'PENDING' ? '!text-gray-800 !bg-gray-300 pointer-events-none opacity-50' : ''}`} onClick={() => handleupdateVendorShop(row.id, row.type, 'APPROVED')} />
                        <VscChromeClose className={`bg-red-500 text-white text-[20px] rounded-full p-1 w-6 h-6 cursor-pointer ${row.status !== 'PENDING' ? '!text-gray-800 !bg-gray-300 pointer-events-none opacity-50' : ''}`}
                            onClick={() => setDeletePopup(true)}
                        />
                    </div>
                );
            })
        }
    ]



    return (
        <div>
            <Popup isOpen={deletepopup} handleClose={() => setDeletePopup(false)} isShowHeader={true}>
                <div className="flex flex-col items-center gap-5 pb-3 m-3">
                    <LazyImage src={CircleCross} className="h-70 w-70" />
                    <h5 className="font-semibold text-2xl">Rejection</h5>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-normal text-sm text-gray-500 ">
                            Kindly Give Reason For Rejection
                        </p>
                    </div>
                    <TextArea name={''} placeholder='Enter Your Reason Here...' className='w-full' />
                    <div className="space-y-3 flex justify-around w-4/5">
                        <CustomButton
                            handleButtonClick={() => setDeletePopup(false)}
                            label={'Close'}
                            type={'button'}
                            styleClass={'btn-gray-light w-full  !rounded-xl !font-medium mr-2 bg-gray-200 text-black-900 p-3 font-semibold  '}
                        />
                        <CustomButton
                            // handleButtonClick={handleDelete}
                            label={'Yes, Reject'}
                            type={'button'}
                            variant={'outlined'}
                            styleClass={'btn-red w-full !mt-0 !rounded-xl !font-medium ml-2 bg-red-600 text-white p-3 font-semibold'}

                        />
                    </div>
                </div>
            </Popup>
            <Popup isOpen={imgpopup} handleClose={() => setImgPopup(false)} isShowHeader={true} isLoading={isLoading}>
                <div className="flex flex-col gap-2 text-center items-center justify-center px-5">
                    <LazyImage src={imgpopupdata.img} className='w-[30vw] h-[30vh] rounded-xl' />
                    <h5 className='text-black-900 font-medium'>{imgpopupdata.name}</h5>
                </div>
            </Popup>


            <Table
                tableLayout="fixed"
                columns={DocumentColumn as any}
                emptyText={documentverficationdata ? (
                    <NoRecored />
                ) : (
                    <div className="flex justify-center w-full my-3">
                        <Spinner isLoading={isLoading} />
                    </div>
                )}
                data={documentverficationdata}
                rowKey="item_id"
                scroll={{ x: 1000 }}
                sticky={true}
                className="custom-table"
                onHeaderRow={() => ({
                    className: '',
                })}
            />
        </div>
    )
}

export default DocumentVerfication


