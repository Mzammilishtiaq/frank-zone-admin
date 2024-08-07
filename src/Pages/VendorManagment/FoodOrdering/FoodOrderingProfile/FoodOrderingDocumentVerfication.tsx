import CustomButton from '@src/Shared/CustomButton'
import Popup from '@src/Shared/Popup/Popup'
import { Table } from '@src/Shared/Table/Table'
import React, { useState } from 'react'
import { VscCheck, VscChromeClose } from 'react-icons/vsc'
import frontcard from '@src/assets/image/front.jpeg'
import backcard from '@src/assets/image/back.jpeg'
import passport from '@src/assets/image/passport.jpg'
import CircleCross from '@src/assets/icon/circlecross-icon.svg'
import LazyImage from '@src/Shared/LazyImage/LazyImage'
import TextArea from '@src/Shared/TextArea/TextArea'

function FoodOrderingDocumentVerfication() {
    const [deletepopup, setDeletePopup] = useState(false);
    const [imgpopup, setImgPopup] = useState(false);
    const [imgpopupdata, setImgPopupData] = useState('');
    const handlepopimg = (imgurl: any) => {
        setImgPopupData(imgurl)
        setImgPopup(true)
    }


    const Data1 = [
        {
            docname: "Front(Card)",
            date: "04-06-2024",
            status: "APPROVED",
            filelabel: '@src/assets/image/front.jpeg',
            img: frontcard
        }, {
            docname: "Back(Card)",
            date: "04-06-2024",
            status: "PENDING",
            filelabel: '@src/assets/image/back.jpeg',
            img: backcard
        }, {
            docname: "Passport(Card)",
            date: "04-06-2024",
            status: "APPROVED",
            filelabel: '@src/assets/image/passport.jpg',
            img: passport
        }
    ]
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
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate' title={row.docname}>{row.docname}</p>
                </div>
            ))
        }, {
            title: (
                <div className=" w-full flex items-center justify-center">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Date'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => (
                <div className='w-full flex items-center justify-center'>
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate' title={row.date}>{row.date}</p>
                </div>
            ))
        }, {
            title: (
                <div className="w-full flex items-center justify-center">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Document'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
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
                <div className="w-full flex items-center justify-center">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Files'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => (
                <div className='w-full flex items-center justify-center'>
                    <CustomButton type={"button"} handleButtonClick={() => handlepopimg(row.img)} styleClass='hover:border-b-2 border-gray-300 rounded-none' label={row.filelabel} />
                </div>
            ))
        }, {
            title: (
                <div className="w-full flex items-end justify-end">
                    <p className='font-semibold text-black-900 text-[15px] opacity-[1]'>{'Actions'}</p>
                </div>
            ),
            dataindex: "name",
            key: "name",
            render: ((name: string, row: any) => {
                return (
                    <div className={`w-full flex items-center justify-end gap-1`}>
                        <VscCheck className={` bg-green-500 text-white text-[20px] rounded-full p-1 w-6 h-6 ${row.status !== 'PENDING' ? '!text-gray-800 !bg-gray-300 pointer-events-none opacity-50' : ''}`} />
                        <VscChromeClose className={`bg-red-500 text-white text-[20px] rounded-full p-1 w-6 h-6 ${row.status !== 'PENDING' ? '!text-gray-800 !bg-gray-300 pointer-events-none opacity-50' : ''}`}
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
            <div className="flex flex-col items-center gap-7 m-5">
                    <LazyImage src={CircleCross} className="h-[70px]" />
                    <h5 className="font-bold text-2xl mt-5">Rejection</h5>
                    <div className="flex flex-col justify-center items-center">
                        <p className="font-medium text-sm text-gray-400 ">
                            Kindly Give Reason For Rejection
                        </p>
                    </div>
                    <TextArea name={''} placeholder='Enter Your Reason Here...' className='w-full'/>
                    <div className="space-y-3 flex justify-around w-4/5">
                        <CustomButton
                            handleButtonClick={() => setDeletePopup(false)}
                            label={'Close'}
                            type={'button'}
                            styleClass={'bg-gray-300 py-4 text-white w-full  !rounded-xl !font-medium mr-2 '}
                        />
                        <CustomButton
                            // handleButtonClick={handleDelete}
                            label={'Yes, Reject'}
                            type={'button'}
                            variant={'outlined'}
                            styleClass={'bg-red-500 text-white w-full !mt-0 !rounded-xl !font-medium ml-2'}

                        />
                    </div>
                </div>
            </Popup>
            <Popup isOpen={imgpopup} handleClose={() => setImgPopup(false)} isShowHeader={true}>
                <div className="flex flex-col justify-center items-center">
                    <LazyImage src={imgpopupdata} className='h-full w-full p-5' />
                </div>
            </Popup>


            <Table
                tableLayout="fixed"
                columns={DocumentColumn as any}
                emptyText={'No data found'}
                data={Data1 as any}
                rowKey="id"
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

export default FoodOrderingDocumentVerfication


