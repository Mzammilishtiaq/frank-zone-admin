import React, { useEffect, useState } from 'react';
import { Breadcrumbs, Switch, Typography } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import CustomCard from '@src/Shared/Card/CustomCard';
import SeperatorLine from '@src/Shared/SeperatorLine/SeperatorLine';
import Search from '@src/Shared/Search/Search';
import Searchicon from '@src/assets/icon/search-icon.svg';
import { Table } from '@src/Shared/Table/Table';
import Pagination from '@src/Shared/Table/Pagination';
import viewbtn from '@src/assets/icon/view.svg';
import CustomButton from '@src/Shared/CustomButton';
import filledicon from '@src/assets/icon/filter-icon.svg';
import { useNavigate } from 'react-router-dom';
import LazyImage from '@src/Shared/LazyImage/LazyImage';
import { backendCall } from '@src/Shared/utils/BackendService/backendCall';
import { handleToastMessage } from '@src/Shared/toastify';
import Input from '@src/Shared/Input/Input';
import { Spinner } from '@src/Shared/Spinner/Spinner';
import { VendorManagmentListModel } from '@src/Shared/Models/UserVendor/VendorManagmentListModel';
import NoRecored from '@src/Shared/NoRecored/NoRecored';


interface filterType {
    searchValue: any;
    offset: any;
    limit: any;
    order: string;
    accountState: any
}
function VendorManagmentList() {
    const navigate = useNavigate();
    const [drop, setDrop] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isloading, setIsLoading] = useState(false);
    const [userdatalist, setUserDataList] = useState([]) as any;
    const [emtypmessage, setEmptyMessage] = useState(false);
    const [filterValue, setFilterValue] = useState<filterType>({
        searchValue: '',
        offset: 0,
        limit: 10,
        order: 'asc',
        accountState: ''
    })
    let moduleId = searchParams.get('module_id');

    const handleChangePage = (event: any) => {
        console.log(event);
        setFilterValue({ ...filterValue, offset: event });
    };

    const handleChangeRowsPerPage = (event: any) => {
        console.log(event);
        setFilterValue({ ...filterValue, limit: event });
    };
        function handleDrop(): void {
            setDrop(prevDrop => !prevDrop)
    
    }
    const handleFilterBtn = (item: string) => {
        setFilterValue({ ...filterValue, accountState: item });
        // console.log(item)
        setDrop(false)

    }

    
    // console.log('userdatalist === ', moduleId, userdatalist);

    useEffect(() => {
        const delaytime = setTimeout(() => {
            FetchUserManagmentData();
        }, 600)

        return () => clearTimeout(delaytime)
    }, [filterValue, moduleId])


    // api fetching
    const FetchUserManagmentData = () => {
        setIsLoading(true)
        backendCall({
            url: moduleId ? `/api/admin/vendor_management/modules/${moduleId}?limit=${filterValue.limit}&offset=${filterValue.offset}&order=asc&text=${filterValue.searchValue}&accountStatus=${filterValue.accountState}` : '',
            method: 'GET',
            dataModel: VendorManagmentListModel,
        }).then((res) => {
            // console.log('user managment ==', res)
            if (!res.error) {
                    setIsLoading(false)
                    setUserDataList(res.data)
                    // handleToastMessage('success', res?.message)
            } else {
                setIsLoading(false)
                handleToastMessage('error', res?.message)
            }
        })
    }


    // const Data1 = [
    //     {
    //         firstname: "ali",
    //         lastname: "khan",
    //         phone: "222233384",
    //         email: "alukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.comalukhan@gmail.com",
    //         status: 'PENDING'
    //     },
    //     {
    //         firstname: "ali2",
    //         lastname: "khan2",
    //         phone: "22223338422",
    //         email: "alukhan2@gmail.com",
    //         status: 'REJECTED'
    //     }, {
    //         firstname: "ali3",
    //         lastname: "khan3",
    //         phone: "22223338433",
    //         email: "alukhan3@gmail.com",
    //         status: 'DELIVERED'
    //     }, {
    //         firstname: "ali4",
    //         lastname: "khan4",
    //         phone: "22223338444",
    //         email: "alukhan4@gmail.com",
    //         status: 'PENDING'
    //     }, {
    //         firstname: "ali",
    //         lastname: "khan",
    //         phone: "222233384",
    //         email: "alukhan@gmail.com",
    //         status: 'APPROVED'
    //     }, {
    //         firstname: "ali5",
    //         lastname: "khan5",
    //         phone: "22223338455",
    //         email: "alukhan55@gmail.com",
    //         status: 'REJECTED'
    //     }, {
    //         firstname: "ali5",
    //         lastname: "khan5",
    //         phone: "22223338455",
    //         email: "alukhan55@gmail.com",
    //         status: 'REJECTED'
    //     }, {
    //         firstname: "ali5",
    //         lastname: "khan5",
    //         phone: "22223338455",
    //         email: "alukhan55@gmail.com",
    //         status: 'REJECTED'
    //     }, {
    //         firstname: "ali5",
    //         lastname: "khan5",
    //         phone: "22223338455",
    //         email: "alukhan55@gmail.com",
    //         status: 'REJECTED'
    //     }
    // ]

    const statusName = ["APPROVE", "REJECTED", "PENDING", "IN-REVIEW", "BLOCKED"];

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
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Last Name'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.lastname}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Phone Number'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]'>{row.phone}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Email'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-start justify-start">
                    <p className='text-black-900 capitalize font-normal opacity-[0.7] text-[15px] truncate sm:text-[10px] md:text-[10px]' title={row.email}>{row.email}</p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-start justify-start'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Documnet'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="flex items-start justify-start px-3">
                    <p className={
                        row.accountstatus && row.accountstatus === 'PENDING'
                            ? 'text-white bg-orange-500  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                            : row.accountstatus == 'REJECTED'
                                ? 'text-white  bg-red-500  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                                : 'text-white bg-green-500  rounded px-5 py-1 font-normal sm:text-[10px] md:text-[10px]'
                    }>
                        {row.accountstatus?.charAt(0).toUpperCase() + row.accountstatus?.slice(1)?.toLowerCase()}
                    </p>
                </div>
            )
        }, {
            title: (
                <div className='w-full flex items-start justify-start ml-14'>
                    <span className="font-semibold text-black-900 text-[15px] opacity-[1] sm:text-sm md:text-sm">{'Action'}</span>
                </div>
            ),
            dataIndex: 'index',
            key: 'index',
            width: 50,
            render: (name: string, row: any) => (
                <div className="w-full flex items-center justify-start ml-14 gap-3">
                    <Switch
                        // checked={}
                        // onChange={}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <CustomButton icon={<LazyImage src={viewbtn} className='w-4' />} handleButtonClick={() => navigate(`/vendor_managment/vendor_details/${row.id}?module_id=${moduleId}`)} type={'button'} />
                </div>
            )
        }
    ]


    return (
        <>
            <CustomCard styleClass={' '}>
               <div role="presentation" className='px-5 pt-5'>
                    <Breadcrumbs aria-label="breadcrumb" className='opacity-[0.3]'>
                        <Link to='/dashboard' className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer'>
                            Dashboard
                        </Link>
                        <p className='text-sm xs:text-xs hover:!text-blue-902 cursor-pointer'>Vendor Management</p>
                    </Breadcrumbs>
                    <div className="flex items-center justify-between">
                        <h5 className='text-2xl sm:text-lg font-medium xs:text-xs text-[rgba(5, 25, 23, 1)]'>{moduleId == '1' ? 'Ecommerce' : moduleId == '2' ? 'Food' : moduleId == '4' ? 'OnLine Consultation' : ''} Vendors Management</h5>
                    </div>
                </div>
                <div className="w-full flex items-center px-5 ">
                    <div className='px-2 py-1 cursor-pointer relative top-0'>
                        <img src={filledicon} className='text-2xl text-gray-400 font-thin' onClick={handleDrop} />

                        {drop  && <div className="w-72 absolute top-10 z-50">
                            {
                                statusName.map((item) => (
                                    <p className='border border-black-900 border-opacity-0.3 text-black-900 text-opacity-0.3 p-2 bg-white hover:bg-gray-100 sm:text-xs md:text-xs sm:p-1 md:p-1 capitalize' onClick={() => handleFilterBtn(item)}>{item}</p>

                                ))
                            }
                        </div>}
                    </div>
                    <div className='w-full'>
                        <Input
                            name='searchvalue'
                            id='searchvalue'
                            type='text'
                            placeholder='Start typing to search for user'
                            className='sm:placeholder:text-xs px-3 sm:w-50'
                            leftIcon={<img src={Searchicon} className='w-[28px] opacity-[1]' />}
                            // inputClassName=''
                            onChange={(e: { target: { value: any; }; }) => setFilterValue({ ...filterValue, searchValue: e.target.value })}

                        />
                    </div>
                </div>

                <Table
                    tableLayout="fixed"
                    columns={column as any}
                    emptyText={userdatalist?.count == 0   ? (<NoRecored />) :  (<div className="flex justify-center w-full my-3">
                        <Spinner isLoading={isloading} />
                    </div>)}
                    data={userdatalist.rows}
                    rowKey="id"
                    scroll={{ x: 1000 }}
                    sticky={true}
                    className=""
                    onHeaderRow={() => ({
                        className: '',
                    })}
                />
                <div className="px-5 pb-5">
                <Pagination
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    totalCount={userdatalist?.count}
                />
                </div>

            </CustomCard>
        </>
    )
}

export default VendorManagmentList
