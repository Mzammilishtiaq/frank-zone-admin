import React, { useState } from 'react';
import { Breadcrumbs, Link, Switch, Typography } from '@mui/material';
import CustomCard from '@src/Shared/Card/CustomCard';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import { TbAdjustmentsFilled } from "react-icons/tb";
import Search from '@src/Shared/Search/Search';
import { Table } from '@src/Shared/Table/Table';
import Pagination from '@src/Shared/Table/Pagination';
import viewbtn from '@src/assets/icon/view.svg';
import CustomButton from '@src/Shared/CustomButton';
import Searchicon from '@src/assets/icon/search-icon.svg';
import filledicon from '@src/assets/icon/filter-icon.svg';

function Handman() {
    const [drop, setDrop] = useState(false);
    function handleDrop(): void {
        setDrop(prevDrop => !prevDrop)
    }
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
                <div className='flex justify-start items-start'>
                    <span className="font-semibold text-[20px]  text-black-900 opacity-[1]">{'First Name'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.firstname}</p>
                </div>
            )
        },
        {
            title: (
                <div className='flex items-start justify-start'>
                    <span className="text-black-900 capitalize font-semibold opacity-[1] text-[20px]">{'Last Name'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.lastname}</p>
                </div>
            )
        }, {
            title: (
                <div className='flex items-start justify-start'>
                    <span className="text-black-900 capitalize font-semibold opacity-[1] text-[20px]">{'Phone Number'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.phone}</p>
                </div>
            )
        }, {
            title: (
                <div className='flex items-start justify-start'>
                    <span className="text-black-900 capitalize font-semibold opacity-[1] text-[20px]">{'Email'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.email}</p>
                </div>
            )
        }, {
            title: (
                <div className='flex items-start justify-start'>
                    <span className="text-black-900 capitalize font-semibold opacity-[1] text-[20px]">{'Documnet'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-start justify-start px-3">
                    <p className={
                        row.status && row.status === 'PENDING'
                            ? 'text-white bg-orange-500  rounded px-5 py-1'
                            : row.status == 'REJECTED'
                                ? 'text-white  bg-red-500  rounded px-5 py-1'
                                : 'text-white bg-green-500  rounded px-5 py-1'
                    }>
                        {row.status?.charAt(0).toUpperCase() + row.status?.slice(1)?.toLowerCase()}
                    </p>
                </div>
            )
        }, {
            title: (
                <div className='flex items-start justify-start'>
                    <span className="text-black-900 capitalize font-semibold opacity-[1] text-[20px]">{'Action'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-center justify-start">
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <CustomButton icon={<img src={viewbtn} className='w-5' />} type={'button'} />
                </div>
            )
        }
    ]

    return (
       <div className="px-4">
         <CustomCard styleClass={'px-10 py-2 '}>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href='/dashboard' className=''>
                        Dashboard
                    </Link>
                    <Typography color="text-sm">Vendor Managment</Typography>
                </Breadcrumbs>
                <div className="flex items-center justify-between">
                    <h5 className='text-2xl font-semibold font-sans'>Handman Vendor Managment</h5>
                </div>
            </div>
            <div className="w-full flex items-center">
                <div className='px-2 py-1 cursor-pointer relative top-0'>
                    <img src={filledicon} className='text-2xl text-gray-400 font-thin' onClick={handleDrop} />

                    {drop && <div className="w-72 absolute top-10 z-50">
                        <p className='text-gray-600 font-medium border-gray-400 border-2  px-5 py-2 bg-white hover:bg-gray-300 hover:text-white'>Approved</p>
                        <p className='text-gray-600 font-medium border-gray-400 border-2  px-5 py-2 bg-white hover:bg-gray-300 hover:text-white'>Rejected</p>
                    </div>}
                </div>
                <div className='w-full'>
                    <Search type={'search'} placeholder={'Start typing to search  for user'} icon={<img src={Searchicon} />} styleClass={''} />
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
           <Pagination/>
        </CustomCard>
       </div>
    )
}

export default Handman