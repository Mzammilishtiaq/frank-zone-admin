import * as React from 'react';
import CustomCard from '@src/Shared/Card/CustomCard'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import Search from '@src/Shared/Search/Search';
import { BsSearch } from "react-icons/bs";
import { Table } from '@src/Shared/Table/Table';
import Pagination from '@src/Shared/Table/Pagination';
import viewbtn from '@src/assets/icon/view.svg';
import deletebtn from '@src/assets/icon/delete.svg';
import CustomButton from '@src/Shared/CustomButton';
import { Switch } from '@mui/material';
import Data1 from '@src/assets/data.json';
import Popup from '@src/Shared/Popup/Popup';
import { useNavigate } from 'react-router-dom';



function UserManagmentList() {
    const [isdeletepop, setisDeletePop] = React.useState(false);
const navigate= useNavigate();
    const Column = [
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-lg">{'ID'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 100,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black capitalize'>{row.id}</p>
                </div>
            )
        },
        {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-lg">{'Name'}</span>
                </div>
            ),
            dataIndex: 'name',
            key: 'name',
            width: 100,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black capitalize'>{row.name}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-lg">{'Phone'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 150,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black capitalize'>{row.phone}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-lg">{'Email'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 200,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black capitalize'>{row.email}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-lg">{'Address'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 150,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center">
                    <p className='text-black capitalize'>{row.address}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-center justify-center'>
                    <span className="font-semibold text-lg">{'Action'}</span>
                </div>
            ),
            dataIndex: 'id',
            key: 'id',
            width: 150,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-center gap-2">
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />

                    <CustomButton type={'button'} handleButtonClick={() => navigate(`/user_management/profile/${row.id}`)} icon={<img src={viewbtn} className='w-5' />} />
                    <CustomButton type={'button'} icon={<img src={deletebtn} className='w-5' />} />
                </div>
            )
        }
    ]
    return (
        <>
            <Popup isOpen={isdeletepop} handleClose={() => setisDeletePop(false)} isShowHeader={true} disabledelete='Disable' userid='01'>
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
                    styleClass={'btn-red w-full !mt-0 !rounded-xl !font-medium ml-2 bg-red-600 text-white py-5 px-4 font-semibold'}
                />
            </Popup>
            <CustomCard styleClass={' px-5 py-4 '}>
                <div role="presentation flex flex-col gap-2">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href='/dashboard' className=''>
                            Dashboard
                        </Link>
                        <Typography color="text-sm">User</Typography>
                    </Breadcrumbs>
                    <h5 className='text-2xl font-semibold font-sans'>User Management</h5>
                </div>
                <Search icon={<BsSearch className='text-gray-400my-4' />} type={'search'} placeholder={'Start typing to search for user'} />
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
        </>
    )
}

export default UserManagmentList
