import { Switch } from '@mui/material'
import CustomButton from '@src/Shared/CustomButton'
import { Table } from '@src/Shared/Table/Table'
import viewbtn from '@src/assets/icon/view.svg'
import Profileimg from '@src/assets/icon/Profile-Menu.png'
import React, { useState } from 'react'
import Popup from '@src/Shared/Popup/Popup'
import LazyImage from '@src/Shared/LazyImage/LazyImage'

function HandySpecialities() {
    const [specialpopup, setSpecialPopup] = useState(false);


    const Data1 = [
        {
            Special: "Fever",
            Consultation: "60 mins",
            Charges: "60$",
            Appointment: "60 mins",
            charges: '60$'
        },
        {
            Special: "Heartattack",
            Consultation: "60 mins",
            Charges: "60$",
            Appointment: "60 mins",
            charges: '60$'
        }, {
            Special: "Heartattack",
            Consultation: "60 mins",
            Charges: "60$",
            Appointment: "60 mins",
            charges: '60$'
        }, {
            Special: "Fever",
            Consultation: "60 mins",
            Charges: "60$",
            Appointment: "60 mins",
            charges: '60$'
        }
    ]

    const column = [
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Specialities'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.Special}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Consultation Time'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.Consultation}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Charges'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.Charges}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Appointment Time'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.Appointment}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Charges'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.charges}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-end justify-end -ml-16'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Action'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-end gap-3 -ml-5">
                    <CustomButton type={'button'} icon={<LazyImage src={viewbtn} className='w-5' />} handleButtonClick={() => setSpecialPopup(true)} />
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            )
        }
    ]

    return (
        <div>
            <Popup isOpen={specialpopup} handleClose={() => setSpecialPopup(false)} isShowHeader={true}>
                <div className="flex flex-col gap-3 p-5">
                    <div className="flex items-center">
                        <LazyImage src={Profileimg} className='w-40' />
                        <div className='flex flex-col items-start gap-2 ml-10'>
                            <p className='font-medium text-black-900 text-sm'>Admin Panel</p>
                            <p className='text-sm font-medium text-black-900 text-opacity-[0.5]'>Pharmacy</p>
                            <p className='text-sm font-medium text-black-900 text-opacity-[0.5]'>admin@gmail.com</p>
                            <p className='text-sm font-medium text-black-900 text-opacity-[0.5]'>+(48) 88449922</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <h4 className='font-medium text-black-900 text-lg'>Fever</h4>
                        <Switch
                            checked
                        //    onChange={}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between bg-blue-901 bg-opacity-0.1 rounded p-3'>
                            <div>
                                <p className='text-sm text-blue-901 font-medium'>Consulation</p>
                                <h5 className='text-lg font-semibold text-black-900 '>60 min</h5>
                            </div>
                            <h5 className='text-lg font-semibold text-black-900 '>$60</h5>
                        </div>
                        <div className='flex items-center justify-between bg-blue-901 bg-opacity-0.1 rounded p-3'>
                            <div>
                                <p className='text-sm text-blue-901 font-medium'>Consulation</p>
                                <h5 className='text-lg font-semibold text-black-900 '>60 min</h5>
                            </div>
                            <h5 className='text-lg font-semibold text-black-900 '>$60</h5>
                        </div>
                    </div>
                </div>
            </Popup>
            <Table
                tableLayout="fixed"
                columns={column as any}
                emptyText={'No data found'}
                data={Data1 as any}
                rowKey="id"
                scroll={{ x: 1000 }}
                sticky={true}
                className=""
                onHeaderRow={() => ({
                    className: '',
                })}
            />
        </div>
    )
}

export default HandySpecialities
