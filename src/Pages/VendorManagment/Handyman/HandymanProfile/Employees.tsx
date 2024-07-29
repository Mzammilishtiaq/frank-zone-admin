import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import profileimg from '@assets/icon/Profile-Menu.png';
import Allimgicon from '@assets/icon/allgroup.svg';
import filledicon from '@assets/icon/filter-icon.svg';
import Searchicon from '@assets/icon/search-icon.svg';
import Search from '@src/Shared/Search/Search';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';
import { Table } from '@src/Shared/Table/Table';

function Employees() {
    const navigate = useNavigate();
    const [drop, setDrop] = useState(false);
    function handleDrop(): void {
        setDrop(prevDrop => !prevDrop)
    }

    const Data1 = [
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
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'User ID'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px]'>{row.firstname}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'User Name'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.lastname}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Phone Number'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate'>{row.phone}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Email'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate' title={row.email}>{row.email}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Status'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-center justify-center px-3">
                    <p className={
                        row.status && row.status === 'PENDING'
                            ? 'text-white bg-orange-500  rounded px-5 py-1 font-normal'
                            : row.status == 'REJECTED'
                                ? 'text-white  bg-red-500  rounded px-5 py-1 font-normal'
                                : 'text-white bg-green-500  rounded px-5 py-1 font-normal'
                    }>
                        {row.status?.charAt(0).toUpperCase() + row.status?.slice(1)?.toLowerCase()}
                    </p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-end justify-end -ml-5'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1]">{'Action'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-end justify-end gap-3 -ml-5">
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
        <div className='flex flex-col items-start gap-5'>
            <h5 className='text-xl sm:text-lg font-semibold text-[rgba(5, 25, 23, 1)] pt-2'>Employees Details</h5>
            <div className='flex items-center'>
                <AvatarGroup max={15} total={24} sx={{ gap: "10px" }}>
                    <div className="flex flex-col gap-2">
                        <Avatar src={Allimgicon} alt="" />
                        <p className='text-sm text-gray-500'>All</p>
                    </div>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
                            <div className="flex flex-col gap-2">
                                <Avatar alt="Remy Sharp" src={profileimg} />
                                <p className='text-sm text-gray-500'>Alex</p>
                            </div>
                        ))
                    }
                </AvatarGroup>

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
        </div>
    )
}

export default Employees
