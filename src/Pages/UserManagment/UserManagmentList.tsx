import * as React from 'react';
import CustomCard from '@src/Shared/Card/CustomCard'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import Search from '@src/Shared/Search/Search';
import { Table } from '@src/Shared/Table/Table';
import Pagination from '@src/Shared/Table/Pagination';
import viewbtn from '@src/assets/icon/view.svg';
import deletebtn from '@src/assets/icon/delete.svg';
import CustomButton from '@src/Shared/CustomButton';
import { Switch } from '@mui/material';
import Data1 from '@src/assets/data.json';
import Popup from '@src/Shared/Popup/Popup';
import { Link, useNavigate } from 'react-router-dom';
import DeleteCut from '@src/assets/icon/delete-cut.svg'
import searchicon from '@src/assets/icon/search-icon.svg';
import LazyImage from '@src/Shared/LazyImage/LazyImage';

function UserManagmentList() {
    const [isdeletepop, setisDeletePop] = React.useState(false);
    const navigate = useNavigate();
    const Column = [
        {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'ID'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 100,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] sm:text-[10px] md:text-[10px]'>{row.id}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Name'}</span>
                </div>
            ),
            dataIndex: 'name',
            key: 'name',
            width: 100,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.name}>{row.name}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Phone'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 150,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.phone}>{row.phone}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Email'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 200,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row.email}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Address'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 150,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.address}>{row.address}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-end justify-center ml-5'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Action'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 150,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-end gap-3">
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />

                    <CustomButton type={'button'} handleButtonClick={() => navigate(`/user_management/profile/${row.id}`)} icon={<LazyImage src={viewbtn} className='w-4' />} />
                    <CustomButton type={'button'} icon={<LazyImage src={deletebtn}  handleClick={() => setisDeletePop(true)} className='w-4' />} />
                </div>
            )
        }
    ]
    return (
        <div className=''>
            <Popup isOpen={isdeletepop} handleClose={() => setisDeletePop(false)} isShowHeader={true} >
                <div className={``}><div className="flex flex-col justify-center items-center gap-3 ">
                    <img src={DeleteCut} className="h-[100px] mt-6" />
                    <h4 className="font-[900] font-sans mt-5 text-[20px]">Are you sure?</h4>
                    <div className="flex flex-col justify-center items-center ">
                        <p className="font-medium ">
                            Are you sure you want to <span className="font-[900]">disable</span>{' '}
                        </p>
                        <p className="font-semibold ">This User?</p>
                        <p className="text-sm font-[900] mt-2">User ID #113355</p>
                    </div>

                    <div className="space-y-3 mt-8 flex justify-around w-4/5">
                        <CustomButton
                            handleButtonClick={() => setisDeletePop(false)}
                            label={'Cancel'}
                            type={'button'}
                            styleClass={'btn-gray-light w-full  !rounded-xl !font-medium mr-2 bg-gray-400 text-white py-5 px-4 font-semibold '}
                        />
                        <CustomButton
                            // handleButtonClick={handleDelete}
                            label={'Yes, Disable'}
                            type={'button'}
                            styleClass={'btn-red w-full !mt-0 !rounded-xl !font-medium ml-2 bg-red-600 text-white py-4 px-4 font-semibold'}
                        />
                    </div>
                </div>
                </div>
            </Popup>
            <CustomCard styleClass={' p-5 '}>
                <div role="presentation" className='mb-3' >
                    <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
                        <Link   to='/dashboard' className='text-sm hover:border-b-2 hover:border-gray-500'>
                            Dashboard
                        </Link>
                        <Typography color="" className='text-sm'>User</Typography>
                    </Breadcrumbs>
                    <h5 className='text-2xl font-medium text-[rgba(5, 25, 23, 1)]'>User Management</h5>
                </div>
                <Search icon={<img src={searchicon} className='w-[28px] opacity-[1]' />} type={'search'} placeholder={'Start typing to search for user'} styleClass={'sm:placeholder:text-xs sm:w-68'} />
                <Table
                    tableLayout="fixed"
                    columns={Column as any}
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
                <Pagination
                // handleChangePage={handleChangePage}
                // handleChangeRowsPerPage={handleChangeRowsPerPage}
                // totalCount={productsList.count}
                />

            </CustomCard>
        </div>
    )
}

export default UserManagmentList
