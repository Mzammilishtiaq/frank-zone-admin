import { Breadcrumbs, Link, Switch, Typography } from '@mui/material'
import CustomCard from '@src/Shared/Card/CustomCard'
import CustomButton from '@src/Shared/CustomButton'
import Search from '@src/Shared/Search/Search'
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine'
import Pagination from '@src/Shared/Table/Pagination'
import { Table } from '@src/Shared/Table/Table'
import filledicon from '@src/assets/icon/filter-icon.svg';
import Searchicon from '@src/assets/icon/search-icon.svg';
import viewbtn from '@src/assets/icon/view.svg';
import { Status } from '@src/Shared/enum/enum'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ListingList() {
    const navigate = useNavigate();
    const [drop, setDrop] = useState(false);
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
    let Data1:any = [
        {
            firstname: "ali",
            lastname: "khan",
            phone: "222233384",
            email: "alukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.com",
            status: 'PENDING'
        },
        {
            firstname: "ali2",
            lastname: "khan2",
            phone: "22223338422",
            email: "alukhan2@gmail.com",
            status: 'REJECTED'
        }, {
            firstname: "ali3",
            lastname: "khan3",
            phone: "22223338433",
            email: "alukhan3@gmail.com",
            status: 'DELIVERED'
        }, {
            firstname: "ali4",
            lastname: "khan4",
            phone: "22223338444",
            email: "alukhan4@gmail.com",
            status: 'PENDING'
        }, {
            firstname: "ali",
            lastname: "khan",
            phone: "222233384",
            email: "alukhan@gmail.com",
            status: 'SHIPPED'
        }, {
            firstname: "ali5",
            lastname: "khan5",
            phone: "22223338455",
            email: "alukhan55@gmail.com",
            status: 'IN TRANSIT'
        }
    ]

    const column = [
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Order ID'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px]'>{row.phone}</p>
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
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.lastname}</p>
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
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.phone}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Item'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row.email}</p>
                </div>
            )
        },{
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Price'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row.email}</p>
                </div>
            )
        },
        
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Status'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-center justify-center px-3">
                    <p className={
                        row.status && row.status === 'PENDING' ? 'text-white bg-yellow-200  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                            : row.status == 'REJECTED' ? 'text-white  bg-red-500  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                                : row.status == 'IN TRANSIT' ? 'text-white  bg-blue-900  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                                :row.status == 'SHIPPED' ? 'text-white  bg-pink-100  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                                    : 'text-white bg-green-500  rounded px-5 py-1 font-normal'
                    }>
                        {row.status?.charAt(0).toUpperCase() + row.status?.slice(1)?.toLowerCase()}
                    </p>
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
                <div className="w-full flex items-center justify-end gap-3 -ml-14">
                    <CustomButton icon={<img src={viewbtn} className='w-4' />} handleButtonClick={() => navigate(`/order_managment/listing/listing_profile/${row.phone}`)} type={'button'} />
                </div>
            )
        }
    ]

    return (
        <>
            <CustomCard styleClass={'p-5'}>
                <div role="presentation" className='mb-3'>
                    <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
                        <Link underline="hover" color="inherit" href='#' className='text-sm'>
                            Dashboard
                        </Link>
                        <Typography color="" className='text-[10px]'>Vendor Managment</Typography>
                    </Breadcrumbs>
                    <div className="flex items-center justify-between">
                        <h5 className='text-2xl sm:text-lg font-medium text-[rgba(5, 25, 23, 1)]'>Orders Listing Management</h5>
                    </div>
                </div>
                <div className="w-full flex items-center gap-5 pb-2">
                    <div className='cursor-pointer relative top-0'>
                        <img src={filledicon} className='text-2xl text-gray-400 font-thin' onClick={handleDrop} />

                        {drop && <div className="w-72 absolute top-10 z-50">
                            <p className='border border-black-900 border-opacity-0.3 text-black-900 text-opacity-0.3 p-2 bg-white '>Approved</p>
                            <p className='border border-black-900 border-opacity-0.3  text-black-900 text-opacity-0.3 p-2 bg-white'>Rejected</p>
                        </div>}
                    </div>
                    <div className='w-full'>
                        <Search type={'search'} placeholder={'Start typing to search  for user'} icon={<img src={Searchicon} className='w-[28px] opacity-[1]' />} styleClass={'sm:placeholder:text-xs px-3 sm:w-50'} />
                    </div>
                </div>
                <div className="flex gap-5 sm:gap-1 sm:overflow-x-auto">
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

export default ListingList
