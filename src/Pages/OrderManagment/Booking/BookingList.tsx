import { Breadcrumbs, Checkbox,Switch, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomCard from '@src/Shared/Card/CustomCard'
import CustomButton from '@src/Shared/CustomButton'
import Search from '@src/Shared/Search/Search'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine'
import Pagination from '@src/Shared/Table/Pagination'
import { Table } from '@src/Shared/Table/Table'
import filledicon from '@src/assets/icon/filter-icon.svg';
import Searchicon from '@src/assets/icon/search-icon.svg';
import viewbtn from '@src/assets/icon/view.svg';
import { booking_type } from '@src/Shared/enum/enum'
import { FaRegCalendarDays } from "react-icons/fa6";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrPowerReset } from 'react-icons/gr'
import { Calendar } from '@src/Shared/Calendar/Calendar'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import ProfileImg from '@src/assets/icon/Profile-Menu.png'
import LazyImage from '@src/Shared/LazyImage/LazyImage'

function BookingList() {
    const navigate = useNavigate();
    const [drop, setDrop] = useState(false);
    const [startshowcalendar, setstartShowCalendar] = useState(false)
    const [endshowcalendar, setEndShowCalendar] = useState(false)
    const [value, onChange] = useState<Value>(new Date());
    function handleDrop(): void {
        setDrop(prevDrop => !prevDrop)
    }
    const [activeTab, setActiveTab] = useState('All');

    const handleTab = (item: string) => {
        setActiveTab(item)
    }
    const ListingTab = [
        "All", "Ecommerce", "Food", "Health & Beauty"
    ]
    let Data1: any = [
        {
            consultors: "John Doe",
            category: "Lawyer",
            customer: "Steve Jobs",
            bookingid: "12230085",
            bookingtype: 'APPOINTMENT',
            date: "04-10-2023",
            time: "10:30 AM"
        },
        {
            consultors: "John Doe",
            category: "Lawyer",
            customer: "Steve Jobs",
            bookingid: "12230085",
            bookingtype: 'APPOINTMENT',
            date: "04-10-2023",
            time: "10:30 AM"
        }, {
            consultors: "John Doe",
            category: "Lawyer",
            customer: "Steve Jobs",
            bookingid: "12230085",
            bookingtype: 'CONSULTATION',
            date: "04-10-2023",
            time: "10:30 AM"
        }, {
            consultors: "John Doe",
            category: "Lawyer",
            customer: "Steve Jobs",
            bookingid: "12230085",
            bookingtype: 'APPOINTMENT',
            date: "04-10-2023",
            time: "10:30 AM"
        }, {
            consultors: "John Doe",
            category: "Lawyer",
            customer: "Steve Jobs",
            bookingid: "12230085",
            bookingtype: 'CONSULTATION',
            date: "04-10-2023",
            time: "10:30 AM"
        }, {
            consultors: "John Doe",
            category: "Lawyer",
            customer: "Steve Jobs",
            bookingid: "12230085",
            bookingtype: 'APPOINTMENT',
            date: "04-10-2023",
            time: "10:30 AM"
        }
    ]

    const column = [
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] sm:text-sm opacity-[1] md:text-sm">{'Consultors'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex  items-start justify-start">
                   <div className="flex items-center gap-1 w-full">
                   <LazyImage src={ProfileImg} className='w-8 h-8' alt="john" />
                   <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px]'>{row.consultors}</p>
                   </div>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Category'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.category}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Customer'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.customer}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Booking ID'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.bookingid}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Booking Type'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className={
                        row.bookingtype === booking_type.consultation ? 'text-blue-900 font-normal sm:text-[10px] md:text-[10px]'
                            : 'text-pink-100 font-normal sm:text-[10px] md:text-[10px]'
                    }>
                        {row.bookingtype?.charAt(0).toUpperCase() + row.bookingtype?.slice(1)?.toLowerCase()}
                    </p>                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Date'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.date}>{row.date}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Time'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.time}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-end justify-center ml-5'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Action'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-end gap-3 ">
                    <CustomButton icon={<LazyImage src={viewbtn} className='w-4' />} handleButtonClick={() => navigate(`/order_managment/listing/listing_profile/${row.phone}`)} type={'button'} />
                </div>
            )
        }
    ]

    return (
        <>
            <CustomCard styleClass={'p-5'}>
                <div role="presentation" className='mb-3'>
                    <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
                    <Link to='/dashboard' className='text-sm hover:border-b-2 hover:border-gray-500'>
                            Dashboard
                        </Link>
                        <Typography color="" className='text-[10px]'>Orders Management</Typography>
                        <Typography color="" className='text-[10px]'>Booking</Typography>
                    </Breadcrumbs>
                    <div className="flex items-center justify-between">
                        <h5 className='text-2xl sm:text-lg font-medium text-[rgba(5, 25, 23, 1)]'>Booking Managment</h5>
                    </div>
                </div>
                <div className="w-full flex items-center gap-6 pb-2">
                    <div className='cursor-pointer relative top-0'>
                        <LazyImage src={filledicon} className='text-2xl text-gray-400 font-thin' handleClick={handleDrop} />

                        {drop && <div className="w-[60vw] sm:w-[90vw] md:w-[50vw] absolute top-10 z-50 border border-gray-300  ">
                            <CustomCard styleClass='p-2'>
                                <div className='flex gap-0 sm:gap-4 sm:w-full sm:overflow-x-auto'>
                                    <div className='text-left sm:w-full flex flex-col sm:items-start gap-1 w-full'>
                                        <h5 className='ml-3 text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>Category</h5>
                                        {
                                            ['Computers & Tablets',
                                                'Cell Phones & Accessies',
                                                'TV & Home Theater',
                                                'Cameras & Photo',
                                                'Kitchen & Photo'
                                            ].map((cateitem) => (
                                                <div className='flex items-center w-full'>
                                                    <Checkbox
                                                        // checked={checked}
                                                        // onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                                                    />
                                                    <p className='text-[13px] sm:text-[8px] md:text-[10px] sm:w-full'>{cateitem}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className=" text-left flex flex-col w-full sm:w-full sm:items-center ">
                                        <h5 className='ml-3 text-black-900 text-[13px] sm:text-[12px] md:text-[12px] font-semibold '>Booking Type</h5>
                                        {
                                            ['Appointment', 'Consulation'].map((status) => (
                                                <div className='flex  items-center'>
                                                    <Checkbox
                                                        // checked={checked}
                                                        // onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                                                    />
                                                    <p className='text-[13px] sm:text-[10px] md:text-[10px]'>{status}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className=" text-left flex flex-col w-full sm:w-full sm:items-center ">
                                        <h5 className='ml-3 text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>Status</h5>
                                        {
                                            ['Shipped', 'Delived', 'Pending', 'In Transit'].map((status) => (
                                                <div className='flex  items-center'>
                                                    <Checkbox
                                                        // checked={checked}
                                                        // onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 13 } }}
                                                    />
                                                    <p className='text-[13px] sm:text-[10px] md:text-[10px]'>{status}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex flex-col w-full sm:w-full sm:items-end">
                                        <div className=" text-left">
                                            <h5 className='text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>Start Date</h5>
                                            <div className='flex flex-col  items-left'>
                                                <div className='flex items-center py-2'>
                                                    <input type="date" placeholder='Select Start Date' className='border-b-2  placeholder:text-sm ' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" text-left">
                                            <h5 className='text-black-900 sm:text-[12px] md:text-[12px] font-semibold '>End Date</h5>
                                            <div className='flex flex-col  items-left'>
                                                <div className='flex items-center py-2'>
                                                    <input type="date" placeholder='Select Start Date' className='border-b-2   outline-transparent placeholder:text-gray-500 cursor-pointer' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-end justify-end gap-2'>
                                    <CustomButton type={'button'} labelClass='text-[13px] text-blue-900' label='Reset' icon={<GrPowerReset />} leftIconClass='text-[13px] text-blue-900' styleClass='' />
                                    <CustomButton type={'button'} label='Apply Filter' labelClass='text-[10px] text-white' styleClass='bg-black-900 px-4 py-1' />
                                </div>

                            </CustomCard>
                        </div>}
                    </div>
                    <div className='w-full'>
                        <Search type={'search'} placeholder={'Start typing to search  for user'} icon={<LazyImage src={Searchicon} className='w-[28px] opacity-[1]' />} styleClass={'sm:placeholder:text-xs px-3 sm:w-50'} />
                    </div>
                </div>
                <div className="flex gap-10 sm:gap-1 sm:overflow-x-auto">
                    {

                        ListingTab.map((item, index) => (
                            <div className={`text-gray-900 flex sm:text-[10px]  cursor-pointer pb-[5px] 
                      ${activeTab === item ? 'border-black-900 border-b-2 text-black-900 font-medium' : null}`}
                                onClick={() => handleTab(item)} key={index}
                            >{item}</div>
                        ))
                    }
                </div>
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
                <Pagination />
            </CustomCard>
        </>
    )
}

export default BookingList
