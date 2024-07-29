import React, { useState } from 'react';
import Search from '@src/Shared/Search/Search';
import { Table } from '@src/Shared/Table/Table';
import Pagination from '@src/Shared/Table/Pagination';
import viewbtn from '@src/assets/icon/view.svg';
import CustomButton from '@src/Shared/CustomButton';
import Searchicon from '@src/assets/icon/search-icon.svg';
import filledicon from '@src/assets/icon/filter-icon.svg';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs, Link, Switch, Typography } from '@mui/material';
import CustomCard from '@src/Shared/Card/CustomCard';

function HandymanList() {
    function handleDrop(): void {
        setDrop(prevDrop => !prevDrop)
    }
    const [drop, setDrop] = useState(false);
    const navigate = useNavigate();

    const Data1 = [
        {
            firstname: "ali",
            lastname: "khan",
            phone: "222233384",
            email: "alukhan@gmail.com",
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
            status: 'APPROVED'
        }, {
            firstname: "ali5",
            lastname: "khan5",
            phone: "22223338455",
            email: "alukhan55@gmail.com",
            status: 'REJECTED'
        }
    ]

    const column = [
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'First Name'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px]'>{row.firstname}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Last Name'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px] truncate'>{row.lastname}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Phone Number'}</span>
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
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Email'}</span>
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
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Documnet'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-center justify-center px-3">
                    <p className={
                        row.status && row.status === 'PENDING'
                            ? 'text-white bg-yellow-200  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                            : row.status == 'REJECTED'
                                ? 'text-white  bg-red-500  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                                : 'text-white bg-green-500  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
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
                <div className="w-full flex items-center justify-end gap-3">
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <CustomButton icon={<img src={viewbtn} className='w-4' />} type={'button'} handleButtonClick={() => navigate(`/vendor_managment/handyman/handyprofile/${row.phone}`)} />
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
                        <h5 className='text-2xl sm:text-lg font-medium text-[rgba(5, 25, 23, 1)]'>Handyman Vendor Managment</h5>
                    </div>
                </div>
                <div className="w-full flex items-center">
                    <div className='px-2 py-1 cursor-pointer relative top-0'>
                        <img src={filledicon} className='text-2xl text-gray-400 font-thin' onClick={handleDrop} />

                        {drop && <div className="w-72 absolute top-10 z-50">
                            {
                                ["Approved", "Rejected"].map((item) => (
                                    <p className='border border-black-900 border-opacity-0.3 text-black-900 text-opacity-0.3 p-2 bg-white hover:bg-gray-100 sm:text-xs md:text-xs sm:p-1 md:p-1'>{item}</p>

                                ))
                            }
                        </div>}
                    </div>
                    <div className='w-full'>
                        <Search type={'search'} placeholder={'Start typing to search  for user'} icon={<img src={Searchicon} className='w-[28px] opacity-[1]' />} styleClass={'sm:placeholder:text-xs px-3 sm:w-50'} />
                    </div>
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

export default HandymanList
